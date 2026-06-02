import LogoutButton from "@/components/LogoutButton";
import Dashboard from "@/components/admin/Dashboard";
import ThemeToggle from "@/components/ThemeToggle";

// Jangan diindeks Google (halaman privat).
export const metadata = {
  title: "Dashboard Pengunjung — Rumah Khitan Abdunnafi'",
  robots: { index: false, follow: false },
};

// Halaman tipis: kerangka + judul + tombol keluar. Data & grafik
// ditangani komponen <Dashboard /> (mengambil data lewat /api/admin/stats).
export default function AdminPage() {
  return (
    <main style={page}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}`}</style>
      <div style={header}>
        <div>

          <h1 style={h1}>📊 Dashboard</h1>
          <p style={sub}>Rumah Khitan Abdunnafi' · waktu WIB</p>
        </div>
        <div style={actions}>
          <ThemeToggle />
          <LogoutButton />
        </div>
      </div>
      <Dashboard />
    </main>
  );
}

const page = { minHeight: "100vh", maxWidth: 1000, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif", color: "var(--text)" };
const header = { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 22 };
const actions = { display: "flex", alignItems: "center", gap: 10, flexShrink: 0 };
const h1 = { fontSize: 26, fontWeight: 800, margin: "0 0 4px" };
const sub = { color: "var(--muted)", margin: 0, fontSize: 14 };
