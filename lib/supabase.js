import { createClient } from "@supabase/supabase-js";

// Klien Supabase untuk SISI PENGUNJUNG (browser).
// Memakai kunci "anon" yang aman ditaruh di publik (hanya boleh menambah
// catatan kunjungan, tidak bisa membaca data analitik).
// Mengembalikan null jika env belum diisi, agar website tetap jalan.
let client = null;

export function getSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, { auth: { persistSession: false } });
  }
  return client;
}
