# Layanan (Services)

Penjelasan rinci layanan end-to-end dari konsultasi hingga maintenance.

## Spesifikasi

### Tujuan
Meyakinkan calon klien bahwa layanan bersifat menyeluruh (end-to-end) — mulai dari konsultasi ide awal hingga maintenance harian setelah website live — dan tetap terjangkau dari sisi harga dibanding ekspektasi umum terhadap jasa pengembangan software korporat.
### Selesai bila
- Halaman menampilkan tahapan layanan end-to-end secara berurutan dan mudah dipahami (konsultasi → desain → development → deployment → maintenance).
- Penekanan harga terjangkau tersaji sebagai bagian dari narasi, bukan hanya klaim generik.
- Tampilan konsisten dengan design system dan animasi transisi antar seksi yang halus saat di-scroll.

## Sub-fitur: Detail Alur Layanan End-to-End

Menjabarkan tahapan konsultasi ide, desain, development, deployment, hingga maintenance harian.

### Tujuan
Memberi gambaran konkret kepada calon klien tentang apa yang akan mereka lalui setelah memutuskan bekerja sama, mengurangi keraguan terhadap proses yang tidak transparan.
### Selesai bila
- Kelima tahapan (konsultasi ide, desain, development, deployment, maintenance harian) ditampilkan sebagai langkah bernomor atau timeline visual.
- Setiap tahapan disertai deskripsi singkat mengenai apa yang dikerjakan dan apa yang didapat klien pada tahap tersebut.
- Urutan tahapan tervisualisasikan dengan jelas (mis. garis penghubung, nomor urut, atau layout timeline).

## Sub-fitur: Penekanan Harga Terjangkau

Menonjolkan value proposition harga terjangkau dibanding kompetitor/agency besar.

### Tujuan
Menegaskan positioning harga sebagai salah satu keunggulan utama tanpa terkesan murahan — tetap menjaga kesan profesional sesuai tema desain klasik-elegan.
### Selesai bila
- Terdapat seksi khusus atau highlight visual yang menegaskan value harga terjangkau, dikaitkan dengan sifat end-to-end layanan (satu harga mencakup seluruh proses, bukan biaya bertahap yang membengkak).
- Tidak menampilkan angka harga pasti (karena bersifat kustom per klien), namun tetap meyakinkan melalui narasi/value framing.
- Terdapat CTA yang mengarah ke halaman Order untuk melanjutkan diskusi harga secara personal via WhatsApp.

## Task

### 1. Buat layout halaman Layanan dengan timeline/step tahapan end-to-end menggunakan konten tiruan

### 2. Buat seksi highlight harga terjangkau dengan konten tiruan

### 3. Tambahkan CTA di akhir halaman menuju halaman Order

### 4. Pastikan responsivitas layout timeline untuk Desktop sebagai prioritas, dengan fondasi mobile-responsive

### 5. Tambahkan animasi scroll-reveal pada setiap tahapan timeline saat elemen masuk viewport

**Prompt:**

```
Buat komponen React bernama ServiceTimeline.jsx yang dipasang sebagai Astro Island (client:visible) pada halaman Layanan. Gunakan Framer Motion dengan whileInView untuk memicu animasi fade-in + translateY halus pada setiap tahapan (konsultasi, desain, development, deployment, maintenance) saat elemen tersebut memasuki viewport saat di-scroll, dengan sedikit stagger delay antar tahapan berurutan. Gunakan durasi dan easing sesuai pedoman animasi dari Taste Skill pada task setup proyek. Komponen menerima array data tahapan (judul, deskripsi, nomor urut) sebagai props agar konten tetap dikelola dari halaman Astro.
```

### 6. Isi konten final tahapan layanan dan narasi harga terjangkau berdasarkan referensi folder `porto-daryas-main`

**Prompt:**

```
Baca dan gunakan folder lokal porto-daryas-main sebagai referensi konten. Susun deskripsi final untuk kelima tahapan layanan end-to-end (konsultasi ide awal, desain, development, deployment, maintenance harian) berdasarkan gaya bahasa dan detail yang relevan dari folder tersebut. Susun juga narasi highlight harga terjangkau yang menegaskan bahwa satu paket kerja sama mencakup seluruh tahapan tanpa biaya tersembunyi bertahap. Ganti seluruh konten tiruan pada halaman Layanan dengan teks final tersebut.
```
