"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase";

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
