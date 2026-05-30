import Reveal from "./Reveal";

// Satu item FAQ yang bisa dibuka/tutup (pakai elemen <details> bawaan).
export default function FaqItem({ question, answer }) {
  return (
    <Reveal as="details" className="faq-item">
      <summary>{question}</summary>
      <p>{answer}</p>
    </Reveal>
  );
}
