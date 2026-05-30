import Reveal from "./Reveal";

// Kartu harga: nama paket, harga, sub-judul, daftar fitur, dan tombol.
// Jika "popular" true: ada pita "Best Seller" + tombol hijau.
export default function PriceCard({ name, price, unit, sub, features, popular = false }) {
  return (
    <Reveal as="article" className={popular ? "price-card popular" : "price-card"}>
      {popular && <span className="ribbon">Best Seller</span>}
      <h3>{name}</h3>
      <div className="price">
        {price}
        <span>{unit}</span>
      </div>
      <p className="price-sub">{sub}</p>
      <ul>
        {features.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
      <a href="#kontak" className={popular ? "btn btn-primary btn-block" : "btn btn-ghost btn-block"}>
        Pilih Paket
      </a>
    </Reveal>
  );
}
