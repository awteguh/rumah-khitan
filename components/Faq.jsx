import { faqs } from "@/data/content";
import SectionHead from "./SectionHead";
import FaqItem from "./FaqItem";

// Bagian "FAQ" — lebar lebih sempit (container narrow).
export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container narrow">
        <SectionHead eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />

        <div className="faq-list">
          {faqs.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
