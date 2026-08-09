# Pemesanan / Kontak (Order Page)

Halaman interaktif untuk memulai proses pemesanan menuju WhatsApp.

## Spesifikasi

### Tujuan
Menjadi titik konversi utama situs — mengubah minat calon klien menjadi percakapan langsung di WhatsApp, dengan pengalaman memilih jenis pesanan (duplikasi project existing vs custom baru) yang jelas dan pesan yang sudah terformat rapi secara otomatis sehingga calon klien tidak perlu mengetik ulang kebutuhan dari nol.
### Selesai bila
- Pengunjung dapat memilih antara dua jalur pemesanan: menduplikasi/menyesuaikan project dari Galeri, atau memesan Website Custom baru.
- Pilihan disajikan sebagai Card atau opsi interaktif dengan animasi halus, bukan dropdown/form generik.
- Setelah memilih dan mengisi detail sederhana, tombol "Pesan Sekarang" membuka WhatsApp dengan teks pesan yang sudah terformat sesuai pilihan.
- Jika pengunjung datang dari Galeri Project dengan project tertentu sudah dipilih, halaman Order otomatis pre-fill pilihan tersebut.

## Sub-fitur: Pemilihan Jenis Pesanan

Opsi Card interaktif: duplikasi/sesuaikan project existing vs custom baru.

### Tujuan
Memandu calon klien menentukan jalur pemesanan yang sesuai kebutuhan mereka sejak awal, sehingga form yang muncul setelahnya relevan dan tidak membingungkan.
### Selesai bila
- Dua opsi utama (Project Existing vs Custom Baru) ditampilkan sebagai card besar dengan ikon/ilustrasi dan deskripsi singkat masing-masing.
- Card memiliki state terpilih (selected state) yang jelas secara visual dengan transisi halus saat dipilih.
- Memilih salah satu card menampilkan form detail yang sesuai (lihat sub-fitur Form Detail Sederhana) tanpa reload halaman.

## Sub-fitur: Form Detail Sederhana

Input singkat sesuai jenis pesanan yang dipilih.

### Tujuan
Mengumpulkan informasi minimal namun cukup untuk membentuk pesan WhatsApp yang informatif, tanpa membebani calon klien dengan form panjang yang menurunkan tingkat konversi.
### Selesai bila
- Jika memilih "Project Existing": form menampilkan pilihan/nama project (pre-filled otomatis bila datang dari Galeri dengan project sudah dipilih, atau dropdown/select bila diakses langsung) beserta field nama & kontak singkat pemesan.
- Jika memilih "Custom Baru": form menampilkan field nama, kontak singkat, dan deskripsi singkat kebutuhan (opsional/textarea pendek).
- Validasi dasar diterapkan (field wajib tidak boleh kosong) sebelum tombol "Pesan Sekarang" dapat ditekan.

## Sub-fitur: Redirect Otomatis ke WhatsApp

Tombol "Pesan Sekarang" membentuk teks terformat dan membuka `wa.me` dengan nomor tujuan yang sudah ditentukan.

### Tujuan
Menghilangkan friksi antara minat pemesanan dan komunikasi nyata — calon klien tidak perlu menyalin nomor atau mengetik pesan dari awal, karena teks sudah tersusun otomatis dan rapi sesuai konteks pilihan mereka.
### Selesai bila
- Menekan "Pesan Sekarang" membuka tab/redirect ke `https://wa.me/628888438922?text=[ENCODED_TEXT]` dengan teks yang sudah di-encode dengan benar (`encodeURIComponent`).
- Template teks untuk jalur "Custom Baru": mengikuti format "Halo Daryas, saya tertarik untuk membangun website custom untuk bisnis saya. Saya butuh bantuan dari tahap ide hingga maintenance. Bisa kita diskusikan lebih lanjut?" (dapat disisipi nama pemesan bila diisi).
- Template teks untuk jalur "Project Existing": mengikuti format "Halo Daryas, saya melihat project *[Nama Project]* di portofolio Anda dan tertarik untuk menggunakannya/menyesuaikannya untuk bisnis saya. Bagaimana proses pemesanannya?" dengan `[Nama Project]` terisi otomatis sesuai pilihan.
- Redirect berfungsi konsisten baik di browser desktop (membuka WhatsApp Web) maupun mobile (membuka aplikasi WhatsApp).

## Task

### 1. Buat layout dua Card pilihan (Project Existing vs Custom Baru) dengan state terpilih menggunakan data/konten tiruan

### 2. Buat form detail untuk jalur "Project Existing" (pilihan project + nama + kontak) dengan data tiruan

### 3. Buat form detail untuk jalur "Custom Baru" (nama + kontak + deskripsi kebutuhan) dengan data tiruan

### 4. Pastikan responsivitas halaman Order untuk Desktop sebagai prioritas, dengan fondasi mobile-responsive

### 5. Implementasikan komponen React OrderCard dengan animasi transisi state terpilih

**Prompt:**

```
Buat komponen React bernama OrderCard.jsx yang dipasang sebagai Astro Island (client:load) pada halaman Order. Komponen menampilkan dua Card pilihan bertingkah sebagai radio group (Project Existing vs Custom Baru) menggunakan React state (useState) untuk melacak pilihan aktif. Gunakan Framer Motion untuk transisi halus pada perubahan state terpilih (mis. animasi border/scale/background saat card dipilih) sesuai pedoman animasi dari Taste Skill. Saat pilihan berubah, komponen memanggil callback onSelectionChange(selectedType) yang diteruskan sebagai prop, agar komponen induk (OrderForm) dapat menampilkan form yang sesuai tanpa reload halaman.
```

### 6. Implementasikan komponen React OrderForm dengan validasi dasar dan logika redirect WhatsApp

**Prompt:**

```
Buat komponen React bernama OrderForm.jsx yang dipasang sebagai Astro Island (client:load) pada halaman Order, membungkus OrderCard dan menampilkan form kondisional berdasarkan jenis pesanan yang dipilih. Untuk jalur 'Project Existing': tampilkan field select/dropdown nama project (ambil daftar nama dari data project yang diteruskan sebagai prop, hasil import projects.json di level Astro), field nama pemesan, dan field kontak (nomor HP/email). Untuk jalur 'Custom Baru': tampilkan field nama pemesan, kontak, dan textarea deskripsi kebutuhan singkat (opsional). Terapkan validasi dasar sebelum tombol 'Pesan Sekarang' aktif: field nama dan kontak wajib terisi, serta untuk jalur Project Existing field pilihan project wajib terisi. Saat tombol 'Pesan Sekarang' ditekan, susun teks pesan sesuai jenis pesanan: untuk Custom Baru gunakan template 'Halo Daryas, saya tertarik untuk membangun website custom untuk bisnis saya. Saya butuh bantuan dari tahap ide hingga maintenance. Bisa kita diskusikan lebih lanjut?', dan untuk Project Existing gunakan template 'Halo Daryas, saya melihat project *[NAMA_PROJECT]* di portofolio Anda dan tertarik untuk menggunakannya/menyesuaikannya untuk bisnis saya. Bagaimana proses pemesanannya?' dengan [NAMA_PROJECT] diganti nama project yang dipilih. Encode teks tersebut menggunakan encodeURIComponent, lalu buka https://wa.me/628888438922?text=ENCODED_TEXT pada tab baru menggunakan window.open(url, '_blank').
```

### 7. Implementasikan pre-fill otomatis pilihan project saat halaman Order diakses dari tombol "Gunakan Project Ini" di Galeri Project

**Prompt:**

```
Pada halaman order.astro, baca query parameter 'project' dari URL (misal order?project=id-project) menggunakan Astro.url.searchParams pada sisi server-render Astro. Jika parameter tersebut ada dan cocok dengan salah satu id pada data projects.json, teruskan project tersebut sebagai prop awal (initialProject) ke komponen OrderForm React Island. Di dalam OrderForm, gunakan initialProject tersebut untuk otomatis memilih jalur 'Project Existing' pada OrderCard dan mem-pre-fill field pilihan project dengan nama project yang sesuai saat komponen pertama kali dimuat.
```
