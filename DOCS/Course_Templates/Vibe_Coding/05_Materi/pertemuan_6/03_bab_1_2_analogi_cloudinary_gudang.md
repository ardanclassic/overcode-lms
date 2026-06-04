# Script Materi: Pertemuan 6 - 03. Cloudinary sebagai Gudang Media (Subbab 1.2)

## 📖 Bab 1: Media Storage vs Database

### Subbab 1.2: Pengenalan Cloudinary / ImageKit (Gudang Media Khusus)

Pada materi sebelumnya, kita sudah sepakat bahwa menyimpan file gambar langsung di dalam database adalah ide yang buruk. Solusi terbaiknya adalah memisahkan tempat penyimpanan fisik gambar tersebut ke layanan khusus yang disebut **Media Storage**.

Salah satu penyedia layanan penyimpanan media awan terbaik, gratis, dan paling populer di kalangan developer saat ini adalah **Cloudinary**.

---

### Cloudinary: Gudang Kontainer Media Pintar Anda

Bayangkan Cloudinary seperti sebuah **Gudang Kontainer Raksasa Khusus Media** di pinggir pelabuhan internet.

Gudang ini dirancang khusus untuk menerima barang-barang berukuran besar—seperti kontainer foto, kontainer video, dan kontainer dokumen. Gudang ini memiliki pekerja-pekerja profesional yang sangat cepat dalam menata file.

Ketika Anda mengirimkan sebuah file foto ke Cloudinary:

1. Cloudinary akan menerima file tersebut dan meletakkannya di salah satu rak gudang mereka yang aman.
2. Sebagai bukti penerimaan, Cloudinary akan menerbitkan sebuah **Alamat Jalan Unik** (disebut tautan **URL Gambar**) yang merujuk langsung ke lokasi foto tersebut di internet. Contoh alamatnya: `https://res.cloudinary.com/nama-anda/image/upload/v12345/foto-profil.jpg`.
3. Alamat jalan inilah yang bentuknya sangat ringan (hanya berupa teks baris pendek) yang kemudian kita kirimkan ke brankas database Supabase kita.

---

### Cara Kerja Kolaborasi Cloudinary dan Supabase

Mari kita lihat alur kerja kolaborasi yang harmonis di antara kedua sistem ini saat seorang pengunjung mengunggah foto profil di website Anda:

1. **Langkah 1 (Unggah File Fisik)**
   Pengunjung memilih file foto dari galeri HP-nya dan menekan tombol unggah di website Anda. Website kita tidak mengirimkan file foto tersebut ke Supabase. Website kita akan mengirimkan file foto fisik yang berat itu langsung ke **Gudang Cloudinary**.
2. **Langkah 2 (Menerima Tautan Alamat)**
   Cloudinary menerima foto fisik tersebut, menyimpannya di server awan mereka, lalu mengembalikan secarik kertas digital berisi **Tautan URL** dari gambar tersebut kepada website kita.
3. **Langkah 3 (Menyimpan Catatan Alamat)**
   Website kita mengambil Tautan URL dari Cloudinary tersebut, lalu mengirimkan teks URL yang ringan itu ke brankas **Supabase** untuk disimpan di dalam kolom tabel bernama `avatar_url`.

4. **Langkah 4 (Menampilkan Gambar di Layar)**
   Ketika ada pengunjung lain membuka website Anda, website akan meminta Supabase memberikan alamat URL gambar tersebut. Setelah website mendapatkan teks URL-nya, website akan langsung menyuruh browser pengunjung mengambil gambar fisik asli dari **Gudang Cloudinary** untuk digambar di layar browser mereka.

---

### Keuntungan Menggunakan Cloudinary

Selain gratis dan aman, Cloudinary memiliki fitur kecerdasan tambahan yang sangat luar biasa untuk optimasi website:

- **Kompresi Otomatis**: Jika Anda mengunggah foto berukuran 5 Megabyte, Cloudinary bisa secara otomatis mengecilkan ukuran filenya menjadi hanya 200 Kilobyte tanpa menurunkan kualitas visualnya secara drastis. Hal ini membuat website Anda dimuat dengan sangat cepat di HP pengunjung, menghemat kuota internet mereka, dan menghemat ruang penyimpanan awan Anda.
- **Pemberian Ukuran Dinamis**: Anda bisa meminta Cloudinary memotong gambar menjadi bulat secara otomatis, atau mengubah ukurannya menjadi kotak presisi hanya dengan memodifikasi sedikit teks pada tautan URL-nya.

Di bab berikutnya, kita akan membahas konsep dasar tentang bagaimana sistem-sistem yang berbeda ini (Website, Cloudinary, dan Supabase) berkomunikasi satu sama lain menggunakan konsep yang disebut dengan **API**!
