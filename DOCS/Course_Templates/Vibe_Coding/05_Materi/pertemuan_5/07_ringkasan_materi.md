# Script Materi: Pertemuan 5 - 07. Ringkasan Materi

## 📝 Ringkasan Materi Pertemuan 5: Web Statis Menjadi "Hidup" (Database/Supabase)

Luar biasa! Kita telah menyelesaikan seluruh modul pembelajaran di Pertemuan Kelima ini. Di sini, kita telah berhasil melakukan lompatan besar: mengubah website statis murni yang "pelupa" menjadi website dinamis yang memiliki memori jangka panjang. Mari kita ulas kembali rangkuman seluruh materi pokok agar melekat kuat dalam pemahaman Anda.

---

### 1. Keterbatasan Web Statis

Kita menyadari mengapa website statis React/Tailwind sebelumnya selalu kembali kosong saat halaman dimuat ulang (_refresh_):

- Segala aktivitas pengolahan data pada web statis diproses di dalam **memori RAM sementara** pada browser pengunjung. Begitu browser ditutup atau dimuat ulang, memori sementara itu akan diseka bersih untuk menghemat ruang.
- Kita menggunakan **analogi Papan Tulis Kapur di Kafe**: tulisan di papan tulis kapur akan dihapus bersih setiap malam saat kafe tutup. Agar nama pelanggan tidak hilang, kita butuh Buku Catatan Besar permanen di meja kasir.

---

### 2. Konsep Database sebagai Brankas Loker Pintar

Kita memahami cara kerja basis data (database) menggunakan **analogi Loker Penitipan Barang Pintar**:

- **Kolom (Column)**: Label vertikal penunjuk jenis data yang boleh diisi (seperti Nama, Email, Isi Pesan).
- **Baris (Row/Record)**: Baris data horizontal berisi satu paket lengkap data milik satu pengunjung tertentu secara sejajar.
- **Kunci Utama (Primary Key)**: Kode kunci unik pembeda (misalnya angka urut `id`) agar data yang bernama sama tidak saling tertukar.
- **Pemisahan Sistem**: Tampilan website (Frontend) ditaruh di perangkat pengunjung, sedangkan Brankas Data (Database) disimpan aman di server awan (_cloud_) yang menyala 24 jam sehari untuk menjaga keamanan dan konsistensi data.

---

### 3. Berkenalan dengan Supabase (BaaS)

Kita berkenalan dengan teknologi **Backend-as-a-Service (BaaS)** yang membebaskan kita dari kerumitan merakit sistem server dari nol:

- **Supabase**: Kontraktor brankas instan yang menyediakan server database gratis di internet secara aman.
- Kita mendaftar akun menggunakan otorisasi akun GitHub, membuat proyek baru di wilayah server terdekat (Singapore), memilih paket gratis Rp 0, dan menyusun tabel database pertama kita bernama `messages` dengan tipe data teks (`text`).

---

### 4. API Key & Jembatan Koneksi Keamanan

Kita mempraktikkan proses penyambungan jembatan kode antara website lokal dan brankas awan:

- **Project URL**: Alamat rumah brankas kita di server awan Supabase.
- **Anon Key**: Kunci pas publik untuk memperbolehkan website memasukkan data baru ke dalam tabel.
- **Otomatisasi AI Antigravity**: Kita cukup memberikan URL dan Anon Key tersebut kepada asisten AI kita untuk merakit modul `@supabase/supabase-js` dan menulis logika kode pengiriman data secara otomatis.
- **Berkas `.env` (Laci Rahasia)**: Berkas khusus di laptop kita yang bertugas menyembunyikan API Key agar tidak bocor ke publik saat kita melakukan _push_ kode ke GitHub.

---

### 5. FAQ Keamanan & Operasional

Kita menjawab kecemasan umum seputar pengelolaan database:

- **Row Level Security (RLS)**: Fitur keamanan tingkat baris di Supabase PostgreSQL yang menjamin data pengunjung aman dari peretas luar.
- **Pencadangan & Keamanan**: Jika tabel terhapus, kita bisa meminta AI Antigravity merakitnya kembali lewat panel SQL Editor.
- **Batas Gratis**: Kapasitas database gratis sebesar 500 MB (sangat melimpah untuk jutaan pesan teks) dan tidak akan memotong biaya secara mendadak.

---

Dengan memahami kelima poin di atas, website Anda kini resmi memiliki kekuatan dinamis. Di pertemuan keenam berikutnya, kita akan menambahkan fitur yang lebih kompleks: mengunggah file media gambar atau foto pengunjung ke awan menggunakan Cloudinary dan menghubungkannya dengan database Supabase kita! Sampai jumpa di materi berikutnya!
