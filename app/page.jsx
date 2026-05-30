import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Methods from "@/components/Methods";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import Guarantees from "@/components/Guarantees";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Halaman utama: cukup menyusun bagian-bagian dari atas ke bawah.
// Untuk mengubah urutan, tinggal pindahkan baris-baris di bawah ini.
export default function HomePage() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Methods />
      <Advantages />
      <Pricing />
      <Guarantees />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
