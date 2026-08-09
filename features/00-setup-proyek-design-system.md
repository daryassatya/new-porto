# Setup Proyek & Design System

Fondasi teknis Astro + React + Tailwind beserta arahan estetika dari Taste Skill sebelum halaman-halaman dibangun.

## Spesifikasi

### Tujuan
Menyiapkan kerangka proyek Astro yang benar (integrasi React + Tailwind), memastikan implementasi mengacu pada dokumentasi teknis terkini via MCP `context7`, serta menetapkan token desain (tipografi, palet warna, spacing, gaya animasi) melalui Taste Skill sesuai tema "Classic Meets Modern Interactive" sebagai acuan seluruh halaman berikutnya.
### Selesai bila
- Dokumentasi terbaru React, Astro, dan Tailwind CSS sudah diambil via MCP `context7` dan dikonfirmasi sebagai acuan implementasi.
- Proyek Astro terinisialisasi dengan integrasi `@astrojs/react` dan Tailwind CSS berjalan tanpa error.
- Struktur folder proyek disiapkan (halaman, komponen, data, aset) sesuai konvensi Astro.
- Taste Skill sudah dipanggil dan menghasilkan arahan/token desain (tipografi, palet warna, spacing, gaya animasi) bertema "Classic Meets Modern Interactive", tanpa elemen 3D.
- Token desain tersebut terdokumentasi dan dapat direferensikan ulang saat membangun halaman Beranda, Layanan, Galeri Project, dan Order.

## Sub-fitur: Riset Dokumentasi via context7

Mengambil dokumentasi terbaru React, Astro, dan Tailwind CSS.

### Tujuan
Memastikan seluruh kode yang dihasilkan agent mengacu pada API dan konvensi versi terkini dari ketiga teknologi utama, menghindari penggunaan pola/API usang dari data pelatihan yang mungkin sudah kedaluwarsa.
### Selesai bila
- Dokumentasi ReactJS, Astro, dan Tailwind CSS berhasil diambil melalui MCP `context7`.
- Agent mengonfirmasi secara eksplisit bahwa dokumentasi telah dibaca dan dipahami sebelum melanjutkan ke task implementasi berikutnya.

## Sub-fitur: Inisialisasi Proyek Astro

Struktur folder, konfigurasi `astro.config.mjs` dengan integrasi React + Tailwind.

### Tujuan
Membangun kerangka dasar proyek yang siap dikembangkan — Astro sebagai static-site generator utama, dengan React terpasang untuk kebutuhan Astro Islands dan Tailwind CSS sebagai styling utama.
### Selesai bila
- `astro.config.mjs` sudah mengaktifkan integrasi React dan Tailwind CSS.
- Struktur folder mengikuti konvensi Astro (`src/pages`, `src/components`, `src/layouts`, `src/data`, `src/assets` atau `public/`).
- Build/dev server berjalan tanpa error setelah inisialisasi.

## Sub-fitur: Kurasi Desain via Taste Skill

Menetapkan token desain (tipografi, palet warna, spacing, animasi) bertema "Classic Meets Modern Interactive".

### Tujuan
Melimpahkan keputusan estetika detail (bukan hanya styling ad-hoc per komponen) kepada Taste Skill agar seluruh halaman punya bahasa visual yang konsisten — klasik-elegan namun modern dan interaktif — tanpa perlu Daryas menentukan setiap detail desain secara manual.
### Selesai bila
- Taste Skill dipanggil dengan brief tema "Classic Meets Modern Interactive" (tipografi klasik elegan + layout modern + animasi halus, tanpa elemen 3D).
- Dihasilkan arahan desain berupa: pilihan font (heading & body), palet warna (primary/secondary/accent/neutral), skala spacing, dan gaya transisi animasi standar.
- Token desain tersebut diterapkan sebagai konfigurasi Tailwind (`tailwind.config.mjs` — warna dan font custom) agar dapat dipakai konsisten di seluruh komponen.

## Task

### 1. Panggil MCP `context7` untuk mengunduh dokumentasi ReactJS, Astro, dan Tailwind CSS, lalu konfirmasikan secara eksplisit bahwa dokumentasi telah dibaca sebelum melanjutkan ke task berikutnya

**Prompt:**

```
Sebelum menulis kode apa pun, gunakan MCP context7 untuk mengambil dokumentasi terbaru dari tiga sumber berikut: (1) ReactJS — https://context7.com/reactjs/react.dev/llms.txt?tokens=10000, (2) Astro — https://context7.com/withastro/docs/llms.txt?tokens=10000, (3) Tailwind CSS — https://context7.com/tailwindlabs/tailwindcss.com/llms.txt?tokens=10000. Setelah ketiganya diunduh, berikan ringkasan singkat poin-poin penting yang relevan untuk proyek ini (khususnya API/konvensi Astro Islands terbaru, hooks React yang relevan, dan utility class Tailwind versi terkini) sebagai konfirmasi bahwa dokumentasi sudah dipahami, sebelum melanjutkan ke inisialisasi proyek.
```

### 2. Inisialisasi proyek Astro baru dengan integrasi React dan Tailwind CSS

**Prompt:**

```
Inisialisasi proyek Astro baru menggunakan `npm create astro@latest`. Tambahkan integrasi React melalui `npx astro add react` dan Tailwind CSS melalui `npx astro add tailwind`. Pastikan astro.config.mjs menghasilkan konfigurasi berikut: import defineConfig dari 'astro/config', import react dari '@astrojs/react', import tailwind dari '@astrojs/tailwind', lalu export default defineConfig dengan integrations: [react(), tailwind()]. Verifikasi dev server (`npm run dev`) berjalan tanpa error.
```

### 3. Susun struktur folder proyek sesuai konvensi Astro (pages, components, layouts, data, assets)

**Prompt:**

```
Buat struktur folder berikut di dalam src/: pages/ (untuk index.astro, layanan.astro, galeri.astro, order.astro), components/react/ (untuk komponen React interaktif seperti HeroAnimation, OrderCard, OrderForm), components/astro/ (untuk komponen statis Astro seperti Navbar, Footer, SectionHeading), layouts/ (untuk BaseLayout.astro yang membungkus seluruh halaman dengan Navbar dan Footer), dan data/ (untuk projects.json). Pastikan setiap halaman di pages/ menggunakan BaseLayout.astro sebagai pembungkus.
```

### 4. Panggil Taste Skill untuk menghasilkan arahan desain bertema "Classic Meets Modern Interactive" dan terapkan sebagai konfigurasi Tailwind custom

**Prompt:**

```
Panggil dan gunakan Taste Skill (tasteskill.dev) untuk merancang arahan estetika UI/UX proyek ini dengan brief: vibe "Classic Meets Modern Interactive" — tipografi dan palet warna klasik yang elegan, dipadukan layout modern dan transisi animasi yang sangat halus, profesional dan rapi, TANPA elemen atau library 3D. Minta Taste Skill menghasilkan: (a) rekomendasi pasangan font (serif elegan untuk heading, sans-serif bersih untuk body) yang bisa diimpor via Google Fonts atau font lokal, (b) palet warna lengkap (primary, secondary, accent, neutral/background, text) dalam format hex, (c) skala spacing/sizing yang konsisten, (d) pedoman gaya animasi standar (durasi, easing curve) untuk dipakai berulang di berbagai komponen. Terapkan hasil kurasi tersebut ke dalam tailwind.config.mjs pada bagian theme.extend (colors, fontFamily), dan simpan ringkasan pedoman animasi sebagai komentar/dokumentasi di dalam file tersebut agar dapat direferensikan saat membangun komponen di halaman lain.
```
