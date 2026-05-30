import { testimonials } from "@/data/content";
import SectionHead from "./SectionHead";
import Testimonial from "./Testimonial";

// Bagian "Testimoni" — daftar komentar pelanggan.
export default function Testimonials() {
  return (
    <section className="section" id="testimoni">
      <div className="container">
        <SectionHead eyebrow="Kata Mereka" title="Dipercaya Ribuan Keluarga">
          ⭐ Rating 4.9/5 dari 10.000+ keluarga yang mempercayakan khitan si kecil kepada kami.
        </SectionHead>

        <div className="grid grid-3">
          {testimonials.map((item) => (
            <Testimonial key={item.author} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
