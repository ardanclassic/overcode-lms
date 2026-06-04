# Script Materi: Pertemuan 6 - 01. Pengantar Misi

## 🎯 Pengantar Misi: Fitur Lanjutan (File Storage & API)

Selamat datang di Pertemuan Keenam!

Pada pertemuan sebelumnya, Anda telah berhasil memecahkan batasan website statis. Website Anda kini sudah bisa mengingat data teks, seperti nama, email, dan komentar tertulis, yang langsung disimpan dengan aman di brankas database Supabase.

Namun, bagaimana jika Anda ingin membuat fitur yang lebih kompleks? Misalnya, pengunjung ingin **mengunggah foto profil mereka**, mengunggah file bukti pembayaran, atau menampilkan gambar galeri karya mereka secara dinamis? Apakah kita bisa langsung memasukkan file foto atau video yang berukuran megabyte tersebut ke dalam kolom database teks Supabase kita?

Hari ini, misi utama kita adalah **membangun sistem penyimpanan media khusus** dan menghubungkannya ke website kita menggunakan konsep yang disebut dengan **API (Application Programming Interface)**.

Secara garis besar, materi di pertemuan keenam ini akan terbagi menjadi beberapa topik penting berikut:

---

### 🧠 Bagian 1: Perbedaan Penyimpanan & Analogi Gudang Media

Kita akan memahami konsep arsitektur penyimpanan digital agar website kita tetap ringan dan cepat diakses:

1. **Media Storage vs Database (Subbab 1.1)**
   Kita akan membedah mengapa file berukuran besar seperti gambar, audio, dan video tidak boleh dipaksakan disimpan langsung di dalam brankas teks database. Kita akan mempelajari dampak performa dan biaya jika struktur penyimpanan ini dilanggar.
2. **Analogi Gudang Media Cloudinary (Subbab 1.2)**
   Kita akan berkenalan dengan **Cloudinary**, sebuah layanan awan yang bertindak khusus sebagai **Gudang Kontainer Media**. Kita akan menggunakan analogi bagaimana database dan gudang media bekerja sama secara cerdas: database hanya bertindak sebagai catatan alamat loker, sementara file fisik gambar disimpan rapi di gudang kontainer khusus Cloudinary.

---

### 🛠️ Bagian 2: Integrasi Fitur Upload & Konsep API

Setelah memahami konsepnya, kita akan melatih asisten AI kita untuk merakit fiturnya:

1. **Konsep API sebagai Pelayan Restoran (Subbab 2.1)**
   Kita akan mempelajari apa itu **API** menggunakan analogi pelayan restoran yang menjembatani pesanan pelanggan di meja makan dengan koki di dapur. Konsep ini akan mempermudah Anda memahami bagaimana website kita berbicara dengan layanan luar.
2. **Langkah Praktis Integrasi Upload Gambar (Subbab 2.2)**
   Kita akan memandu asisten AI di Antigravity IDE untuk mengintegrasikan widget unggah gambar Cloudinary ke dalam formulir website kita, mengonfigurasi jalur unggahan, dan menuliskan tautan URL gambar hasil unggahan tersebut ke dalam baris database Supabase kita.

---

### ❓ Bagian 3: FAQ & Ringkasan Materi

1. **FAQ Batasan Kuota Awan (Subbab 3.1)**
   Kita akan menjawab pertanyaan-pertanyaan krusial, seperti: _"Apakah Cloudinary ini gratis?"_ atau _"Bagaimana jika kapasitas penyimpanan medianya penuh, apakah website saya akan mati?"_
2. **Ringkasan Materi Pertemuan 6 (Modul Akhir)**
   Rangkuman lengkap materi hari ini untuk mengunci ingatan Anda sebelum kita melangkah ke jurus rahasia penyelidikan eror di pertemuan berikutnya.

Menambahkan fitur unggah media adalah langkah penting untuk membuat aplikasi Anda terasa premium dan setara dengan standar industri. Mari kita buka laptop, siapkan konsentrasi Anda, dan mari kita mulai petualangan seru hari ini!
