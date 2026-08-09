# Galeri Project (Project Gallery)

Etalase portofolio project yang sudah pernah dibuat.

## Spesifikasi

### Tujuan
Menjadi bukti konkret (social proof) atas kapabilitas pengembangan web, sekaligus menjadi sumber pilihan bagi calon klien yang tertarik menduplikasi/menyesuaikan project yang sudah pernah dibuat pada alur Pemesanan. Halaman ini statis (data JSON/array lokal) tanpa Admin Panel/CMS pada tahap ini.
### Selesai bila
- Halaman menampilkan daftar project dalam layout grid/list yang rapi, bersumber dari data statis lokal.
- Setiap project menampilkan informasi ringkas yang cukup untuk membantu keputusan calon klien (nama, deskripsi singkat, kategori/tech stack, gambar).
- Data project mudah diperbarui oleh Daryas cukup dengan mengedit file JSON/array, tanpa perlu mengubah kode komponen.
- Tampilan konsisten dengan design system, dioptimalkan untuk Desktop dengan fondasi mobile-responsive.

## Sub-fitur: Tampilan Grid/List Project

Menampilkan daftar project dari data statis JSON/array lokal.

### Tujuan
Menyajikan seluruh project dalam format yang mudah di-scan calon klien, dengan visual yang menarik namun tetap konsisten dengan tema klasik-elegan situs secara keseluruhan.
### Selesai bila
- Project ditampilkan dalam grid card (atau list, sesuai arahan Taste Skill) yang responsif menyesuaikan lebar layar.
- Setiap card menampilkan thumbnail gambar, nama project, dan ringkasan singkat.
- Card memiliki hover state/transisi halus sesuai gaya animasi dari design system.

## Sub-fitur: Detail Project

Ringkasan singkat tiap project (nama, deskripsi, teknologi, tautan/gambar bila ada).

### Tujuan
Memberi informasi tambahan yang cukup untuk meyakinkan calon klien tanpa perlu halaman detail terpisah yang rumit, mengingat sifat data yang masih statis pada tahap ini.
### Selesai bila
- Detail tambahan (deskripsi lebih lengkap, daftar tech stack, tautan demo bila tersedia) dapat diakses baik melalui expand pada card maupun modal/halaman ringkas, sesuai keputusan desain yang paling sesuai dengan Taste Skill.
- Informasi kategori/tech stack tervisualisasikan dengan jelas (mis. badge/tag) untuk membantu calon klien mengaitkan project dengan kebutuhan mereka.
- Terdapat tombol/aksi pada setiap project yang mengarah ke halaman Order dengan project tersebut sudah terpilih otomatis (lihat fitur Pemesanan/Kontak).

## Task

### 1. Buat layout grid galeri project dengan card (gambar, nama, ringkasan) menggunakan data tiruan

### 2. Buat komponen detail project (expand/modal) dengan data tiruan, termasuk badge tech stack

### 3. Tambahkan tombol "Gunakan Project Ini" pada setiap card yang akan mengarah ke halaman Order

### 4. Pastikan responsivitas grid galeri untuk Desktop sebagai prioritas, dengan fondasi mobile-responsive

### 5. Buat struktur file data statis `projects.json` sesuai skema (id, name, description, category, tech_stack, image, url)

**Prompt:**

```
Buat file src/data/projects.json berisi array objek project dengan struktur: id (string/slug unik), name (string), description (string), category (string, contoh: 'Internal Management' atau 'Retail/E-commerce'), tech_stack (array of string, contoh: ['Laravel', 'Livewire', 'Tailwind']), image (path string menuju folder assets gambar), url (string opsional untuk tautan demo, boleh kosong string jika tidak ada). Sertakan minimal 4-6 entri contoh dengan data yang masuk akal untuk melengkapi tampilan galeri sebelum data asli diisi.
```

### 6. Hubungkan komponen grid galeri agar membaca data dari `projects.json`, ganti seluruh data tiruan

**Prompt:**

```
Ubah halaman galeri.astro agar mengimpor data dari src/data/projects.json secara langsung (import projects from '../data/projects.json'), lalu me-render satu card per entri project menggunakan data asli tersebut (name, description, category, tech_stack, image). Hapus seluruh data tiruan/hardcoded yang sebelumnya dipakai untuk layout grid. Pastikan tombol "Gunakan Project Ini" pada setiap card membawa parameter id/name project tersebut menuju halaman Order (misalnya melalui query string ?project=id-project), agar dapat digunakan untuk pre-fill pilihan pada Order Page.
```

### 7. Isi konten final `projects.json` dengan project-project nyata berdasarkan referensi folder `porto-daryas-main`

**Prompt:**

```
Baca dan gunakan folder lokal porto-daryas-main sebagai referensi konten portofolio yang sebenarnya. Ganti seluruh entri contoh pada src/data/projects.json dengan data project nyata (nama, deskripsi, kategori, tech stack, path gambar bila tersedia di folder tersebut, dan tautan demo bila ada) sesuai project-project yang pernah dikerjakan Daryas, mengacu pada informasi yang tersedia di folder referensi.
```
