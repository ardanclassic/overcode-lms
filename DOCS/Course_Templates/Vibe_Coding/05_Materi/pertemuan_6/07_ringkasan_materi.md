# Script Materi: Pertemuan 6 - 07. Ringkasan Materi

## 📝 Ringkasan Materi Pertemuan 6: Fitur Lanjutan (File Storage & API)

Luar biasa! Kita telah menyelesaikan seluruh modul pembelajaran di Pertemuan Keenam ini. Di sini, kita berhasil memperkaya aplikasi kita dengan kemampuan mengunggah file gambar ke awan secara instan menggunakan Cloudinary dan Supabase. Mari kita ulas kembali rangkuman seluruh materi pokok hari ini agar tidak ada pemahaman penting yang terlewatkan.

---

### 1. Perbedaan Media Storage dan Database

Kita mempelajari aturan penting dalam perancangan arsitektur data website:

- **Database** dirancang untuk memproses data teks dan angka yang sangat ringan (ukuran byte hingga kilobyte). Memaksa menyimpan gambar berukuran megabyte secara langsung di database akan menurunkan performa sistem secara drastis (_crash_ / lambat).
- Kita menggunakan **analogi Dompet Saku vs Garasi/Gudang Rumah**: dompet saku khusus menyimpan kartu ATM dan uang kertas tipis (seperti database menyimpan teks), sedangkan sepeda lipat baru yang besar harus diparkir di garasi (seperti gambar yang ditaruh di Media Storage). Dompet saku kita cukup menyimpan kertas kuitansi alamat sepeda tersebut (URL link gambar).

---

### 2. Berkenalan dengan Cloudinary

Kita menggunakan **Cloudinary** sebagai media penyimpanan awan (_cloud media storage_) gratis:

- Cloudinary bertindak sebagai **Gudang Kontainer Media** yang aman di pelabuhan internet.
- Ketika file gambar diunggah ke Cloudinary, sistem akan menyimpan file fisiknya di server mereka dan mengembalikan **Tautan URL** alamat gambar tersebut ke website kita untuk dicatat di database Supabase.
- Fitur hebat Cloudinary meliputi **Kompresi Otomatis** (mengubah PNG berat menjadi WebP ringan guna menghemat kuota internet dan penyimpanan hingga 80%) serta pemotongan ukuran gambar secara dinamis melalui modifikasi URL.

---

### 3. Konsep API (Jembatan Komunikasi Aplikasi)

Kita menguraikan istilah API yang rumit menggunakan **analogi Pelayan Restoran**:

- **Anda/Pelanggan** bertindak sebagai **Website (Frontend)** yang ingin memesan makanan tanpa boleh masuk langsung ke dapur.
- **Koki/Dapur** bertindak sebagai **Database (Backend/Supabase/Cloudinary)** yang menyiapkan makanan dengan aman.
- **Pelayan** bertindak sebagai **API** yang mengantarkan catatan pesanan Anda ke dapur, lalu membawakan sepiring nasi goreng hangat kembali ke meja Anda. API bertugas menjaga keamanan database dari manipulasi langsung pengunjung luar.

---

### 4. Integrasi Langkah Praktis Upload Gambar

Kita melatih asisten AI di Antigravity IDE untuk membangun sistem unggahan dengan langkah teratur:

- Menyiapkan variabel kunci Cloud Name, API Key, dan membuat **Unsigned Upload Preset** pada dashboard Cloudinary agar unggahan bisa dilakukan langsung dari browser pengunjung.
- Menyimpan kunci rahasia di berkas lokal `.env.local`.
- Meminta AI membuat komponen area input file estetik menggunakan Tailwind CSS, melakukan unggahan ke Cloudinary, menampilkan gambar _preview_ langsung, dan mencatat URL hasilnya di tabel database Supabase kita.

---

### 5. FAQ Batasan Kuota Gratis

Kita mengupas tuntas batasan operasional Cloudinary:

- **Batas Gratis**: Menyediakan penyimpanan 25 GB dan bandwidth bulanan 25 GB secara gratis selamanya.
- Jika kuota bulanan terlampaui, gambar lama tidak akan hilang, melainkan fitur unggah foto baru hanya akan dinonaktifkan sementara hingga awal bulan baru ketika kuota diatur ulang (_reset_).

---

Dengan menuntaskan Pertemuan Keenam ini, kemampuan Anda merancang aplikasi web modern telah berkembang pesat. Di pertemuan ketujuh berikutnya, kita akan bersiap menghadapi tantangan sesungguhnya: mempelajari taktik detektif digital untuk melacak eror kode dan menaklukkan layar eror merah/putih menggunakan bantuan asisten AI! Sampai jumpa di materi berikutnya!
