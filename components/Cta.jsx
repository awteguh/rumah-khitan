import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

// Bagian ajakan (Call To Action) berwarna hijau + info alamat & jam.
export default function Cta() {
  const chatLink = waLink(`Halo ${site.brand.fullName}, saya mau booking khitan`);

  return (
    <section className="cta" id="kontak">
      <div className="container cta-inner">
        <h2>Khitan Si Kecil Tanpa Drama, Tanpa Deg-degan</h2>
        <p>
          Masih ragu memilih metode? Chat dulu — konsultasi gratis & tanpa komitmen, tim kami
          bantu pilih metode dan jadwal terbaik untuk anak Anda. Booking bulan ini dapat bonus
          lengkap + kontrol GRATIS, dan pesan Anda dibalas &lt; 15 menit.
        </p>

        <div className="cta-actions">
          <a href={chatLink} className="btn btn-light" target="_blank" rel="noopener">
            💬 Chat WhatsApp
          </a>
          <a href={`tel:${site.phone}`} className="btn btn-outline-light">
            📞 Telepon Kami
          </a>
        </div>

        <p className="cta-addr">
          📍 {site.address} &nbsp;•&nbsp; ⏰ {site.hours}
        </p>
      </div>
    </section>
  );
}
