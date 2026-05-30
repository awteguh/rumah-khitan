import { site } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

// Tombol WhatsApp mengambang di pojok kanan bawah layar.
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(`Halo ${site.brand.fullName}`)}
      className="wa-float"
      target="_blank"
      rel="noopener"
      aria-label="Chat WhatsApp"
    >
      💬
    </a>
  );
}
