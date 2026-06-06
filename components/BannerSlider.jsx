"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    src: "https://picsum.photos/id/1005/1600/500",
    alt: "Banner Rumah Khitan 1",
  },
  {
    src: "https://picsum.photos/id/1011/1600/500",
    alt: "Banner Rumah Khitan 2",
  },
  {
    src: "https://picsum.photos/id/1025/1600/500",
    alt: "Banner Rumah Khitan 3",
  },
];

const INTERVAL = 4000;

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, INTERVAL);
    return () => clearInterval(timer.current);
  }, [paused, next]);

  return (
    <section
      className="banner-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="banner-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="banner-slide" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <button className="banner-arrow banner-prev" onClick={prev} aria-label="Slide sebelumnya">
        ‹
      </button>
      <button className="banner-arrow banner-next" onClick={next} aria-label="Slide berikutnya">
        ›
      </button>

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
    </section>
  );
}
