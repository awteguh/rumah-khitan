import { NextResponse } from "next/server";
import { getSessionToken, ADMIN_COOKIE } from "@/lib/adminAuth";

// Menerima username & password dari form login. Jika cocok dengan
// ADMIN_USER & ADMIN_PASSWORD di .env.local, pasang cookie sesi.
export async function POST(req) {
  const { username, password } = await req.json().catch(() => ({}));

  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  if (!user || !pass) {
    return NextResponse.json(
      { error: "Admin belum diatur. Isi ADMIN_USER & ADMIN_PASSWORD di .env.local." },
      { status: 500 }
    );
  }

  if (username !== user || password !== pass) {
    return NextResponse.json(
      { error: "Username atau password salah." },
      { status: 401 }
    );
  }

  const token = await getSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true, // tidak bisa dibaca JavaScript (lebih aman)
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // login bertahan 7 hari
  });
  return res;
}
