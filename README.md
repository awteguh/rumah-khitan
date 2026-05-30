# Rumah Khitan Abdunnafi' — Landing Page (Next.js)

Landing page promosi rumah khitan. Dibangun dengan **Next.js 15** (App Router) +
React, memakai komponen yang reusable agar mudah dirawat.

## Cara menjalankan

Butuh **Node.js 18.18+** terpasang. Lalu di folder ini jalankan:

```bash
npm install      # sekali saja, untuk mengunduh kebutuhan
npm run dev      # menjalankan mode pengembangan → buka http://localhost:3000
```

Untuk versi siap pakai (produksi):

```bash
npm run build
npm run start
```

## Struktur folder

```
app/
  layout.jsx     → kerangka halaman + font + judul/SEO
  page.jsx       → menyusun semua bagian dari atas ke bawah
  globals.css    → semua styling (tampilan tidak berubah dari versi lama)
components/       → potongan tampilan yang dipakai berulang (Navbar, Hero, kartu, dll)
data/
  site.js        → nama brand, nomor WA, alamat, jam buka, judul SEO
  content.js     → SEMUA teks: layanan, metode, harga, testimoni, FAQ
lib/
  whatsapp.js    → pembuat tautan WhatsApp
public/assets/   → gambar (mis. logo.jpg)
legacy/          → arsip versi lama (HTML/CSS/JS) — tidak dipakai lagi
```

## Mau ganti isi tanpa ngoding?

Cukup buka 2 file ini:

- **`data/site.js`** → ganti nama brand, **nomor WhatsApp**, telepon, alamat, jam buka.
- **`data/content.js`** → ganti/ tambah teks layanan, metode, **harga**, testimoni, FAQ.

Ganti logo: timpa file `public/assets/logo.jpg` dengan gambar baru (nama sama),
atau ubah lokasinya di `data/site.js` → `brand.logo`.

## Yang HARUS diganti sebelum dipakai

- **Nomor WhatsApp & telepon**: di `data/site.js` (`waNumber`, `phone`, `phoneDisplay`).
- **Alamat & jam buka**: di `data/site.js`.
- **Harga paket**: di `data/content.js` (`pricing`).
- **Testimoni**: di `data/content.js` (`testimonials`) — ganti dengan yang asli.
