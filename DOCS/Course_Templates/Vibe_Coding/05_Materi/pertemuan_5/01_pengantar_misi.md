# Script Materi: Pertemuan 5 - 01. Pengantar Misi

## 🎯 Pengantar Misi: Web Statis Menjadi "Hidup" (Database/Supabase)

Selamat datang di Pertemuan Kelima!

Sejauh ini, Anda sudah berhasil membuat tampilan website yang cantik menggunakan React, menghiasnya dengan pakaian visual Tailwind CSS yang modern, dan merilisnya ke internet global menggunakan Vercel. Itu adalah pencapaian yang luar biasa! Namun, jika Anda perhatikan, website kita saat ini masih seperti "brosur kertas digital". Tampilannya indah, tetapi jika pengunjung mengetikkan sesuatu pada formulir kontak atau mencoba mendaftar akun, data tersebut langsung menguap dan hilang begitu halaman dimuat ulang (_refresh_). Website kita masih bersifat statis.

Hari ini, misi utama kita adalah **menghidupkan website kita agar bisa mengingat dan menyimpan data secara permanen**. Kita akan memberikan "memori" jangka panjang pada website kita sehingga data yang diinput oleh pengguna dapat disimpan dengan aman di awan (_cloud_).

Secara garis besar, materi di pertemuan kelima ini akan membahas topik-topik berikut:

---

### 🧠 Bagian 1: Memahami Keterbatasan Web Statis & Analogi Database

Sebelum melangkah ke urusan teknis, kita akan menyelami konsep penyimpanan data lewat dua bahasan utama:

1. **Mengapa Web Statis Tidak Bisa Mengingat? (Subbab 1.1)**
   Kita akan membedah batasan teknis website statis. Kita akan memahami mengapa data yang diisi di formulir secara bawaan langsung hilang dan mengapa kita membutuhkan tempat penyimpanan khusus yang terpisah dari file tampilan website kita.
2. **Analogi Brankas Penyimpanan Data (Subbab 1.2)**
   Kita akan menggunakan analogi yang sangat ramah pemula untuk menggambarkan apa itu database. Bayangkan database sebagai **Brankas Bank atau Loker Penitipan Barang Pintar** yang aman, rapi, dan teratur. Setiap data memiliki slot lokernya masing-masing, sehingga tidak akan tertukar atau hilang tertiup angin.

---

### 🛠️ Bagian 2: Berkenalan dan Mengintegrasikan Supabase (BaaS)

Setelah memahami konsepnya, kita akan mulai mempraktikkan cara membuat dan menghubungkan brankas data kita:

1. **Pembuatan Proyek Supabase (Subbab 2.1)**
   Kita akan berkenalan dengan **Supabase**, sebuah layanan _Backend-as-a-Service_ (BaaS) modern yang menyediakan database gratis siap pakai di internet. Kita akan belajar cara mendaftar, membuat proyek baru, dan menyiapkan tabel data dasar yang terdiri dari **Baris (Row)** dan **Kolom (Column)**.
2. **Menghubungkan Jembatan Kode (Subbab 2.2)**
   Kita akan mempelajari cara mengambil _API Key_ (kunci akses brankas) yang aman berupa URL dan Anon Key dari Supabase. Selanjutnya, kita akan menginstruksikan asisten AI kita di Antigravity IDE untuk merakit "jembatan kabel" kode JavaScript agar website kita bisa mengirim dan mengambil data dari brankas Supabase tersebut secara otomatis.

---

### ❓ Bagian 3: FAQ & Ringkasan Materi

1. **FAQ Keamanan Database (Subbab 3.1)**
   Kita akan menjawab pertanyaan-pertanyaan umum yang sering mencemaskan pemula, seperti: _"Apakah data saya di Supabase aman?"_ atau _"Bagaimana jika saya tidak sengaja menghapus tabel data saya, bisakah dipulihkan?"_
2. **Ringkasan Materi Pertemuan 5 (Modul Akhir)**
   Sebuah rangkuman menyeluruh untuk mengikat pemahaman Anda sebelum kita melangkah ke penambahan fitur media di pertemuan berikutnya.

Hari ini adalah hari di mana aplikasi Anda bertransformasi dari sekadar pajangan gambar menjadi sebuah aplikasi dinamis yang interaktif dan berguna secara nyata. Pasang sabuk pengaman Anda, siapkan meja kerja Antigravity Anda, dan mari kita mulai misi menghidupkan website ini!
