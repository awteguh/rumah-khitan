import { methods } from "@/data/content";
import SectionHead from "./SectionHead";
import MethodCard from "./MethodCard";

// Bagian "Metode Khitan" — latar belakang abu muda (section-alt).
export default function Methods() {
  return (
    <section className="section section-alt" id="metode">
      <div className="container">
        <SectionHead eyebrow="Metode Khitan" title="Pilih Metode Sesuai Kebutuhan">
          Kami jelaskan kelebihan tiap metode supaya Bapak/Ibu bisa memilih dengan tenang.
        </SectionHead>

        <div className="grid grid-3">
          {methods.map((item) => (
            <MethodCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
