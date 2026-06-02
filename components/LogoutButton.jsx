"use client";

import { useRouter } from "next/navigation";

// Tombol keluar dari dashboard admin.
export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button onClick={logout} style={style}>
      Keluar
    </button>
  );
}

const style = {
  padding: "8px 16px",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--text)",
  background: "var(--surface)",
  border: "1px solid var(--line)",
  borderRadius: 10,
  cursor: "pointer",
  flexShrink: 0,
};
