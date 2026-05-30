import { trustItems } from "@/data/content";

// Strip gelap berisi poin-poin kepercayaan, tepat di bawah hero.
export default function TrustBar() {
  return (
    <section className="trust">
      <div className="container trust-inner">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
