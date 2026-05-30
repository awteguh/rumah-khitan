import { site } from "@/data/site";
import { advantages } from "@/data/content";
import SectionHead from "./SectionHead";
import FeatureCard from "./FeatureCard";

// Bagian "Keunggulan" — grid 4 kolom.
export default function Advantages() {
  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <SectionHead eyebrow="Kenapa Memilih Kami" title={`Keunggulan ${site.brand.fullName}`} />

        <div className="grid grid-4">
          {advantages.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
