import Reveal from "./Reveal";

// Kartu metode khitan: judul + daftar poin.
// Jika "featured" bernilai true, kartu diberi sorotan + label (tag).
export default function MethodCard({ title, points, featured = false, tag }) {
  return (
    <Reveal as="article" className={featured ? "method featured" : "method"}>
      {tag && <span className="tag">{tag}</span>}
      <h3>{title}</h3>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Reveal>
  );
}
