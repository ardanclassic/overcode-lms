# Script Materi: Pertemuan 6 - 05. Integrasi Fitur Upload Gambar (Subbab 2.2)

## 📖 Bab 2: Integrasi Fitur Upload

### Subbab 2.2: Prompt Tingkat Lanjut untuk Menyuruh AI Merakit Fitur Upload Image

Setelah memahami konsep pemisahan media penyimpanan dan jembatan komunikasi API, sekarang saatnya kita masuk ke tahap praktik. Kita akan menugaskan asisten AI pintar di Antigravity IDE untuk merakit semua jembatan kode ini.

Kita akan menambahkan fitur unggah foto profil pada halaman website kita. Alur logikanya adalah:

1. Pengunjung memilih gambar dari komputernya.
2. Gambar diunggah ke Cloudinary.
3. Tautan URL gambar dari Cloudinary disimpan di tabel database Supabase kita.

---

### Langkah 1: Menyiapkan Bahan Baku (Akun Cloudinary)

Sebelum memanggil AI, Anda harus menyiapkan gudang media Cloudinary Anda sendiri:

1. Buka situs `https://cloudinary.com` dan daftarkan akun gratis. Anda bisa mendaftar dengan cepat menggunakan akun Google atau email Anda.
2. Setelah masuk ke dashboard Cloudinary, catat tiga informasi kunci berikut:
   - **Cloud Name**: Nama unik gudang media Anda.
   - **API Key**: Kunci identifikasi proyek Anda.
   - **API Secret**: Kunci rahasia untuk mengamankan komunikasi (jangan disebarkan!).
3. Masuk ke bagian pengaturan (_Settings_) -> _Upload_, dan buat sebuah folder baru serta buatlah pengaturan **"Unsigned Upload Preset"**. Pengaturan _unsigned_ ini sangat penting agar website kita bisa mengunggah gambar langsung dari browser pengunjung tanpa memerlukan server backend tambahan yang rumit. Catat nama _Upload Preset_ tersebut!

---

### Langkah 2: Menyusun Prompt untuk AI Antigravity

Sekarang, buka panel asisten AI Antigravity di samping meja kerja kode Anda. Kita akan menuliskan perintah terstruktur menggunakan formula prompt yang baik:

_Contoh Prompt:_

> \*"Tolong bantu saya membuat fitur unggah foto profil di halaman website React saya.
>
> Ketentuan Teknis:
>
> 1. Proyek saya menggunakan React, TypeScript, Tailwind CSS, dan sudah terhubung ke database Supabase.
> 2. Saya ingin menggunakan layanan Cloudinary untuk menyimpan file gambarnya secara gratis.
> 3. Buat file baru bernama `.env.local` untuk menyimpan variabel kunci keamanan berikut:
>    VITE_CLOUDINARY_CLOUD_NAME=[PASTE_CLOUD_NAME_ANDA]
>    VITE_CLOUDINARY_UPLOAD_PRESET=[PASTE_UPLOAD_PRESET_ANDA]
> 4. Buatkan komponen formulir React berupa tombol unggah file gambar (`<input type="file" />`) yang estetik menggunakan Tailwind CSS.
> 5. Ketika gambar dipilih, buat logika agar website melakukan upload ke Cloudinary, menampilkan gambar preview secara instan di layar, dan setelah berhasil, simpan link URL gambarnya ke tabel Supabase bernama `profiles` pada kolom `avatar_url`.
> 6. Tuliskan kode dengan penanganan error yang baik agar jika koneksi internet terputus, muncul pesan peringatan yang ramah di layar."\*

---

### Langkah 3: Mengamati AI Merakit Kode

AI Antigravity akan menganalisis struktur kode proyek Anda dan melakukan tugas-tugas berikut secara mandiri:

- AI akan membuat berkas `.env.local` untuk menyimpan nama gudang Cloudinary Anda dengan aman.
- AI akan membuat komponen input file yang cantik. Biasanya, AI akan menambahkan ikon kamera atau area seret-taruh (_drag-and-drop_) yang interaktif dengan efek transisi warna Tailwind saat kursor didekatkan.
- AI akan menuliskan baris kode fungsi pengirim data (_fetch request_) menggunakan metode API untuk menaruh file gambar ke server Cloudinary.
- AI akan menghubungkan hasil kembalian URL gambar dari Cloudinary ke fungsi pengiriman data tabel Supabase kita.

---

### Langkah 4: Pengujian di Browser Lokal

Setelah asisten AI selesai menulis kodenya:

1. Buka website lokal Anda di browser.
2. Klik tombol "Pilih Foto Profil" baru, lalu pilih salah satu foto selfie Anda yang keren.
3. Anda akan melihat indikator sedang memuat (_loading spinner_) selama 1 hingga 2 detik, lalu foto profil Anda akan langsung muncul melingkar rapi di layar website.
4. Buka dashboard Supabase Anda, lihat tabel `profiles`. Kolom `avatar_url` Anda kini telah berisi teks tautan URL aktif. Jika Anda klik tautan tersebut, foto asli Anda akan terbuka di server awan Cloudinary.

Selamat! Anda baru saja berhasil menyelesaikan salah satu fitur paling kompleks di dunia pembuatan website modern. Di subbab berikutnya, kita akan membahas FAQ penting seputar batasan kapasitas penyimpanan Cloudinary agar proyek Anda tetap aman dari tagihan biaya!
