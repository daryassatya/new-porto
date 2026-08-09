# Beranda (Home)

Halaman utama dengan hero section elegan dan ringkasan fokus bisnis.

## Spesifikasi

### Tujuan
Menjadi halaman pertama yang dilihat pengunjung — memberi kesan profesional dan berkualitas dalam hitungan detik melalui hero section dengan tipografi elegan dan animasi halus, sekaligus menyampaikan dengan cepat fokus bisnis (Website Internal Manajemen Perusahaan & Website Retail Kelas Menengah) beserta value proposition (harga terjangkau, end-to-end).
### Selesai bila
- Hero section tampil dengan tipografi klasik-elegan sesuai token desain dari Taste Skill, disertai animasi teks/layout yang halus saat halaman dimuat.
- Ringkasan fokus bisnis tersaji singkat dan jelas, mencakup dua area layanan utama dan penekanan harga terjangkau + end-to-end.
- Terdapat navigasi/CTA yang mengarahkan pengunjung ke halaman Layanan, Galeri Project, dan Order.
- Tampilan konsisten dengan design system, dioptimalkan untuk Desktop dengan fondasi mobile-responsive.

## Sub-fitur: Hero Section Interaktif

Tipografi elegan dengan animasi teks/layout menggunakan Framer Motion/GSAP.

### Tujuan
Menciptakan kesan pertama yang kuat dan memorable melalui headline yang elegan dan animasi masuk yang halus, tanpa terkesan berlebihan atau mengganggu keterbacaan.
### Selesai bila
- Headline utama dan sub-headline tampil dengan tipografi sesuai token desain (font klasik untuk heading).
- Terdapat animasi masuk (entrance animation) pada teks dan/atau elemen layout hero menggunakan Framer Motion atau GSAP — halus, tidak lebih dari beberapa ratus milidetik per elemen, dengan easing yang sesuai pedoman Taste Skill.
- Hero section responsif dan tetap terbaca baik di layar besar maupun kecil.

## Sub-fitur: Ringkasan Fokus Bisnis

Highlight singkat layanan Website Internal Manajemen Perusahaan & Website Retail, harga terjangkau, dan sifat end-to-end.

### Tujuan
Menyampaikan dengan cepat kepada pengunjung apa yang ditawarkan dan mengapa memilih layanan ini, sebagai jembatan menuju eksplorasi lebih lanjut ke halaman Layanan atau Galeri Project.
### Selesai bila
- Terdapat seksi (mis. dua/tiga kartu atau kolom) yang merangkas dua fokus layanan: Website Internal Manajemen Perusahaan dan Website Retail Kelas Menengah.
- Penekanan "harga terjangkau" dan "end-to-end" tersaji jelas sebagai value proposition, bukan hanya di teks kecil.
- Terdapat tombol/CTA yang mengarah ke halaman Layanan (untuk detail) dan halaman Order (untuk mulai memesan).

## Task

### 1. Buat layout hero section statis (tanpa animasi) dengan konten tiruan mengikuti token desain dari Taste Skill

### 2. Buat seksi ringkasan fokus bisnis (kartu/kolom) dengan konten tiruan

### 3. Tambahkan navigasi (Navbar) dan Footer pada BaseLayout, terapkan di halaman Beranda

### 4. Pastikan responsivitas hero dan ringkasan bisnis untuk Desktop sebagai prioritas, dengan fondasi mobile-responsive

### 5. Implementasikan animasi entrance pada hero section menggunakan Framer Motion/GSAP sebagai komponen React Island

**Prompt:**

```
Buat komponen React bernama HeroAnimation.jsx yang dipasang sebagai Astro Island (client:load) pada bagian hero halaman Beranda. Gunakan Framer Motion untuk animasi entrance: headline muncul dengan fade-in + translateY halus (dari sedikit di bawah posisi akhir), sub-headline menyusul dengan delay singkat setelah headline (staggered), dan tombol CTA muncul terakhir. Gunakan durasi dan easing curve sesuai pedoman animasi yang sudah ditetapkan Taste Skill pada task setup proyek. Pastikan komponen menerima teks headline, sub-headline, dan label CTA sebagai props agar konten tetap dikelola dari halaman Astro (bukan di-hardcode di komponen).
```

### 6. Isi konten final hero section dan ringkasan fokus bisnis berdasarkan referensi folder `porto-daryas-main`

**Prompt:**

```
Baca dan gunakan folder lokal porto-daryas-main sebagai referensi konten. Ambil teks headline, sub-headline, dan poin-poin ringkasan fokus bisnis yang relevan dari folder tersebut (atau susun ulang secara ringkas bila kontennya perlu disesuaikan agar fokus pada dua layanan utama: Website Internal Manajemen Perusahaan dan Website Retail Kelas Menengah, dengan penekanan harga terjangkau dan proses end-to-end). Ganti seluruh konten tiruan pada hero section dan seksi ringkasan fokus bisnis dengan teks final tersebut.
```
