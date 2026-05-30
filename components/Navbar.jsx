"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { navLinks } from "@/data/content";

// Bilah navigasi atas. Interaktif, jadi ditandai "use client":
//  - menambah bayangan saat halaman di-scroll
//  - membuka/menutup menu pada layar HP
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Pantau posisi scroll untuk efek bayangan navbar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container nav-inner">
        <a href="#hero" className="brand">
          <img src={site.brand.logo} alt={`Logo ${site.brand.fullName}`} className="brand-logo" />
          <span>
            {site.brand.prefix} <strong>{site.brand.highlight}</strong>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#kontak" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Booking Sekarang
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Buka menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
