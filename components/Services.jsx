import { services } from "@/data/content";
import SectionHead from "./SectionHead";
import ServiceCard from "./ServiceCard";

// Bagian "Layanan Kami" — menampilkan daftar layanan dalam grid 3 kolom.
export default function Services() {
  return (
    <section className="section" id="layanan">
      <div className="container">
        <SectionHead eyebrow="Layanan Kami" title="Solusi Khitan untuk Semua Usia">
          Dari bayi, anak-anak, remaja, hingga dewasa — kami siap melayani dengan penanganan yang tepat.
        </SectionHead>

        <div className="grid grid-3">
          {services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
