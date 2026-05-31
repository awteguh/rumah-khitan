"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase";

// Lama "jeda" sebelum kunjungan halaman yang sama dihitung lagi (30 menit).
// Mencegah refresh berulang menggelembungkan angka kunjungan.
const THROTTLE_MS = 30 * 60 * 1000;

// Pencatat kunjungan. Setiap kali pengunjung membuka/berpindah halaman,
// satu baris dikirim ke tabel "page_views" di Supabase.
// Tidak menampilkan apa pun (return null) — bekerja diam-diam di belakang.
export default function Analytics() {
  const pathname = usePathname();
  const lastPath = useRef(null);

  useEffect(() => {
    // Hindari pencatatan ganda untuk halaman yang sama (mis. mode dev).
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    const supabase = getSupabaseBrowser();
    if (!supabase) return; // Supabase belum dikonfigurasi → lewati.

    // Jangan hitung lagi halaman yang sama jika baru dibuka < 30 menit lalu
    // (anti "refresh spam"). Disimpan per halaman di browser pengunjung.
    const throttleKey = `rk_view_${pathname || "/"}`;
    const last = Number(localStorage.getItem(throttleKey) || 0);
    if (Date.now() - last < THROTTLE_MS) return;
    localStorage.setItem(throttleKey, String(Date.now()));

    // Lewati pencatatan untuk perangkat pemilik (jika menandai "jangan lacak").
    if (localStorage.getItem("rk_dnt") === "1") return;

    // Buat ID pengunjung anonim sekali, simpan di browser, agar bisa
    // membedakan "pengunjung unik" tanpa mengumpulkan data pribadi.
    let visitorId = localStorage.getItem("rk_visitor_id");
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("rk_visitor_id", visitorId);
    }

    supabase
      .from("page_views")
      .insert({
        path: pathname || "/",
        referrer: document.referrer || null,
        visitor_id: visitorId,
        user_agent: navigator.userAgent,
      })
      .then(({ error }) => {
        if (error) console.error("Analytics:", error.message);
      });
  }, [pathname]);

  return null;
}
