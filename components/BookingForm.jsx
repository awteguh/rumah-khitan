"use client";

import { site } from "@/data/site";
import { bookingMethods } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

// Form "Booking Cepat" di kartu hero. Saat dikirim, data diubah
// menjadi pesan WhatsApp dan dibuka di tab baru.
export default function BookingForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nama = data.get("nama");
    const hp = data.get("hp");
    const metode = data.get("metode");

    const pesan =
      `Halo ${site.brand.fullName}, saya mau booking khitan.\n` +
      `Nama: ${nama}\n` +
      `No. WA: ${hp}\n` +
      `Metode: ${metode}`;

    window.open(waLink(pesan), "_blank");
  }

  return (
    <form className="quick-form" onSubmit={handleSubmit}>
      <input type="text" name="nama" placeholder="Nama anak / orang tua" required />
      <input type="tel" name="hp" placeholder="No. WhatsApp aktif" required />
      <select name="metode" required defaultValue="">
        <option value="" disabled>
          Pilih metode khitan
        </option>
        {bookingMethods.map((metode) => (
          <option key={metode}>{metode}</option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary btn-block">
        Booking Sekarang — Balas Cepat
      </button>
    </form>
  );
}
