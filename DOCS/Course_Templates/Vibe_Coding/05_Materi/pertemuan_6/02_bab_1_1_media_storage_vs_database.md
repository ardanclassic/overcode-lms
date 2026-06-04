# Script Materi: Pertemuan 6 - 02. Media Storage vs Database (Subbab 1.1)

## 📖 Bab 1: Media Storage vs Database

### Subbab 1.1: Kenapa Gambar/Video Tidak Boleh Disimpan Langsung di dalam Database?

Ketika pertama kali belajar tentang database, sangat wajar jika Anda berpikir: _"Ah, karena database adalah brankas penyimpanan, berarti saya bisa memasukkan apa saja ke sana, kan? Teks, angka, gambar foto profil, lagu, bahkan video pendek berdurasi satu menit!"_

Secara teknis, komputer memang bisa dipaksa untuk mengubah file gambar menjadi barisan teks kode biner yang sangat panjang (disebut format _Base64_) dan menyimpannya di dalam kolom database. Namun, di dunia industri nyata, **tindakan ini adalah kesalahan fatal yang sangat dihindari oleh para developer profesional.**

Mengapa demikian? Mari kita bedah dua alasan utamanya:

---

### 1. Masalah Performa: Database Akan Menjadi Lambat dan Obesitas

Database relasional seperti PostgreSQL yang disediakan oleh Supabase dirancang khusus untuk memproses data terstruktur yang ringan secara kilat—seperti nama, tanggal, angka harga, atau status login.

- Data teks biasa biasanya hanya berukuran beberapa **byte** hingga beberapa **kilobyte** saja. Database bisa mencari, mengurutkan, dan menampilkan jutaan data teks ini dalam waktu kurang dari seperseribu detik.
- Sebaliknya, satu file foto beresolusi sedang dari kamera smartphone Anda bisa berukuran **3 Megabyte hingga 5 Megabyte** (yaitu 3.000 hingga 5.000 kali lebih besar dari satu baris teks biasa).
- Jika Anda menyimpan file foto profil tersebut langsung di dalam kolom database, setiap kali ada orang membuka website Anda, database harus memproses bongkahan data biner raksasa tersebut. Akibatnya, kinerja database akan merosot tajam, halaman website Anda akan memuat dengan sangat lambat (_loading_ berputar terus), dan server database Anda bisa mengalami mati mendadak (_crash_) karena kelebihan beban.

---

### 2. Biaya Penyimpanan yang Jauh Lebih Mahal

Server database awan dirancang menggunakan media penyimpanan (SSD) kelas industri berkecepatan sangat tinggi yang harganya mahal. Menggunakan ruang penyimpanan database yang berharga untuk menaruh file gambar mentah adalah pemborosan anggaran yang besar.

Untuk itu, industri teknologi memisahkan jenis penyimpanan menjadi dua kategori:

1. **Database**: Khusus menyimpan teks, angka, dan logika relasi yang ringan.
2. **Media Storage (Object Storage)**: Gudang khusus yang dirancang untuk menaruh file media besar (gambar, video, dokumen PDF) dengan biaya sewa penyimpanan yang jauh lebih murah dan kecepatan distribusi file yang dioptimalkan untuk media.

---

### Analogi Dompet Saku vs Gudang Logistik

Mari kita gunakan analogi sederhana sehari-hari:

Bayangkan **Database** Anda seperti **Dompet Saku** yang Anda kantongi di celana Anda.
Dompet saku dirancang khusus untuk menyimpan benda-benda tipis, ringan, dan cepat diambil—seperti kartu identitas (KTP), kartu ATM, struk parkir, dan beberapa lembar uang kertas. Anda bisa mengambil KTP dari dompet Anda dalam waktu dua detik saja.

Sekarang, bayangkan Anda baru saja membeli **sebuah sepeda lipat baru** (analog dengan file gambar atau foto profil berukuran megabyte).
Apakah Anda akan mencoba melipat sepeda tersebut sekecil mungkin dan memaksanya masuk ke dalam dompet saku celana Anda? Tentu tidak masuk akal, bukan? Dompet Anda akan robek, celana Anda melorot, dan Anda tidak akan bisa berjalan dengan nyaman.

Sepeda lipat tersebut harus ditaruh di **Gudang Rumah atau Garasi** (Media Storage). Lalu, apa yang Anda taruh di dalam dompet saku Anda? Anda cukup menaruh **Kertas Kuitansi Kepemilikan Sepeda** yang berisi catatan nomor seri dan alamat lokasi gudang tempat Anda memarkir sepeda tersebut. Kertas kuitansi yang tipis itu mewakili tautan alamat internet (**URL Link**) dari gambar kita.

Di subbab berikutnya, kita akan berkenalan dengan layanan awan bernama **Cloudinary** yang akan bertindak sebagai "Garasi" khusus untuk menyimpan sepeda-sepeda visual website kita!
