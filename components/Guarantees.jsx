import { guarantees } from "@/data/content";
import SectionHead from "./SectionHead";
import FeatureCard from "./FeatureCard";

// Bagian "Jaminan Kami" (risk-reversal) — mengurangi keraguan calon
// pasien sebelum memutuskan booking.
export default function Guarantees() {
  return (
    <section className="section" id="jaminan">
      <div className="container">
        <SectionHead eyebrow="Tenang, Ada Jaminannya" title="Komitmen Kami untuk Anda">
          Kami ingin Bapak/Ibu memutuskan dengan tenang, tanpa rasa khawatir soal biaya maupun penanganan.
        </SectionHead>

        <div className="grid grid-3">
          {guarantees.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
