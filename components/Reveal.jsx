"use client";

import { useEffect, useRef, useState } from "react";

// Komponen pembungkus yang memunculkan animasi "muncul saat di-scroll".
// Pakai: <Reveal as="article" className="card"> ...isi... </Reveal>
//  - as       : jenis elemen HTML (div, article, dll). Default: div.
//  - className : kelas styling elemen tersebut.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", visible ? "visible" : "", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
