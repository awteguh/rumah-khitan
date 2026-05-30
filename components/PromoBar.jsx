import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

// Banner promo tipis di paling atas halaman. Otomatis tersembunyi
// jika site.promo.enabled = false (lihat data/site.js).
export default function PromoBar() {
  if (!site.promo.enabled) return null;

  const link = waLink(`Halo ${site.brand.fullName}, saya mau klaim promo bonus khitan`);

  return (
    <div className="promo-bar">
      <div className="container promo-inner">
        <span>
          {site.promo.emoji} <strong>{site.promo.text}</strong>
        </span>
        <a href={link} target="_blank" rel="noopener">
          {site.promo.cta} →
        </a>
      </div>
    </div>
  );
}
