import Reveal from "./Reveal";

// Kartu testimoni: bintang 5, isi komentar, dan nama penulis.
export default function Testimonial({ text, author }) {
  return (
    <Reveal as="blockquote" className="testi">
      <div className="stars">★★★★★</div>
      <p>&quot;{text}&quot;</p>
      <footer>— {author}</footer>
    </Reveal>
  );
}
