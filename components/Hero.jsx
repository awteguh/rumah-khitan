import { site } from "@/data/site";
import { hero } from "@/data/content";
import { waLink } from "@/lib/whatsapp";
import BookingForm from "./BookingForm";

// Bagian paling atas halaman: judul utama, tombol aksi, statistik,
// dan kartu "Booking Cepat" di sebelah kanan.
export default function Hero() {
  const konsultasiLink = waLink(`Halo ${site.brand.fullName}, saya mau konsultasi & booking khitan`);

  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge">{hero.badge}</span>
          <h1>
            {hero.titleNormal}
            <span className="hl">{hero.titleHighlight}</span>
          </h1>
          <p className="lead">{hero.lead}</p>

          <div className="hero-actions">
            <a href={konsultasiLink} className="btn btn-primary" target="_blank" rel="noopener">
              💬 Konsultasi Gratis via WhatsApp
            </a>
            <a href="#harga" className="btn btn-ghost">
              Lihat Paket & Harga
            </a>
          </div>

          <ul className="hero-perks">
            {hero.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>

          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <h3>📅 Booking Cepat</h3>
            <p>Isi data, tim kami hubungi balik &lt; 15 menit. Slot tiap hari terbatas.</p>
            <BookingForm />
            <small className="form-note">Gratis konsultasi • Tanpa biaya tersembunyi • Tanpa komitmen</small>
          </div>
        </div>
      </div>
    </section>
  );
}
