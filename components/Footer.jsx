import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

// Tautan singkat di kolom "Tautan" footer.
const footerLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Metode", href: "#metode" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  // Tahun otomatis mengikuti tahun sekarang.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src={site.brand.logo}
            alt={`Logo ${site.brand.fullName}`}
            className="brand-logo footer-logo"
          />
          <strong>{site.brand.fullName}</strong>
          <p>Khitan modern yang aman, nyaman, dan terpercaya untuk keluarga Indonesia.</p>
        </div>

        <div className="footer-col">
          <h4>Tautan</h4>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Kontak</h4>
          <a href={waLink()} target="_blank" rel="noopener">
            WhatsApp: {site.phoneDisplay}
          </a>
          <a href={`tel:${site.phone}`}>Telepon: {site.phoneDisplay}</a>
          <span>{site.address}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {year} {site.brand.fullName}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
