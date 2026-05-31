import { site } from "@/data/site";

// "Peta situs" untuk Google — daftar halaman yang ada di website.
// Next.js otomatis menyajikannya di /sitemap.xml
// Website ini satu halaman, jadi isinya cukup beranda saja.
export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
