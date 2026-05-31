-- =============================================================
--  REALTIME: pemberitahuan kunjungan baru (cara AMAN)
--  Jalankan di Supabase → SQL Editor → New query → Run.
--
--  Saat ada kunjungan baru, database mengirim "ping" ringan TANPA
--  data pengunjung ke channel publik "rk-views". Dashboard admin
--  mendengar ping ini lalu mengambil ulang data dari API yang aman.
--  Jadi data analitik TIDAK pernah terbuka ke publik.
-- =============================================================

-- Fungsi pengirim ping. Payload sengaja minim (hanya waktu),
-- supaya tidak ada data sensitif yang tersiar di channel publik.
create or replace function public.broadcast_new_view()
returns trigger
security definer set search_path = ''
language plpgsql
as $$
begin
  perform realtime.send(
    jsonb_build_object('at', now()), -- payload minimal, tanpa data pengunjung
    'new_view',                      -- nama event
    'rk-views',                      -- nama channel (topik)
    false                            -- false = channel publik
  );
  return null;
end;
$$;

-- Cegah fungsi ini dipanggil langsung oleh publik (hanya untuk trigger).
revoke execute on function public.broadcast_new_view() from public, anon, authenticated;

-- Pasang trigger: jalan setiap ada baris baru di page_views.
drop trigger if exists trg_broadcast_new_view on public.page_views;
create trigger trg_broadcast_new_view
after insert on public.page_views
for each row execute function public.broadcast_new_view();
