import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/adminAuth";

// Menghapus cookie sesi → pengguna keluar (logout).
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}
