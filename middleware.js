import { NextResponse } from "next/server";
import { getSessionToken, ADMIN_COOKIE } from "@/lib/adminAuth";

// Penjaga halaman /admin. Kalau belum login, dialihkan ke /admin/login.
export const config = { matcher: ["/admin", "/admin/:path*"] };

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Halaman login sendiri harus bebas diakses (agar tidak berputar-putar).
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  // Jika admin belum diatur, jangan kunci apa pun.
  if (!user || !pass) return NextResponse.next();

  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  const expected = await getSessionToken();
  if (token && expected && token === expected) {
    return NextResponse.next(); // sudah login → boleh masuk
  }

  // Belum login → alihkan ke halaman login.
  const url = req.nextUrl.clone();
  url.pathname = "/admin/login";
  return NextResponse.redirect(url);
}
