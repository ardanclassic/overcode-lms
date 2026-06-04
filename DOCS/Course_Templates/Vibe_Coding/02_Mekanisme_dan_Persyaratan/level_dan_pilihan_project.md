# Klasifikasi Level & Pilihan Project Akhir

Course Vibe Coding ini membagi tingkat kesulitan pengerjaan _Final Project_ ke dalam 3 level utama. Siswa dapat memilih target proyek sesuai dengan ketertarikan dan kecepatan pemahaman mereka selama kelas berlangsung.

Setiap level dirancang agar menghasilkan produk nyata yang modern, fungsional, _engaging_, dan relevan dengan kehidupan sehari-hari (bukan sekadar proyek tutorial "Hello World" yang membosankan).

---

## 🟢 LEVEL 1: BEGINNER (Front-End Static Page)

**Fokus Utama:** Penguasaan struktur UI/UX yang indah menggunakan HTML, CSS, JavaScript dasar, serta deployment ke Vercel/Netlify.
**Batasan:** Tidak memiliki _database_ awan (BaaS). Data bersifat statis (_hardcoded_) atau maksimal disimpan di _Local Storage_ browser.

### Ide Project Level 1:

1. **"The BioHub" (Linktree Alternative):** Halaman _link-in-bio_ super estetik dengan animasi _hover_ keren, _dark-mode toggle_, dan _custom cursor_. Cocok untuk dipasang di bio Instagram/TikTok peserta.
2. **"Digital Wedding/Event RSVP":** Undangan digital interaktif dengan efek _scroll-reveal_, _countdown timer_ menuju hari H, dan tombol navigasi langsung ke Google Maps.
3. **"Notion-Style Digital Resume":** CV digital interaktif berdesain minimalis (mirip Notion) di mana pengunjung bisa klik _tab_ untuk melihat pengalaman kerja, _skill_, dan hobi.
4. **"Daily Focus Board":** _Dashboard_ personal (halaman depan browser) yang menampilkan Jam Digital raksasa, ucapan selamat pagi dinamis, kutipan motivasi harian acak, dan target fokus utama hari itu.
5. **"The Aesthetic Pomodoro Timer":** Aplikasi pengatur waktu kerja/belajar (25 menit kerja, 5 menit istirahat) lengkap dengan suara _lo-fi_ bawaan atau _white noise_, berdesain _glassmorphism_.
6. **"Expense Splitter (Patungan Yuk)":** Kalkulator patungan untuk nongkrong. Pengguna memasukkan total tagihan, pajak, layanan, jumlah orang, dan aplikasi menghitung secara adil (_tanpa database, reset saat di-refresh_).

---

## 🟡 LEVEL 2: MEDIUM (Front-End + Cloud BaaS - Supabase)

**Fokus Utama:** Mengintegrasikan UI dengan _Backend as a Service_ (BaaS) yaitu **Supabase** untuk fungsi _Create, Read, Update, Delete_ (CRUD) teks sederhana.
**Batasan:** Terdapat sistem _database_ awan, namun belum melayani _upload file/gambar_ (gambar menggunakan _URL eksternal_).

### Ide Project Level 2:

1. **"AnonAsk" (NGL/Secreto Clone):** Platform Q&A anonim. Siswa membuat _link_ khusus miliknya, orang lain bisa mengirimkan pesan anonim, dan pesan tersebut akan masuk & tersimpan di _database_ Supabase untuk dibaca pemiliknya.
2. **"Mini Threads / Micro-Journal":** Aplikasi _micro-blogging_ personal. Siswa bisa _post_ pemikiran singkat (maksimal 280 karakter), dan _feed_ akan diperbarui secara _real-time_ dan tersimpan selamanya.
3. **"Public Wishlist & Registry":** Halaman untuk mendaftar barang-barang yang diinginkan (untuk ulang tahun/nikahan). Pengunjung bisa menekan tombol "Saya akan belikan ini" dan status barang di database Supabase akan berubah menjadi _Claimed_.
4. **"Live Polling & Voting Hub":** Aplikasi _voting real-time_. Misalnya untuk _voting_ tempat makan siang kantor atau _voting_ destinasi liburan keluarga. Hasil persentase bar akan berubah otomatis (berkat kapabilitas _real-time_ Supabase) saat ada yang _vote_.
5. **"Community Event RSVP Board":** Lebih maju dari Level 1. Undangan acara di mana tamu bisa mengisi form nama & jumlah kehadiran. Nama tamu yang hadir langsung muncul di layar utama dalam daftar "Who's Coming".
6. **"Daily Habit Tracker (Cloud Sync)":** Sama seperti _tracker_ biasa, tapi karena terhubung ke Supabase, siswa bisa membuka _tracker_-nya di laptop maupun di HP tanpa kehilangan data _checklist_ harian mereka.

---

## 🔴 LEVEL 3: ADVANCE (Front-End + Supabase + Media Storage)

**Fokus Utama:** Pembuatan platform komprehensif dengan fungsionalitas aplikasi penuh, menggabungkan Supabase (Database & Autentikasi) dan **ImageKit / Cloudinary** (untuk manajemen unggah foto/file).
**Batasan:** Harus mengorkestrasi berbagai integrasi API.

### Ide Project Level 3:

1. **"Rate My Fit" (OOTD Voting App):** Platform di mana pengguna mengunggah foto _Outfit of The Day_ (tersimpan di ImageKit), kemudian pengguna lain bisa memberikan rating (api/bintang) pada pakaian tersebut (rating disimpan di Supabase).
2. **"The Mini Pinterest / Moodboard":** Galeri visual personal. Siswa dapat mengunggah gambar-gambar referensi desain atau inspirasi ke dalam kategori/album tertentu. Gambar di-_host_ di Cloudinary agar cepat diakses.
3. **"Pasar Warga" (Mini Garage Sale):** Platform _e-commerce lite_ untuk menjual barang bekas _pre-loved_. Terdapat fitur unggah foto produk, deskripsi, harga, dan tombol "Hubungi via WhatsApp" untuk transaksi.
4. **"Foodie Share" (Recipe Hub):** Platform berbagi resep masakan. Pengguna bisa mengunggah foto hasil masakan, menulis bahan-bahan, dan langkah pengerjaan. Orang lain bisa memberikan _likes_ dan komentar.
5. **"Adopt-a-Pet Board":** Papan pengumuman hewan peliharaan yang butuh _adopsi_. Pengguna mengunggah foto kucing/anjing, detail nama & umur, dan lokasi.
6. **"Report-It!" (Aplikasi Laporan Fasilitas):** Alat internal kantor/kampus di mana pengguna bisa memfoto AC bocor atau lampu mati, mengunggah foto tersebut beserta deskripsi kerusakan, lalu _admin_ bisa mengubah status tiket menjadi "Sedang Diperbaiki".
