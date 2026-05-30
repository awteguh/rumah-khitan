import Reveal from "./Reveal";

// Judul bagian: tulisan kecil hijau (eyebrow), judul besar, dan
// deskripsi opsional. Dipakai berulang di tiap section.
export default function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  );
}
