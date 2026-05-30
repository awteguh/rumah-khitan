// =============================================================
//  PENGATURAN UTAMA WEBSITE
//  Ubah data di sini untuk mengganti nama brand, nomor WhatsApp,
//  alamat, dan jam buka. Tidak perlu menyentuh kode lain.
// =============================================================

export const site = {
  brand: {
    // Tulisan "Rumah Khitan" + kata yang ditebalkan ("Abdunnafi'")
    prefix: "Rumah Khitan",
    highlight: "Abdunnafi'",
    // Nama lengkap (dipakai di judul, footer, pesan WhatsApp)
    fullName: "Rumah Khitan Abdunnafi'",
    // Lokasi file logo (taruh gambar di folder: public/assets/)
    logo: "/assets/logo.jpg",
  },

  // Nomor WhatsApp (format internasional, tanpa "+" dan tanpa "0" depan)
  waNumber: "6281234567890",

  // Nomor telepon untuk tombol "Telepon Kami"
  phone: "+6281234567890",
  phoneDisplay: "0812-3456-7890",

  // Alamat & jam operasional
  address: "Jl. Karangmangun RT 01 RW 10",
  hours: "Buka 08.00–20.00 setiap hari",

  // Banner promo di paling atas halaman.
  // Ubah "enabled" jadi false untuk menyembunyikannya.
  promo: {
    enabled: true,
    emoji: "🎁",
    text: "GRATIS celana khitan + sertifikat + kontrol 2× untuk setiap booking bulan ini",
    cta: "Klaim Sekarang",
  },

  // Untuk judul tab browser & deskripsi di Google / media sosial
  seo: {
    title: "Rumah Khitan Abdunnafi' — Khitan Modern Aman, Minim Nyeri & Cepat Sembuh",
    description:
      "Khitan modern di Karangmangun: metode Smart Klamp, Laser/Cauter & Konvensional. Operator bersertifikat, minim nyeri, cepat sembuh. Harga transparan + bonus & kontrol GRATIS. Booking via WhatsApp, dibalas cepat!",
    keywords: [
      "khitan modern",
      "sunat anak",
      "khitan laser",
      "smart klamp",
      "khitan bayi",
      "home service khitan",
      "Rumah Khitan Abdunnafi'",
      "khitan Karangmangun",
    ],
  },
};
