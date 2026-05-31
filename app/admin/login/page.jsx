"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/data/site";

// Halaman login admin dengan tampilan custom (bukan popup browser).
export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        // Sukses: biarkan tombol tetap berputar sampai dashboard terbuka.
        router.push("/admin");
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Gagal masuk. Coba lagi.");
      setLoading(false);
    } catch {
      setError("Terjadi gangguan jaringan. Coba lagi.");
      setLoading(false);
    }
  }

  return (
    <main style={st.wrap}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <form onSubmit={handleSubmit} style={st.card}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.brand.logo} alt={`Logo ${site.brand.fullName}`} style={st.logo} />
        <h1 style={st.title}>Masuk Admin</h1>
        <p style={st.subtitle}>Dashboard Pengunjung · {site.brand.fullName}</p>

        {error && <div style={st.error}>⚠️ {error}</div>}

        <label style={st.label}>
          Username
          <input
            style={st.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            autoComplete="username"
            autoFocus
            required
          />
        </label>

        <label style={st.label}>
          Password
          <div style={st.passRow}>
            <input
              style={{ ...st.input, marginBottom: 0, paddingRight: 70 }}
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass((v) => !v)}
              style={st.showBtn}
              tabIndex={-1}
            >
              {showPass ? "Sembunyi" : "Lihat"}
            </button>
          </div>
        </label>

        <button
          type="submit"
          style={{ ...st.submit, ...(loading ? st.submitLoading : {}) }}
          disabled={loading}
        >
          {loading ? (
            <span style={st.btnLoading}>
              <span style={st.spinner} /> Memproses…
            </span>
          ) : (
            "Masuk"
          )}
        </button>

        <p style={st.note}>🔒 Halaman ini khusus pengelola website.</p>
      </form>
    </main>
  );
}

// ---- Gaya (inline) agar halaman ini mandiri ----
const GREEN = "#16a34a";
const st = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(160deg, #f0fdf4 0%, #ecfeff 100%)",
    padding: 20,
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 380,
    background: "#fff",
    borderRadius: 20,
    padding: "36px 30px",
    boxShadow: "0 12px 40px rgba(0,0,0,.10)",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
  },
  logo: { width: 64, height: 64, borderRadius: 14, objectFit: "cover", alignSelf: "center", marginBottom: 14 },
  title: { fontSize: 24, fontWeight: 800, textAlign: "center", margin: 0, color: "#0f172a" },
  subtitle: { fontSize: 13, color: "#64748b", textAlign: "center", margin: "6px 0 22px" },
  error: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#b91c1c",
    borderRadius: 10,
    padding: "10px 12px",
    fontSize: 13,
    marginBottom: 16,
  },
  label: { display: "block", fontSize: 13, fontWeight: 600, color: "#334155", marginBottom: 14 },
  input: {
    width: "100%",
    marginTop: 6,
    marginBottom: 0,
    padding: "12px 14px",
    fontSize: 15,
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    outline: "none",
    boxSizing: "border-box",
  },
  passRow: { position: "relative", marginTop: 6 },
  showBtn: {
    position: "absolute",
    right: 8,
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    color: GREEN,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    padding: "4px 8px",
  },
  submit: {
    marginTop: 8,
    padding: "13px 16px",
    fontSize: 15,
    fontWeight: 700,
    color: "#fff",
    background: GREEN,
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  submitLoading: { opacity: 0.85, cursor: "wait" },
  btnLoading: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 },
  spinner: {
    width: 16,
    height: 16,
    border: "2px solid rgba(255,255,255,.5)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin .7s linear infinite",
  },
  note: { fontSize: 12, color: "#94a3b8", textAlign: "center", margin: "18px 0 0" },
};
