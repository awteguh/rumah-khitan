-- =============================================================
--  TABEL MONITORING PENGUNJUNG WEBSITE
--  Cara pakai: buka Supabase → SQL Editor → New query →
--  tempel semua isi file ini → klik "Run".
-- =============================================================

-- 1. Tabel untuk menyimpan setiap kunjungan halaman.
create table if not exists public.page_views (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  path        text        not null default '/',
  referrer    text,
  visitor_id  uuid        not null,
  user_agent  text
);

-- Index agar pencarian berdasarkan waktu tetap cepat saat data banyak.
create index if not exists page_views_created_at_idx
  on public.page_views (created_at desc);

-- 2. Aktifkan Row Level Security (WAJIB untuk tabel di schema public).
alter table public.page_views enable row level security;

-- 3. Izinkan pengunjung (anon) HANYA menambah catatan kunjungan.
--    Mereka tidak bisa membaca, mengubah, atau menghapus data.
grant insert on table public.page_views to anon, authenticated;

create policy "Pengunjung boleh mencatat kunjungan"
  on public.page_views
  for insert
  to anon, authenticated
  with check (true);

-- Catatan keamanan:
--   • Sengaja TIDAK ada policy SELECT untuk anon → data analitik
--     tidak bisa dibaca publik.
--   • Dashboard /admin membaca data lewat "service_role" (kunci rahasia
--     yang hanya ada di server) yang otomatis melewati RLS.
