# Script Materi: Pertemuan 6 - 04. Konsep API sebagai Jembatan (Subbab 2.1)

## 📖 Bab 2: Integrasi Fitur Upload

### Subbab 2.1: Konsep API (Jembatan Komunikasi Antar Aplikasi)

Sepanjang kita membangun website, Anda akan sangat sering mendengar singkatan **API** (singkatan dari _Application Programming Interface_).

Bagi orang awam, istilah API terdengar sangat menakutkan, seperti rumus matematika fisika kuantum yang rumit. Namun sebenarnya, konsep API sangatlah sederhana. API adalah **penerjemah atau jembatan komunikasi** yang memungkinkan satu aplikasi berbicara dan bertukar data dengan aplikasi lainnya secara aman.

Untuk memahaminya tanpa pusing, mari kita tinggalkan istilah komputer sejenak dan masuk ke sebuah **Restoran Mewah**.

---

### Analogi Pelayan Restoran

Bayangkan Anda sedang makan malam di sebuah restoran:

1. **Anda sebagai Pelanggan (Website / Frontend)**
   Anda duduk santai di meja makan. Di depan Anda, ada lembaran daftar menu makanan yang ingin Anda pesan. Anda tidak memiliki akses langsung untuk masuk ke dapur restoran. Anda tidak boleh berjalan ke belakang, memotong daging, menyalakan kompor, atau meracik bumbu sendiri (karena itu berbahaya dan bisa mengacaukan dapur).
2. **Dapur Restoran (Database / Supabase / Cloudinary)**
   Di bagian belakang restoran, terdapat ruangan dapur tertutup tempat koki bekerja menyiapkan hidangan. Koki memiliki semua bahan makanan, kompor, dan pisau. Namun, koki tidak tahu apa yang ingin Anda makan karena mereka sibuk di belakang.
3. **Pelayan Restoran (API)**
   Di sinilah peran penting sang **Pelayan**.
   - Pelayan berjalan menghampiri meja Anda (Frontend).
   - Anda membacakan pesanan Anda: _"Tolong bawakan saya nasi goreng satu porsi."_ Pelayan mencatat pesanan tersebut di buku kecil mereka.
   - Pelayan kemudian berjalan membawa catatan pesanan tersebut masuk ke dalam dapur (Backend).
   - Pelayan memberikan catatan tersebut kepada koki: _"Ini pesanan untuk Meja Nomor 5."_
   - Koki memasak nasi goreng tersebut. Setelah selesai, koki menaruh piring nasi goreng di meja saji.
   - Pelayan mengambil piring tersebut, lalu membawanya kembali ke meja Anda untuk Anda nikmati.

Dalam dunia teknologi, **Pelayan itulah yang kita sebut sebagai API**.
Website Anda (Pelanggan) ingin meminta data dari Supabase atau menitipkan gambar ke Cloudinary (Dapur). Website Anda tidak boleh langsung mengobrak-abrik isi server backend. Website Anda cukup memanggil "Pelayan" (API) dengan perintah tertentu (misalnya perintah mengirim data atau meminta data). API akan berjalan mengantarkan perintah tersebut ke server, mengeksekusi instruksi dengan aman, lalu membawakan hasilnya kembali ke layar website Anda.

---

### Mengapa Kita Membutuhkan API?

Ada dua alasan utama mengapa API menjadi tulang punggung seluruh aplikasi modern di dunia:

- **Keamanan (Security Guard)**: Pelayan memastikan Anda tidak bisa merusak dapur. Website pengunjung tidak bisa menghapus tabel database utama karena semua permintaan harus melewati pemeriksaan ketat sang API.
- **Efisiensi & Kolaborasi**: Dengan API, website kita bisa menggunakan fitur hebat buatan perusahaan lain secara instan tanpa harus membuatnya sendiri dari nol.
  - Ingin menampilkan peta interaktif? Kita tinggal panggil API milik _Google Maps_.
  - Ingin menerima pembayaran online kartu kredit atau e-wallet? Kita tinggal sambungkan API milik _Midtrans_ atau _Stripe_.
  - Ingin mengunggah foto profil pengunjung? Kita tinggal panggil API milik _Cloudinary_.

Di subbab berikutnya, kita akan meminta asisten AI kita di Antigravity IDE untuk menuliskan kode pemanggilan API Cloudinary dan Supabase ini agar fitur unggah gambar di website kita berjalan dengan mulus!
