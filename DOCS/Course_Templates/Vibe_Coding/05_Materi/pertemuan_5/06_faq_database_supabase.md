# Script Materi: Pertemuan 5 - 06. FAQ Database & Supabase

## ❓ FAQ (Sering Ditanyakan): Database & Keamanan Supabase

Selamat! Website Anda sekarang sudah terhubung dengan brankas Supabase. Namun, wajar jika Anda masih merasa cemas atau bingung mengenai cara kerja database ini di dunia nyata. Berikut adalah kumpulan pertanyaan yang paling sering diajukan oleh pemula beserta penjelasannya yang sederhana.

---

### Q1: "Apakah data pengunjung website saya di Supabase aman dari pencurian hacker?"

**Jawab:**
Ya, sangat aman! Supabase dibangun di atas fondasi teknologi database standar industri global bernama **PostgreSQL**. Keamanannya setara dengan sistem keamanan bank.
Selain itu, Supabase memiliki fitur yang disebut **Row Level Security (RLS)** atau Keamanan Tingkat Baris. Dengan RLS ini, kita bisa mengatur aturan ketat: siapa saja yang boleh menulis data, siapa saja yang boleh membaca data, dan siapa yang dilarang. Secara bawaan, tidak ada orang asing yang bisa mengambil data sensitif pengunjung Anda dari luar tanpa izin khusus yang sudah kita konfigurasi.

---

### Q2: "Bagaimana jika saya tidak sengaja menghapus tabel database saya di Supabase? Apakah kodenya hancur dan datanya hilang selamanya?"

**Jawab:**
Jika Anda tidak sengaja menghapus tabel (misalnya tabel `messages`), tampilan website React Anda sendiri **tidak akan hancur**. Tampilan website akan tetap menyala normal, hanya saja fitur formulir kirim pesan akan memunculkan pesan eror karena ia tidak bisa menemukan brankas tujuannya di awan.

Mengenai data yang hilang:

- Supabase memiliki fitur pencadangan otomatis harian (_daily backup_) pada server mereka.
- Namun, cara terbaik untuk pemula adalah menjaga agar skema tabel Anda aman. Jika Anda secara tidak sengaja menghapus tabel, Anda bisa dengan mudah meminta asisten AI Antigravity untuk membuatkan tabel yang baru. Caranya: tinggal jelaskan struktur tabel lama Anda, dan AI akan mengirimkan perintah pembuatan tabel baru ke Supabase lewat panel SQL Editor.
- Sebagai saran keselamatan: hindari menekan tombol **"Drop Table"** (Hapus Tabel) berwarna merah di dashboard Supabase kecuali Anda benar-benar yakin data di dalamnya sudah tidak diperlukan lagi.

---

### Q3: "Apakah database gratis dari Supabase ini akan kedaluwarsa atau tiba-tiba ditagih biaya?"

**Jawab:**
Tidak perlu khawatir. Paket gratis (_Free Tier_) dari Supabase berlaku selamanya dan **tidak mewajibkan Anda memasukkan kartu kredit** saat mendaftar.
Kapasitas paket gratis Supabase sangat melimpah untuk proyek portofolio atau aplikasi skala kecil:

- Penyimpanan database sebesar **500 MB** (bisa menyimpan jutaan pesan teks biasa).
- Batas maksimal pembacaan/penulisan data yang sangat tinggi.
- Akun Anda tidak akan tiba-tiba ditagih biaya. Jika proyek Anda mulai mendekati batas gratis karena dikunjungi jutaan orang, Supabase akan mengirimkan email pemberitahuan terlebih dahulu agar Anda bisa melakukan pemutakhiran paket secara sadar. Jika tidak ingin membayar, Anda cukup membiarkannya saja.

---

### Q4: "Mengapa data yang saya kirim dari website tidak langsung muncul di dashboard Supabase? Saya harus me-refresh halaman dashboard."

**Jawab:**
Dashboard Supabase biasanya membutuhkan waktu beberapa detik untuk menyegarkan tampilan tabelnya di layar browser Anda. Jika data baru saja Anda kirim dari website dan belum terlihat di dashboard Supabase, cukup klik tombol **"Refresh"** kecil berbentuk melingkar yang berada di bagian kanan atas tabel di dashboard Supabase Anda (bukan me-refresh seluruh browser Anda). Data baru Anda dijamin akan langsung muncul di baris paling bawah.

---

Dengan terjawabnya keraguan ini, kini Anda bisa dengan percaya diri bereksperimen dengan database Supabase Anda. Mari kita tutup pertemuan kelima ini dengan membaca ringkasan materi di modul terakhir!
