import Reveal from "./Reveal";

// Kartu layanan: ikon, judul, dan deskripsi singkat.
export default function ServiceCard({ icon, title, text }) {
  return (
    <Reveal as="article" className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}
