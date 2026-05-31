# 📖 Buku Panduan Website Rumah Khitan Abdunnafi'

> Halo! 👋 Buku ini dibuat dengan bahasa yang **sangat gampang**, seperti
> menjelaskan ke anak kecil. Tujuannya supaya siapa pun bisa paham website ini,
> walau belum pernah ngoding. Yuk kita mulai pelan-pelan. 🍼

---

## 1. Ini website apa, sih?

Ini adalah **website satu halaman** (orang menyebutnya *landing page*) untuk
mempromosikan jasa **khitan / sunat** bernama **Rumah Khitan Abdunnafi'**.

Bayangkan website ini seperti **brosur digital** yang panjang. Pengunjung tinggal
menggeser layar ke bawah, lalu melihat:

1. 🎁 Banner promo di paling atas
2. 🧭 Menu (Navbar)
3. 👋 Sapaan besar (Hero)
4. ✅ Baris kepercayaan
5. 🩺 Daftar layanan
6. 🔧 Metode khitan
7. ⭐ Keunggulan
8. 💰 Harga paket
9. 🛡️ Jaminan
10. 💬 Testimoni (kata pelanggan)
11. ❓ Tanya-jawab (FAQ)
12. 📞 Ajakan booking
13. 🦶 Footer (bagian kaki/bawah)
14. 🟢 Tombol WhatsApp melayang

Kalau pengunjung tertarik, mereka tinggal klik tombol **WhatsApp** untuk pesan
(booking). Gampang, kan?

---

## 2. Website ini dibuat pakai apa?

Seperti rumah yang dibangun pakai batu bata, website ini dibangun pakai:

| Bahan | Gunanya (bahasa gampang) |
|-------|--------------------------|
| **Next.js 15** | Mesin utama yang menjalankan website |
| **React 19** | Cara menyusun tampilan dari "potongan-potongan" kecil |
| **CSS** | Untuk warna, ukuran, dan dandanan tampilan |

Kamu **tidak perlu hafal** ini semua. Cukup tahu namanya saja. 😊

---

## 3. Cara menjalankan website di komputer

Sebelum mulai, komputer harus punya **Node.js** (versi 18.18 ke atas).
Itu seperti "listrik" yang menghidupkan website.

Buka terminal di folder ini, lalu ketik perintah ini **satu per satu**:

```bash
npm install     # Langkah 1: ambil semua "bahan" (cukup sekali saja)
npm run dev     # Langkah 2: nyalakan website
```

Setelah itu, buka browser dan kunjungi:

```
http://localhost:3000
```

🎉 Website-mu sudah hidup! Setiap kamu mengubah file, halaman akan ikut berubah
otomatis.

### Kalau mau dipakai sungguhan (online / produksi)

```bash
npm run build   # Bungkus website jadi rapi & cepat
npm run start   # Jalankan versi siap pakai
```

---

## 4. Isi folder (peta harta karun) 🗺️

Setiap folder punya tugas masing-masing. Ini penjelasannya:

```
rumah-khitan/
│
├── app/                  ← Otak utama halaman
│   ├── layout.jsx        ← Kerangka + judul tab + font
│   ├── page.jsx          ← Menyusun semua bagian dari atas ke bawah
│   └── globals.css       ← Semua dandanan/tampilan (warna, ukuran)
│
├── components/           ← Kotak berisi "potongan tampilan" (lihat bawah)
│
├── data/                 ← 📝 ISI TULISAN ada di sini (PALING PENTING!)
│   ├── site.js           ← Nama brand, nomor WA, alamat, jam buka
│   └── content.js        ← Semua teks: layanan, harga, testimoni, FAQ
│
├── lib/
│   └── whatsapp.js       ← Pembuat link WhatsApp otomatis
│
├── public/assets/        ← Tempat gambar (contoh: logo.jpg)
│
├── legacy/               ← Arsip versi lama (sudah tidak dipakai, biarkan saja)
│
├── README.md             ← Panduan singkat
└── DOKUMENTASI.md        ← Buku panduan ini 📖
```

### Apa itu "components"?

Bayangkan website seperti **mainan LEGO**. Setiap balok LEGO = satu *component*.
Kita susun balok-balok itu jadi satu website utuh. Ini daftar baloknya:

| Balok (Component) | Tugasnya |
|-------------------|----------|
| `PromoBar.jsx` | 🎁 Banner promo di paling atas |
| `Navbar.jsx` | 🧭 Menu navigasi atas |
| `Hero.jsx` | 👋 Sapaan besar pertama yang dilihat |
| `TrustBar.jsx` | ✅ Strip "klinik berizin, alat steril, dll" |
| `Services.jsx` | 🩺 Daftar layanan (pakai `ServiceCard`) |
| `Methods.jsx` | 🔧 Metode khitan (pakai `MethodCard`) |
| `Advantages.jsx` | ⭐ Keunggulan (pakai `FeatureCard`) |
| `Pricing.jsx` | 💰 Daftar harga (pakai `PriceCard`) |
| `Guarantees.jsx` | 🛡️ Bonus & jaminan |
| `Testimonials.jsx` | 💬 Kata pelanggan (pakai `Testimonial`) |
| `Faq.jsx` | ❓ Tanya-jawab (pakai `FaqItem`) |
| `Cta.jsx` | 📞 Ajakan terakhir untuk booking |
| `Footer.jsx` | 🦶 Bagian paling bawah |
| `WhatsAppFloat.jsx` | 🟢 Tombol WA bulat yang melayang |
| `BookingForm.jsx` | 📋 Formulir booking |
| `Reveal.jsx` | ✨ Efek muncul pelan saat di-scroll |
| `SectionHead.jsx` | 🏷️ Judul tiap bagian |

> Balok yang berakhiran `Card` (seperti `ServiceCard`, `PriceCard`) adalah
> "kartu" kecil yang dipakai berulang-ulang. Satu kartu, banyak isi. 🃏

---

## 5. Mau ganti isi tanpa ngoding? (Bagian paling penting!) ⭐

Tenang, kamu **tidak perlu** menyentuh kode rumit. Cukup buka **2 file** ini:

### 📄 File 1: `data/site.js` — Data Toko

Di sini kamu bisa ganti:

- **Nama brand** (`Rumah Khitan Abdunnafi'`)
- **Nomor WhatsApp** → tulis `waNumber`
- **Nomor telepon** → `phone` dan `phoneDisplay`
- **Alamat** → `address`
- **Jam buka** → `hours`
- **Banner promo** → `promo` (ubah `enabled: true` jadi `false` untuk sembunyikan)
- **Judul Google/SEO** → `seo`

> ⚠️ **Catatan nomor WhatsApp:** Tulis dengan format internasional.
> Contoh: nomor `0813-7373-3419` ditulis menjadi `6281373733419`
> (ganti angka `0` depan menjadi `62`, tanpa tanda `+` dan tanpa strip).

### 📄 File 2: `data/content.js` — Semua Tulisan

Di sini kamu bisa ganti/tambah:

- `services` → daftar layanan
- `methods` → metode khitan
- `advantages` → keunggulan
- `pricing` → **harga paket**
- `testimonials` → kata pelanggan
- `faqs` → tanya-jawab
- `bonuses` & `guarantees` → bonus dan jaminan

Bentuk datanya seperti daftar belanja. Tiap item diapit kurung kurawal `{ }` dan
dipisah koma. Contoh menambah layanan baru:

```js
export const services = [
  { icon: "👶", title: "Khitan Bayi", text: "Penanganan lembut..." },
  { icon: "🆕", title: "Layanan Baru", text: "Tulis penjelasan di sini..." },
  // ↑ tinggal salin satu baris, ganti isinya, jangan lupa koma di belakang
];
```

> 💡 **Tips aman:** Selalu ganti tulisan **di antara tanda kutip** `"..."` saja.
> Jangan hapus tanda kurung `{ }`, tanda kutip, atau koma — nanti website error.

### 🖼️ Ganti logo

Timpa file `public/assets/logo.jpg` dengan gambar baru (pakai **nama yang sama**).
Atau ubah lokasinya di `data/site.js` bagian `brand.logo`.

---

## 6. Bagaimana tombol WhatsApp bekerja? 🟢

Ada file pintar bernama `lib/whatsapp.js`. Tugasnya: membuat link WhatsApp lengkap
dengan pesan yang **sudah terisi otomatis**.

Jadi saat pengunjung klik tombol booking, WhatsApp mereka langsung terbuka dengan
pesan yang sudah jadi — pengunjung tinggal tekan "Kirim". Praktis! ✨

Nomor tujuannya diambil dari `waNumber` di file `data/site.js`. Jadi cukup ganti
nomor di satu tempat, semua tombol ikut berubah.

---

## 7. Urutan bagian halaman bisa diubah? Bisa! 🔀

Buka file `app/page.jsx`. Isinya seperti daftar tumpukan dari atas ke bawah:

```jsx
<PromoBar />       // paling atas
<Navbar />
<Hero />
<Services />
...
<Footer />         // paling bawah
```

Mau pindah urutan? Tinggal **potong dan tempel** barisnya. Misalnya mau harga
muncul lebih dulu, naikkan baris `<Pricing />` ke atas. Segampang itu! 😄

---

## 8. Pertanyaan yang sering muncul 🤔

**T: Saya cuma mau ganti harga, buka file mana?**
J: `data/content.js`, cari bagian `pricing`.

**T: Saya mau ganti nomor WhatsApp, di mana?**
J: `data/site.js`, cari `waNumber` (dan `phone` untuk tombol telepon).

**T: Website-nya error setelah saya edit, kenapa?**
J: Biasanya ada tanda koma, kutip, atau kurung yang kehapus. Cek lagi bagian
yang barusan diubah. Pastikan rapi seperti contoh aslinya.

**T: Folder `legacy` itu apa? Boleh dihapus?**
J: Itu arsip versi website lama (HTML biasa). Tidak dipakai lagi. Boleh dibiarkan
saja sebagai cadangan.

**T: Saya tidak melihat perubahan di browser?**
J: Pastikan `npm run dev` masih berjalan, lalu refresh halaman (tekan F5).

---

## 9. Ringkasan singkat (untuk yang buru-buru) ⏱️

- 🏃 **Jalankan:** `npm install` lalu `npm run dev` → buka `http://localhost:3000`
- ✏️ **Ganti data toko:** edit `data/site.js`
- 📝 **Ganti tulisan/harga:** edit `data/content.js`
- 🖼️ **Ganti logo:** timpa `public/assets/logo.jpg`
- 🔀 **Atur urutan bagian:** edit `app/page.jsx`
- 🎨 **Ubah tampilan/warna:** edit `app/globals.css`

---

Selesai! 🎉 Sekarang kamu sudah paham website ini dari kepala sampai kaki.
Kalau bingung, baca ulang bagian yang kamu butuh. Pelan-pelan saja, tidak apa-apa. 🍼💚
