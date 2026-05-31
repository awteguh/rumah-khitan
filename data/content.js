// =============================================================
//  ISI / KONTEN HALAMAN
//  Semua teks yang tampil di halaman ada di sini. Untuk menambah
//  atau mengubah, cukup edit daftar (list) di bawah ini.
//  Tiap item diapit { } dan dipisah koma.
// =============================================================

// ---- Menu navigasi atas ----
export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Metode", href: "#metode" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

// ---- Tulisan kecil & angka di bagian Hero (atas) ----
export const hero = {
  badge: "⭐ Rating 4.9/5 dari 100+ keluarga",
  // Bagian judul yang diberi warna hijau dipisah agar mudah diatur
  titleNormal: "Khitan Modern yang ",
  titleHighlight: "Aman, Minim Nyeri & Cepat Sembuh",
  lead:
    "Si kecil tetap tenang, Bapak/Ibu tidak deg-degan. Ditangani operator bersertifikat dengan alat steril sekali pakai dan metode terkini — plus bonus & kontrol GRATIS di setiap booking.",
  // Poin singkat di bawah tombol (penguat kepercayaan).
  perks: ["Operator bersertifikat", "Alat steril sekali pakai", "Bonus + kontrol gratis"],
  stats: [
    { value: "100+", label: "Anak Terlayani" },
    { value: "15+", label: "Tahun Pengalaman" },
    { value: "4.9★", label: "Rating Keluarga" },
  ],
};

// ---- Baris kepercayaan (strip hitam di bawah hero) ----
export const trustItems = [
  "🏥 Klinik Berizin",
  "👨‍⚕️ Operator Bersertifikat",
  "🧼 Alat Steril Sekali Pakai",
  "💳 Harga Transparan",
  "🏠 Bisa Home Service",
];

// ---- Daftar Layanan ----
export const services = [
  { icon: "👶", title: "Khitan Bayi", text: "Penanganan lembut untuk bayi & balita dengan metode klamp yang cepat dan minim trauma." },
  { icon: "🧒", title: "Khitan Anak", text: "Suasana ramah anak, pendekatan tanpa menakuti, dengan bius lokal yang aman." },
  { icon: "🧑", title: "Khitan Dewasa", text: "Layanan privat & profesional untuk remaja dan dewasa, termasuk indikasi medis." },
  { icon: "🏠", title: "Home Service", text: "Khitan di rumah Anda. Tim datang lengkap dengan peralatan steril & higienis." },
  { icon: "🎉", title: "Paket Khitan Massal", text: "Untuk sekolah, yayasan, atau acara bakti sosial. Harga khusus & terjadwal." },
  { icon: "💊", title: "Kontrol & Perawatan", text: "Kontrol pasca khitan gratis + panduan perawatan luka hingga sembuh total." },
];

// ---- Metode Khitan ----
// "featured: true" memberi tanda/garis hijau "Terpopuler".
export const methods = [
  {
    title: "🔸 Super Ring",
    featured: true,
    tag: "Terpopuler",
    points: ["Tanpa jahitan dan perban", "Minim pendarahan", "Bebas mandi", "Cocok untuk semua umur"],
  },
  {
    title: "🔹 Laser / Electric Cauter",
    points: ["Luka lebih kering", "Risiko perdarahan kecil", "Pemulihan lebih cepat", "Cocok hampir semua usia"],
  },
  {
    title: "🔹 Konvensional",
    points: ["Metode klasik teruji", "Dengan jahitan rapi", "Biaya paling ekonomis", "Cocok kondisi tertentu"],
  },
];

// ---- Keunggulan ----
export const advantages = [
  { icon: "👨‍⚕️", title: "Operator Berpengalaman", text: "Ditangani tenaga medis bersertifikat & ramah anak." },
  { icon: "⚡", title: "Proses Cepat", text: "Tindakan singkat, anak tidak lama menahan cemas." },
  { icon: "🧼", title: "Steril & Higienis", text: "Alat sekali pakai, ruangan bersih sesuai standar." },
  { icon: "😊", title: "Minim Nyeri", text: "Teknik bius modern, anak lebih tenang & nyaman." },
  { icon: "🎁", title: "Bonus Menarik", text: "Sarung/celana khitan, sertifikat, & snack anak." },
  { icon: "📞", title: "Garansi Kontrol", text: "Kontrol gratis & konsultasi pasca khitan kapan saja." },
  { icon: "🏠", title: "Bisa ke Rumah", text: "Layanan home service tanpa ribet antre." },
  { icon: "💳", title: "Harga Transparan", text: "Tanpa biaya tersembunyi, bisa cicil & QRIS." },
];

// ---- Paket Harga ----
// "popular: true" memberi tanda "Best Seller" pada paket.
export const pricing = [
  {
    name: "Paket Hemat",
    price: "Rp 600–750",
    unit: "rb",
    sub: "Metode Konvensional",
    features: ["Tindakan oleh tenaga medis", "Bius lokal", "Obat & perawatan dasar", "Kontrol 1x gratis"],
  },
  {
    name: "Paket Premium",
    price: "Rp 1–1,5",
    unit: "jt",
    sub: "Metode Super Ring / Laser",
    popular: true,
    features: ["Ditangani operator", "Luka kering & cepat sembuh", "Paket obat lengkap", "Celana khitan + sertifikat", "Kontrol 2x gratis"],
  },
  {
    name: "Paket Home Service",
    price: "Rp 1.5",
    unit: "jt",
    sub: "Khitan di Rumah Anda",
    features: ["Tim datang ke lokasi", "Metode klamp/laser", "Peralatan steril lengkap", "Bonus + kontrol gratis"],
  },
];

// ---- Testimoni ----
export const testimonials = [
  { text: "Anak saya nggak nangis sama sekali, prosesnya cepat banget. Operatornya sabar dan ramah, anak malah diajak ngobrol. Recommended!", author: "Ibu Rina, Jakarta" },
  { text: "Pakai metode laser, lukanya cepat kering. 3 hari anak sudah aktif main lagi. Bonus celana khitan & kontrolnya benar-benar gratis!", author: "Bapak Andi, Bekasi" },
  { text: "Home service-nya enak banget, nggak perlu antre. Alatnya steril, tim profesional, dan harga sesuai yang dijanjikan — tanpa biaya tambahan. Puas!", author: "Ibu Sari, Depok" },
];

// ---- FAQ (pertanyaan yang sering ditanya) ----
export const faqs = [
  { q: "Apakah khitan terasa sakit?", a: "Kami menggunakan bius lokal modern sehingga anak hanya merasakan sedikit tidak nyaman saat penyuntikan. Selama tindakan, area sudah mati rasa." },
  { q: "Berapa lama proses khitannya?", a: "Tergantung metode. Super Ring ± 7–10 menit, laser/cauter ± 15–20 menit, konvensional ± 20–30 menit." },
  { q: "Berapa lama sampai sembuh total?", a: "Umumnya 5–10 hari tergantung metode dan perawatan. Kami berikan panduan perawatan luka dan kontrol gratis." },
  { q: "Apakah bisa khitan di rumah?", a: "Bisa. Layanan home service kami datang ke lokasi Anda lengkap dengan peralatan steril dan tim medis." },
  { q: "Metode apa yang paling cocok untuk anak saya?", a: "Konsultasikan dulu dengan kami. Tim akan merekomendasikan metode terbaik sesuai usia dan kondisi anak." },
];

// ---- Bonus yang sudah termasuk di semua paket (promo "bonus gratis") ----
export const bonuses = [
  "Celana/sarung khitan",
  "Sertifikat khitan",
  "Snack & hadiah anak",
  "Panduan perawatan luka",
  "Kontrol pasca-khitan gratis",
];

// ---- Jaminan kami (risk-reversal). Hanya janji yang benar-benar disanggupi ----
export const guarantees = [
  { icon: "💳", title: "Harga Transparan", text: "Harga yang disepakati di awal = yang Anda bayar. Tanpa biaya tersembunyi, tanpa kejutan di lokasi." },
  { icon: "🩹", title: "Kontrol Pasca-Khitan Gratis", text: "Kontrol luka setelah khitan tanpa biaya tambahan hingga kondisi membaik." },
  { icon: "💬", title: "Konsultasi Gratis Tanpa Komitmen", text: "Tanya apa pun sebelum & sesudah khitan. Tidak cocok? Tidak ada paksaan untuk booking." },
];

// ---- Pilihan metode pada form booking cepat ----
export const bookingMethods = [
  "Super Ring",
  "Laser / Electric Cauter",
  "Konvensional",
  "Belum tahu, mau konsultasi",
];
