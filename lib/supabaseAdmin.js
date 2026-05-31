import { createClient } from "@supabase/supabase-js";

// Klien Supabase untuk SISI SERVER (dashboard /admin).
// Memakai "service_role" — kunci RAHASIA yang TIDAK boleh dikirim ke browser.
// Karena namanya TANPA awalan NEXT_PUBLIC_, Next.js hanya menyimpannya di
// server, tidak pernah dikirim ke pengunjung. Kunci ini melewati RLS
// sehingga bisa membaca seluruh data analitik.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
