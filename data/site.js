// =============================================================
//  PENGATURAN UTAMA WEBSITE
//  Ubah data di sini untuk mengganti nama brand, nomor WhatsApp,
//  alamat, dan jam buka. Tidak perlu menyentuh kode lain.
// =============================================================

export const site = {
  // ⚠️ WAJIB DIGANTI: alamat website Anda yang asli (domain produksi).
  // Dipakai untuk canonical, sitemap, dan data SEO yang dibaca Google.
  url: "https://rumah-khitan.vercel.app/",

  brand: {
    // Tulisan "Rumah Khitan" + kata yang ditebalkan ("Abdunnafi'")
    prefix: "Rumah Khitan",
    highlight: "Abdunnafi'",
    // Nama lengkap (dipakai di judul, footer, pesan WhatsApp)
    fullName: "Rumah Khitan Abdunnafi'",
    // Lokasi file logo (taruh gambar di folder: public/assets/)
    logo: "/assets/logo.png",
  },

  // Nomor WhatsApp (format internasional, tanpa "+" dan tanpa "0" depan)
  waNumber: "6281373733419",

  // Nomor telepon untuk tombol "Telepon Kami"
  phone: "+6281373733419",
  phoneDisplay: "0813-7373-3419",

  // Alamat & jam operasional
  address: "Jl. Karangmangun RT 01 RW 10",
  hours: "Buka 08.00–20.00 setiap hari",

  // Detail lokasi untuk Google (Local SEO). Makin lengkap, makin mudah
  // muncul di Google Maps & pencarian "khitan dekat saya". Lengkapi field
  // yang masih kosong. Kosongkan jika benar-benar tidak ada datanya.
  location: {
    street: "Jl. Karangmangun RT 01 RW 10",
    city: "",          // contoh: "Sragen"
    region: "",        // provinsi, contoh: "Jawa Tengah"
    postalCode: "",    // kode pos, contoh: "57211"
    country: "ID",
    openingHours: "Mo-Su 08:00-20:00", // format Google: Mo,Tu,...Su
    latitude: "",      // dari Google Maps (opsional), contoh: "-7.42"
    longitude: "",     // dari Google Maps (opsional), contoh: "111.02"
    mapUrl: "",        // link Google Maps / Google Business Profile
  },

  // Tautan media sosial / profil bisnis (opsional). Membantu Google
  // menghubungkan website dengan akun resmi Anda. Isi yang ada saja.
  social: [
    // "https://www.instagram.com/...",
    // "https://www.facebook.com/...",
  ],

  // Banner promo di paling atas halaman.
  // Ubah "enabled" jadi false untuk menyembunyikannya.
  promo: {
    enabled: true,
    emoji: "🎁",
    text: "GRATISSS celana khitan + sertifikat + kontrol 2× untuk setiap booking bulan ini",
    cta: "Klaim Sekarang",
  },

  // Untuk judul tab browser & deskripsi di Google / media sosial
  seo: {
    // Judul ±58 karakter agar tampil utuh di hasil Google (maks ±60).
    title: "Khitan Modern Aman & Minim Nyeri — Rumah Khitan Abdunnafi'",
    // Deskripsi ±150 karakter agar tidak terpotong di Google (maks ±160).
    description:
      "Khitan modern di Karangmangun: metode Super Ring, Laser & Konvensional. Operator bersertifikat, minim nyeri, cepat sembuh. Booking cepat via WhatsApp.",
    keywords: [
      "khitan modern",
      "sunat anak",
      "khitan laser",
      "khitan super ring",
      "khitan bayi",
      "home service khitan",
      "Rumah Khitan Abdunnafi'",
      "khitan Karangmangun",
    ],
  },
};
