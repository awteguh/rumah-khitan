// Tampil otomatis saat dashboard sedang dimuat (memberi umpan balik instan).
export default function Loading() {
  return (
    <main style={wrap}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div style={spinner} />
      <p style={text}>Memuat dashboard…</p>
    </main>
  );
}

const wrap = {
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "system-ui, sans-serif",
  color: "var(--muted)",
};
const spinner = {
  width: 40,
  height: 40,
  border: "4px solid var(--line)",
  borderTopColor: "var(--green)",
  borderRadius: "50%",
  animation: "spin .8s linear infinite",
};
const text = { marginTop: 14, fontSize: 14 };
