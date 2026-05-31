import { NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { getSessionToken, ADMIN_COOKIE } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

const TZ = "Asia/Jakarta"; // semua waktu ditampilkan dalam WIB

// ---- Pembantu pengelompokan waktu (hourly / daily / monthly) ----
function partsInTZ(date) {
  const f = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", hourCycle: "h23",
  });
  return Object.fromEntries(f.formatToParts(date).map((p) => [p.type, p.value]));
}
function bucketKey(date, gran) {
  const p = partsInTZ(date);
  if (gran === "hour") return `${p.year}-${p.month}-${p.day} ${p.hour}`;
  if (gran === "month") return `${p.year}-${p.month}`;
  return `${p.year}-${p.month}-${p.day}`;
}
function bucketLabel(date, gran) {
  if (gran === "hour")
    return new Intl.DateTimeFormat("id-ID", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
  if (gran === "month")
    return new Intl.DateTimeFormat("id-ID", { timeZone: TZ, month: "short", year: "numeric" }).format(date);
  return new Intl.DateTimeFormat("id-ID", { timeZone: TZ, day: "numeric", month: "short" }).format(date);
}

function buildBuckets(from, to, gran) {
  const list = [];
  const seen = new Set();
  if (gran === "month") {
    const pf = partsInTZ(from), pt = partsInTZ(to);
    let y = +pf.year, m = +pf.month;
    const yEnd = +pt.year, mEnd = +pt.month;
    let guard = 0;
    while ((y < yEnd || (y === yEnd && m <= mEnd)) && guard++ < 240) {
      const repr = new Date(Date.UTC(y, m - 1, 15, 5)); // ~siang WIB
      list.push({ key: `${y}-${String(m).padStart(2, "0")}`, label: bucketLabel(repr, "month") });
      m++; if (m > 12) { m = 1; y++; }
    }
    return list;
  }
  const step = gran === "hour" ? 3600e3 : 86400e3;
  for (let t = from.getTime(); t <= to.getTime() + step; t += step) {
    const d = new Date(Math.min(t, to.getTime()));
    const key = bucketKey(d, gran);
    if (!seen.has(key)) { seen.add(key); list.push({ key, label: bucketLabel(d, gran) }); }
    if (t > to.getTime()) break;
  }
  return list;
}

function hostnameOf(ref) {
  if (!ref) return "Langsung / ketik manual";
  try { return new URL(ref).hostname.replace(/^www\./, ""); } catch { return ref; }
}

// Baca user-agent → jenis perangkat, browser, sistem operasi.
function parseUA(ua) {
  if (!ua) return { device: "Tidak diketahui", browser: "Tidak diketahui", os: "Tidak diketahui" };
  const r = new UAParser(ua).getResult();
  const t = r.device.type; // 'mobile', 'tablet', atau kosong (desktop)
  const device = t === "mobile" ? "HP / Ponsel" : t === "tablet" ? "Tablet" : "Komputer / Laptop";
  const browser = (r.browser.name || "Lainnya").replace(/^Mobile /, "");
  const os = r.os.name || "Lainnya";
  return { device, browser, os };
}

// Ubah objek hitungan {nama: jumlah} → array terurut [{name, count}].
function topList(counts, limit = 8) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

export async function GET(req) {
  // --- Keamanan: hanya admin yang sudah login ---
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  if (user && pass) {
    const token = req.cookies.get(ADMIN_COOKIE)?.value;
    const expected = await getSessionToken();
    if (!token || token !== expected) {
      return NextResponse.json({ error: "Tidak diizinkan." }, { status: 401 });
    }
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase belum dikonfigurasi. Isi .env.local lalu restart server." },
      { status: 503 }
    );
  }

  // --- Tentukan rentang waktu dari parameter ---
  const { searchParams } = new URL(req.url);
  const to = searchParams.get("to") ? new Date(searchParams.get("to")) : new Date();
  const from = searchParams.get("from")
    ? new Date(searchParams.get("from"))
    : new Date(to.getTime() - 7 * 86400e3);
  if (isNaN(from) || isNaN(to) || from > to) {
    return NextResponse.json({ error: "Rentang tanggal tidak valid." }, { status: 400 });
  }

  // --- Ambil data dalam rentang + total semua waktu (paralel) ---
  const [inRange, allTimeRes] = await Promise.all([
    supabase
      .from("page_views")
      .select("visitor_id, created_at, referrer, path, user_agent")
      .gte("created_at", from.toISOString())
      .lte("created_at", to.toISOString())
      .order("created_at", { ascending: false })
      .limit(50000),
    supabase.from("page_views").select("*", { count: "exact", head: true }),
  ]);

  if (inRange.error) {
    return NextResponse.json({ error: inRange.error.message }, { status: 500 });
  }

  const rows = inRange.data || [];
  const spanDays = (to - from) / 86400e3;
  const gran = spanDays <= 2.01 ? "hour" : spanDays > 100 ? "month" : "day";

  // --- Susun deret waktu untuk grafik ---
  const buckets = buildBuckets(from, to, gran);
  const idx = new Map(buckets.map((b, i) => [b.key, i]));
  const views = buckets.map(() => 0);
  const visitorSets = buckets.map(() => new Set());
  const refCounts = {};
  const deviceCounts = {};
  const browserCounts = {};
  const osCounts = {};

  for (const r of rows) {
    const i = idx.get(bucketKey(new Date(r.created_at), gran));
    if (i !== undefined) { views[i]++; visitorSets[i].add(r.visitor_id); }
    const h = hostnameOf(r.referrer);
    refCounts[h] = (refCounts[h] || 0) + 1;

    const ua = parseUA(r.user_agent);
    deviceCounts[ua.device] = (deviceCounts[ua.device] || 0) + 1;
    browserCounts[ua.browser] = (browserCounts[ua.browser] || 0) + 1;
    osCounts[ua.os] = (osCounts[ua.os] || 0) + 1;
  }

  const series = buckets.map((b, i) => ({
    label: b.label, views: views[i], visitors: visitorSets[i].size,
  }));

  const totalViews = rows.length;
  const uniqueVisitors = new Set(rows.map((r) => r.visitor_id)).size;
  const dayCount = Math.max(1, Math.round(spanDays) || 1);
  const avgPerDay = Math.round(totalViews / dayCount);

  const referrers = topList(refCounts, 6);
  const devices = topList(deviceCounts, 5);
  const browsers = topList(browserCounts, 6);
  const operatingSystems = topList(osCounts, 6);

  const recent = rows.slice(0, 12).map((r) => ({
    time: r.created_at, path: r.path, source: hostnameOf(r.referrer),
    device: parseUA(r.user_agent).device,
  }));

  return NextResponse.json({
    totalViews, uniqueVisitors, avgPerDay,
    allTime: allTimeRes.count ?? totalViews,
    granularity: gran, series, referrers,
    devices, browsers, operatingSystems, recent,
  });
}
