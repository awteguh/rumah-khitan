"use client";

import { useEffect, useState } from "react";

// Tombol ganti mode terang/gelap. Pilihan disimpan di browser pengunjung.
export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Ikuti tema yang sudah dipasang skrip anti-kedip di <body>.
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={theme === "dark" ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      title={theme === "dark" ? "Mode terang" : "Mode gelap"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
