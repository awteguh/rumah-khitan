import { site } from "@/data/site";

// Membuat tautan WhatsApp lengkap dengan pesan yang sudah terisi.
// Contoh: waLink("Halo, saya mau booking") => https://wa.me/62...?text=...
export function waLink(message = "") {
  const base = `https://wa.me/${site.waNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
