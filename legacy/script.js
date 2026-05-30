// ===== Tahun otomatis di footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Navbar: efek shadow saat scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== Menu mobile toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
// Tutup menu setelah klik link (mobile)
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Form booking cepat -> kirim ke WhatsApp =====
const WA_NUMBER = '6281234567890'; // ganti dengan nomor WhatsApp asli
const quickForm = document.getElementById('quickForm');
quickForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(quickForm);
  const nama = data.get('nama');
  const hp = data.get('hp');
  const metode = data.get('metode');
  const pesan =
    `Halo Rumah Khitan Abdunnafi', saya mau booking khitan.%0A` +
    `Nama: ${encodeURIComponent(nama)}%0A` +
    `No. WA: ${encodeURIComponent(hp)}%0A` +
    `Metode: ${encodeURIComponent(metode)}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, '_blank');
});

// ===== Reveal saat scroll (animasi muncul) =====
const revealEls = document.querySelectorAll('.card, .method, .feature, .price-card, .testi, .faq-item, .section-head');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));
