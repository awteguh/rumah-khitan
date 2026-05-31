import { site } from "@/data/site";

// File "robots" memberitahu mesin pencari halaman mana yang boleh
// dijelajah. Next.js otomatis menyajikannya di /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
