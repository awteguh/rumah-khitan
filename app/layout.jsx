import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/data/site";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
import "./globals.css";

// Memuat font Plus Jakarta Sans (sama seperti versi sebelumnya).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Judul tab browser & deskripsi untuk Google / media sosial.
export const metadata = {
  // Alamat dasar agar tautan canonical & gambar share jadi absolut.
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  // Tautan canonical → memberitahu Google halaman utama yang sah.
  alternates: { canonical: "/" },
  // Izinkan Google mengindeks halaman & mengikuti semua tautan.
  robots: { index: true, follow: true },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    type: "website",
    locale: "id_ID",
    siteName: site.brand.fullName,
    images: [{ url: site.brand.logo, alt: site.brand.fullName }],
  },
  // Tampilan saat link dibagikan di Twitter/X & sebagian aplikasi chat.
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.brand.logo],
  },
  // Ikon kecil di tab browser (sementara memakai logo).
  icons: { icon: site.brand.logo },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
