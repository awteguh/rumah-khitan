import Reveal from "./Reveal";

// Kartu keunggulan: ikon, judul, dan deskripsi singkat.
export default function FeatureCard({ icon, title, text }) {
  return (
    <Reveal className="feature">
      <div className="feature-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </Reveal>
  );
}
