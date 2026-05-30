import { pricing, bonuses } from "@/data/content";
import SectionHead from "./SectionHead";
import PriceCard from "./PriceCard";

// Bagian "Paket Harga".
export default function Pricing() {
  return (
    <section className="section section-alt" id="harga">
      <div className="container">
        <SectionHead eyebrow="Paket Harga" title="Harga Jelas, Tanpa Kejutan">
          Harga dapat disesuaikan dengan kondisi & metode. Hubungi kami untuk penawaran terbaik.
        </SectionHead>

        {/* Strip bonus: menonjolkan promo "bonus gratis" di semua paket */}
        <div className="bonus-strip">
          <strong>🎁 Semua paket sudah termasuk bonus GRATIS:</strong>
          {bonuses.map((bonus) => (
            <span key={bonus} className="bonus-chip">
              {bonus}
            </span>
          ))}
        </div>

        <div className="grid grid-3 pricing">
          {pricing.map((item) => (
            <PriceCard key={item.name} {...item} />
          ))}
        </div>

        <p className="price-foot">* Harga ilustrasi. Silakan konfirmasi harga terkini saat booking.</p>
      </div>
    </section>
  );
}
