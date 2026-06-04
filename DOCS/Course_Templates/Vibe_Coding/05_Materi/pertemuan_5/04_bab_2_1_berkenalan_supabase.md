# Script Materi: Pertemuan 5 - 04. Berkenalan dengan Supabase (Subbab 2.1)

## 📖 Bab 2: Berkenalan dengan Supabase (BaaS)

### Subbab 2.1: Pembuatan Project di Supabase & Pemahaman Tabel Dasar

Dulu, untuk membuat sebuah brankas penyimpanan data (database) yang aman di internet, Anda harus menjadi seorang insinyur backend yang sangat mahir. Anda harus menyewa server komputer, menginstal perangkat lunak database yang rumit, mengatur sistem jaringan, serta menulis ratusan baris kode keamanan agar server tersebut tidak diretas orang lain. Proses ini sangat melelahkan dan sering kali membuat pemula menyerah sebelum berhasil.

Namun hari ini, semua kerumitan tersebut sudah lenyap berkat kehadiran teknologi yang disebut **BaaS (Backend-as-a-Service)** atau "Backend sebagai Layanan Instan". Dan salah satu penyedia BaaS gratis terbaik dan paling populer saat ini adalah **Supabase**.

---

### Supabase: Kontraktor Brankas Instan Anda

Bayangkan Supabase seperti sebuah **Perusahaan Kontraktor Brankas Raksasa** di internet.

Alih-alih Anda membeli bahan bangunan, menyewa kuli, dan merancang sistem keamanan brankas sendiri dari nol, Anda cukup pergi ke situs web Supabase. Dengan mendaftar akun gratis, Supabase akan langsung membuatkan sebuah ruangan brankas kosong yang super aman di server awan (_cloud_) mereka khusus untuk Anda dalam hitungan detik.

Anda tidak perlu memikirkan perawatan server, instalasi software, atau kabel jaringan—semua hal rumit di balik layar diurus sepenuhnya oleh Supabase. Tugas Anda hanyalah mengisi brankas tersebut dengan barang-barang (data) Anda.

---

### Langkah Praktis Membuat Project Baru di Supabase

Untuk memulai persiapan brankas data kita, mari ikuti langkah-langkah praktis berikut:

1. **Pendaftaran Akun**
   Buka browser Anda dan kunjungi situs `https://supabase.com`. Klik tombol mendaftar (_Sign Up_). Supabase memiliki integrasi yang sangat praktis dengan akun GitHub Anda. Cukup klik tombol **"Continue with GitHub"** dan berikan otorisasi. Akun Supabase Anda akan langsung aktif dalam sekejap tanpa perlu mengisi formulir pendaftaran yang panjang.
2. **Membuat Organisasi & Proyek Baru**
   Setelah masuk ke halaman utama (_Dashboard_), klik tombol **"New Project"** (Proyek Baru). Anda akan diminta mengisi beberapa informasi dasar:
   - **Name (Nama Proyek)**: Masukkan nama yang relevan dengan aplikasi Anda, misalnya `my-portfolio-db`.
   - **Database Password**: Buatlah kata sandi yang kuat dan aman. Catat kata sandi ini baik-baik!
   - **Region (Wilayah Server)**: Pilih wilayah server terdekat dari lokasi Anda (misalnya pilih _Singapore_ jika Anda berada di Indonesia) agar proses pengiriman data dari website ke database berjalan sangat cepat.
   - **Pricing Plan (Paket Harga)**: Pastikan Anda memilih opsi **Free Plan (Paket Gratis Rp 0)** yang sudah sangat melimpah kapasitasnya untuk proyek belajar kita.
     Setelah itu, klik tombol **"Create Project"**. Supabase membutuhkan waktu sekitar 1 hingga 2 menit untuk menyiapkan infrastruktur brankas Anda di awan.

---

### Memahami Struktur Tabel Dasar (Baris & Kolom)

Setelah proyek Anda selesai dibuat, Anda akan melihat meja kerja database yang bersih. Di sini, kita akan membuat wadah penyimpanan data pertama kita yang disebut sebagai **Tabel (Table)**.

Mari kita buat sebuah tabel contoh bernama `messages` (untuk menampung pesan kontak dari pengunjung website kita):

- Ketika kita mengklik tombol **"Create Table"**, kita akan diminta menyusun kolom-kolomnya terlebih dahulu.
- **Kolom pertama (`id`)**: Ini adalah kunci utama unik kita (_Primary Key_). Supabase akan secara otomatis mengisinya dengan angka urut 1, 2, 3... atau kode unik acak untuk setiap data pesan baru yang masuk.
- **Kolom kedua (`name`)**: Kita set tipe datanya sebagai `text` (tulisan). Kolom ini khusus untuk menyimpan nama pengirim pesan.
- **Kolom ketiga (`email`)**: Tipe datanya juga `text`, khusus menyimpan alamat email pengirim pesan.
- **Kolom keempat (`content`)**: Tipe datanya `text`, khusus menyimpan isi pesan atau komentar dari pengunjung.
- **Kolom kelima (`created_at`)**: Supabase akan mengisi kolom ini secara otomatis dengan catatan waktu tanggal dan jam presisi ketika pesan tersebut dikirimkan.

Setelah menekan tombol **"Save"**, tabel database pertama Anda resmi tercipta! Sekarang, brankas kita sudah siap menerima kiriman barang dari luar. Di subbab berikutnya, kita akan belajar bagaimana cara memberikan kunci akses yang aman kepada asisten AI kita di Antigravity IDE agar AI bisa merakit jembatan penghubung dari website ke brankas Supabase kita!
