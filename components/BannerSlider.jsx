"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "https://picsum.photos/id/1005/1600/500", alt: "Banner Rumah Khitan 1" },
  { src: "https://picsum.photos/id/1011/1600/500", alt: "Banner Rumah Khitan 2" },
  { src: "https://picsum.photos/id/1025/1600/500", alt: "Banner Rumah Khitan 3" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="banner-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="banner-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div className="banner-slide" key={i}>
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>

      <button className="banner-arrow banner-arrow-left" onClick={prev} aria-label="Sebelumnya">&#10094;</button>
      <button className="banner-arrow banner-arrow-right" onClick={next} aria-label="Berikutnya">&#10095;</button>

      <div className="banner-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`banner-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
