import { site } from "@/data/site";
import { faqs } from "@/data/content";

// =============================================================
//  DATA TERSTRUKTUR (JSON-LD) untuk Google
//  Ini "kartu identitas" website yang dibaca mesin pencari, agar
//  bisnis muncul lebih kaya di hasil pencarian & Google Maps
//  (nama, alamat, jam buka, telepon, dan daftar FAQ).
//  Tidak terlihat oleh pengunjung — hanya dibaca oleh Google.
//  Datanya otomatis diambil dari data/site.js & data/content.js.
// =============================================================
export default function StructuredData() {
  const loc = site.location || {};
  const logoUrl = `${site.url}${site.brand.logo}`;

  // Profil bisnis (Local SEO): nama, alamat, jam buka, telepon.
  const business = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#business`,
    name: site.brand.fullName,
    description: site.seo.description,
    url: site.url,
    logo: logoUrl,
    image: logoUrl,
    telephone: site.phone,
    priceRange: "Rp600.000–Rp1.500.000",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street || site.address,
      addressLocality: loc.city || undefined,
      addressRegion: loc.region || undefined,
      postalCode: loc.postalCode || undefined,
      addressCountry: loc.country || "ID",
    },
    openingHours: loc.openingHours || undefined,
    geo:
      loc.latitude && loc.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: loc.latitude,
            longitude: loc.longitude,
          }
        : undefined,
    hasMap: loc.mapUrl || undefined,
    sameAs: site.social && site.social.length ? site.social : undefined,
  };

  // Daftar tanya-jawab → bisa tampil langsung di hasil Google.
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
