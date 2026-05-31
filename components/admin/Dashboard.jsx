"use client";

import { useEffect, useState, useCallback } from "react";
import {
  AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const GREEN = "#16a34a";
const BLUE = "#0ea5e9";

// ---- Pembantu rentang tanggal (memakai waktu browser) ----
function startOfDay(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
function endOfDay(d) { const x = new Date(d); x.setHours(23, 59, 59, 999); return x; }
function isoDate(d) { return new Date(d).toISOString().slice(0, 10); } // YYYY-MM-DD

function presetRange(p) {
  const now = new Date();
  if (p === "today") return { from: startOfDay(now).toISOString(), to: now.toISOString() };
  if (p === "7d") { const f = startOfDay(now); f.setDate(f.getDate() - 6); return { from: f.toISOString(), to: now.toISOString() }; }
  if (p === "30d") { const f = startOfDay(now); f.setDate(f.getDate() - 29); return { from: f.toISOString(), to: now.toISOString() }; }
  return null;
}

const PRESETS = [
  { key: "today", label: "Hari Ini" },
  { key: "7d", label: "7 Hari" },
  { key: "30d", label: "30 Hari" },
  { key: "custom", label: "Custom" },
];

export default function Dashboard() {
  const [preset, setPreset] = useState("7d");
  const [range, setRange] = useState(() => presetRange("7d"));
  const [customFrom, setCustomFrom] = useState(isoDate(Date.now() - 6 * 86400e3));
  const [customTo, setCustomTo] = useState(isoDate(Date.now()));

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (r) => {
    if (!r) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/stats?from=${encodeURIComponent(r.from)}&to=${encodeURIComponent(r.to)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Gagal memuat data.");
      setData(json);
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(range); }, [range, fetchData]);

  function choosePreset(p) {
    setPreset(p);
    if (p !== "custom") setRange(presetRange(p));
  }
  function applyCustom() {
    if (!customFrom || !customTo) return;
    const from = startOfDay(new Date(customFrom)).toISOString();
    const to = endOfDay(new Date(customTo)).toISOString();
    if (new Date(from) > new Date(to)) { setError("Tanggal awal melebihi tanggal akhir."); return; }
    setRange({ from, to });
  }

  return (
    <div>
      {/* ---- Filter ---- */}
      <div style={st.filterRow}>
        {PRESETS.map((p) => (
          <button
            key={p.key}
            onClick={() => choosePreset(p.key)}
            style={{ ...st.filterBtn, ...(preset === p.key ? st.filterBtnActive : {}) }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {preset === "custom" && (
        <div style={st.customRow}>
          <label style={st.customLabel}>
            Dari
            <input type="date" value={customFrom} max={customTo}
              onChange={(e) => setCustomFrom(e.target.value)} style={st.dateInput} />
          </label>
          <label style={st.customLabel}>
            Sampai
            <input type="date" value={customTo} min={customFrom} max={isoDate(Date.now())}
              onChange={(e) => setCustomTo(e.target.value)} style={st.dateInput} />
          </label>
          <button onClick={applyCustom} style={st.applyBtn}>Terapkan</button>
        </div>
      )}

      {error && <div style={st.error}>⚠️ {error}</div>}

      {/* ---- Kartu statistik ---- */}
      <div style={st.grid}>
        <Stat label="Total Kunjungan" value={data?.totalViews} loading={loading} />
        <Stat label="Pengunjung Unik" value={data?.uniqueVisitors} loading={loading} />
        <Stat label="Rata-rata / Hari" value={data?.avgPerDay} loading={loading} />
        <Stat label="Total Semua Waktu" value={data?.allTime} loading={loading} muted />
      </div>

      {/* ---- Grafik ---- */}
      <section style={st.card}>
        <h2 style={st.cardTitle}>Grafik Kunjungan</h2>
        <div style={{ position: "relative", width: "100%", height: 300 }}>
          {loading && <div style={st.overlay}><span style={st.spinner} /></div>}
          {data && data.series.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.series} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="gv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={GREEN} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={GREEN} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f6" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} interval="preserveStartEnd" />
                <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#64748b" }} width={36} />
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 13 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="views" name="Kunjungan" stroke={GREEN} strokeWidth={2} fill="url(#gv)" />
                <Line type="monotone" dataKey="visitors" name="Pengunjung unik" stroke={BLUE} strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            !loading && <p style={st.empty}>Belum ada kunjungan pada rentang ini.</p>
          )}
        </div>
      </section>

      {/* ---- Sumber kunjungan ---- */}
      <section style={st.card}>
        <h2 style={st.cardTitle}>Sumber Kunjungan Teratas</h2>
        {data && data.referrers.length > 0 ? (
          data.referrers.map((r) => (
            <div key={r.name} style={st.barRow}>
              <span style={st.barLabel}>{r.name}</span>
              <div style={st.barTrack}>
                <div style={{ ...st.barFill, width: `${(r.count / data.referrers[0].count) * 100}%` }} />
              </div>
              <span style={st.barValue}>{r.count}</span>
            </div>
          ))
        ) : (
          <p style={st.empty}>Belum ada data.</p>
        )}
      </section>

      {/* ---- Kunjungan terbaru ---- */}
      <section style={st.card}>
        <h2 style={st.cardTitle}>Kunjungan Terbaru</h2>
        <table style={st.table}>
          <thead>
            <tr>
              <th style={st.th}>Waktu</th><th style={st.th}>Halaman</th><th style={st.th}>Sumber</th>
            </tr>
          </thead>
          <tbody>
            {data && data.recent.length > 0 ? (
              data.recent.map((r, i) => (
                <tr key={i}>
                  <td style={st.td}>{new Date(r.time).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
                  <td style={st.td}>{r.path}</td>
                  <td style={st.td}>{r.source}</td>
                </tr>
              ))
            ) : (
              <tr><td style={st.td} colSpan={3}>{loading ? "Memuat…" : "Belum ada kunjungan."}</td></tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function Stat({ label, value, loading, muted }) {
  return (
    <div style={st.statCard}>
      <p style={st.statLabel}>{label}</p>
      <p style={{ ...st.statValue, color: muted ? "#0f172a" : GREEN }}>
        {loading ? "…" : (value ?? 0).toLocaleString("id-ID")}
      </p>
    </div>
  );
}

const st = {
  filterRow: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
  filterBtn: { padding: "8px 16px", fontSize: 14, fontWeight: 600, color: "#475569", background: "#fff", border: "1px solid #cbd5e1", borderRadius: 999, cursor: "pointer" },
  filterBtnActive: { background: GREEN, color: "#fff", borderColor: GREEN },
  customRow: { display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end", marginBottom: 16, padding: 16, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12 },
  customLabel: { display: "flex", flexDirection: "column", fontSize: 12, fontWeight: 600, color: "#475569", gap: 6 },
  dateInput: { padding: "9px 12px", fontSize: 14, border: "1px solid #cbd5e1", borderRadius: 8 },
  applyBtn: { padding: "9px 18px", fontSize: 14, fontWeight: 700, color: "#fff", background: GREEN, border: "none", borderRadius: 8, cursor: "pointer" },
  error: { background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", borderRadius: 10, padding: "10px 14px", fontSize: 13, marginBottom: 16 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14, marginBottom: 22 },
  statCard: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,.04)" },
  statLabel: { color: "#64748b", fontSize: 13, margin: 0 },
  statValue: { fontSize: 28, fontWeight: 800, margin: "6px 0 0" },
  card: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, marginBottom: 22 },
  cardTitle: { fontSize: 16, fontWeight: 700, margin: "0 0 16px" },
  overlay: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.6)", zIndex: 2 },
  spinner: { width: 34, height: 34, border: "4px solid #e2e8f0", borderTopColor: GREEN, borderRadius: "50%", display: "inline-block", animation: "spin .8s linear infinite" },
  empty: { color: "#94a3b8", fontSize: 14, textAlign: "center", paddingTop: 40 },
  barRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 },
  barLabel: { width: 160, fontSize: 13, color: "#475569", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  barTrack: { flex: 1, background: "#f1f5f9", borderRadius: 6, height: 22, overflow: "hidden" },
  barFill: { background: GREEN, height: "100%", borderRadius: 6, minWidth: 2 },
  barValue: { width: 40, textAlign: "right", fontSize: 13, fontWeight: 600 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: { textAlign: "left", padding: "8px 10px", borderBottom: "2px solid #e2e8f0", color: "#64748b", fontWeight: 600 },
  td: { padding: "8px 10px", borderBottom: "1px solid #f1f5f9" },
};
