# Script Materi: Pertemuan 5 - 03. Analogi Brankas Database (Subbab 1.2)

## 📖 Bab 1: Keterbatasan Web Statis

### Subbab 1.2: Analogi Brankas Penyimpanan Data (Database)

Pada materi sebelumnya, kita sudah menyadari bahwa untuk memiliki website yang pintar dan bisa mengingat, kita membutuhkan tempat penyimpanan permanen terpisah yang kita sebut dengan **Database**.

Namun, bagi pemula yang tidak memiliki latar belakang IT, kata "database" sering kali terdengar seperti tumpukan kode biner nol dan satu yang sangat membingungkan di dalam server raksasa yang dingin. Untuk meruntuhkan bayangan rumit tersebut, mari kita gunakan sebuah analogi sederhana yang sangat dekat dengan kehidupan nyata: **Brankas Bank atau Loker Penitipan Barang Modern**.

---

### Analogi Loker Penitipan Barang Pintar

Bayangkan sebuah **Loker Penitipan Barang Pintar** yang sering Anda temui di stasiun kereta atau pusat perbelanjaan modern. Loker ini tidak sembarangan menyimpan barang secara acak di lantai. Loker ini memiliki aturan main yang sangat ketat agar barang-barang ribuan pengunjung tidak saling tertukar:

1. **Kotak Loker yang Teratur (Struktur Kolom & Baris)**
   Loker tersebut dibagi menjadi barisan laci kotak kecil yang seragam.
   - Di bagian depan loker, ada label penunjuk jenis barang yang boleh dimasukkan. Misalnya, kolom pertama khusus untuk menyimpan **Nama Pemilik**, kolom kedua khusus untuk **Nomor Handphone**, dan kolom ketiga khusus untuk **Alamat Email**. Aturan label vertikal ini dalam dunia database disebut sebagai **Kolom (Column)**.
   - Ketika ada seorang pengunjung bernama Budi menitipkan datanya, petugas loker akan membuka satu baris laci horizontal khusus untuk Budi. Di baris tersebut, data nama Budi, nomor HP Budi, dan email Budi akan disimpan sejajar. Baris data horizontal ini dalam database disebut sebagai **Baris (Row)** atau **Record**.

2. **Kunci Akses yang Unik (Primary Key)**
   Setiap loker memiliki nomor kunci unik yang tidak boleh sama antara satu laci dengan laci lainnya. Kunci unik ini memastikan bahwa meskipun ada sepuluh pengunjung yang bernama sama-sama "Budi", petugas loker tidak akan salah membuka laci karena masing-masing Budi memiliki nomor loker yang berbeda (misalnya Loker-001, Loker-002, dan seterusnya). Dalam database, nomor kunci unik pembeda ini disebut dengan **Primary Key (Kunci Utama)**.

3. **Petugas Keamanan Penjaga Brankas (Database Management System)**
   Loker pintar ini tidak dibiarkan terbuka begitu saja sehingga semua orang bisa mengobrak-abrik isinya. Ada sistem komputer pengawas yang menjaga loker tersebut. Pengunjung tidak boleh langsung merogoh laci loker sesuka hati. Jika ingin menyimpan atau mengambil barang, pengunjung harus memasukkan kode akses rahasia dan berbicara dengan komputer pengawas tersebut.

---

### Mengapa Brankas Ini Harus Terpisah dari Tampilan Website?

Dalam arsitektur website modern, **Tampilan Website (Frontend)** dan **Brankas Data (Database/Backend)** sengaja dibuat terpisah dan ditaruh di tempat yang berbeda. Mengapa demikian?

- **Keamanan**: Tampilan website Anda berada di perangkat pengunjung (HP mereka). Jika brankas data ditaruh langsung di dalam tampilan website, maka siapa pun yang membuka website Anda bisa dengan mudah meretas dan mencuri seluruh data pengunjung lainnya. Dengan memisahkannya di server awan (_cloud_) yang dilindungi brankas aman, data semua pengunjung terkunci rapat.
- **Konsistensi**: Meskipun laptop pengunjung mati, internet mereka terputus, atau browser mereka ditutup, brankas database di awan akan tetap menyala 24 jam sehari menjaga data tersebut agar tidak hilang.

Di bab berikutnya, kita akan berkenalan dengan sebuah teknologi brankas modern gratis bernama **Supabase**. Kita akan belajar bagaimana cara membuat brankas kita sendiri di internet hanya dengan beberapa klik tanpa perlu menulis kode backend yang rumit!
