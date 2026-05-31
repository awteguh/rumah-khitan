// =============================================================
//  PENGECEK LOGIN ADMIN
//  Dipakai bersama oleh middleware (penjaga) & route login.
//  Token sesi dihitung dari ADMIN_USER + ADMIN_PASSWORD, jadi
//  tidak bisa dipalsukan tanpa tahu password. Memakai Web Crypto
//  agar jalan di server maupun di middleware (Edge).
// =============================================================

export const ADMIN_COOKIE = "admin_session";

export async function getSessionToken() {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;
  if (!user || !pass) return null;

  const data = new TextEncoder().encode(`${user}:${pass}:rumah-khitan`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
