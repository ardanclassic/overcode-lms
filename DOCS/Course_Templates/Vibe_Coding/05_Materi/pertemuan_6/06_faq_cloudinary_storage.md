# Script Materi: Pertemuan 6 - 06. FAQ Cloudinary & Media Storage

## ❓ FAQ (Sering Ditanyakan): Cloudinary & Media Storage

Mengintegrasikan fitur unggah gambar sering kali memunculkan berbagai pertanyaan teknis dan kekhawatiran mengenai batas penyimpanan awan. Berikut adalah rangkuman tanya-jawab sederhana untuk meyakinkan langkah Anda.

---

### Q1: "Apakah layanan Cloudinary ini benar-benar gratis? Apakah ada masa kedaluwarsanya?"

**Jawab:**
Ya, Cloudinary menyediakan paket gratis (_Free Tier_) yang berlaku selamanya tanpa mewajibkan pengisian kartu kredit saat mendaftar.

Paket gratis Cloudinary menggunakan sistem kredit bulanan yang setara dengan:

- **25 Gigabyte** kapasitas penyimpanan media total.
- **25 Gigabyte** bandwidth bulanan (proses pengiriman data gambar saat website Anda dibuka oleh orang lain).
- Batas gratis ini sangat melimpah untuk proyek portofolio, web undangan pernikahan, atau blog pribadi. Kapasitas ini bisa menampung puluhan ribu foto yang sudah terkompresi dengan baik.

---

### Q2: "Apa yang terjadi jika kapasitas gratis Cloudinary saya penuh? Apakah gambar di website saya akan hilang atau website saya mendadak mati?"

**Jawab:**
Jika kapasitas gratis Anda habis atau melewati batas bulanan:

- Gambar-gambar lama yang sudah terlanjur diunggah dan tersimpan **tidak akan dihapus** dan website Anda **tidak akan mati**. Tampilan website akan tetap menyala normal dan gambar lama tetap bisa dilihat pengunjung.
- Namun, pengunjung baru tidak akan bisa mengunggah foto baru lagi. Jika mereka mencoba menekan tombol kirim foto, sistem API Cloudinary akan menolak dan website Anda akan menampilkan pesan eror gagal upload.
- Kuota bandwidth bulanan Anda akan diatur ulang (_reset_) menjadi nol secara otomatis setiap awal bulan baru.

---

### Q3: "Bagaimana cara mencegah agar kuota penyimpanan gratis Cloudinary saya tidak cepat habis?"

**Jawab:**
Cara paling ampuh adalah dengan memanfaatkan fitur **Kompresi Otomatis** bawaan Cloudinary.
Saat Anda menyuruh AI menuliskan jembatan kode pengunggah gambar, pastikan Anda meminta AI menambahkan parameter optimasi otomatis (seperti format `f_auto` dan kualitas `q_auto`). Dengan parameter ini, Cloudinary akan secara cerdas mengubah format foto pengunjung (misalnya dari PNG yang berat menjadi WebP yang sangat ringan) dan memotong resolusinya sesuai kebutuhan layar tanpa mengurangi ketajaman visual. Ini bisa menghemat ruang penyimpanan Anda hingga 80%!

---

### Q4: "Apakah foto-foto pribadi yang diunggah oleh pengunjung ke Cloudinary saya aman dan tidak disalahgunakan?"

**Jawab:**
Foto yang diunggah ke folder Cloudinary Anda disimpan di server awan yang aman. Hanya pemilik akun Cloudinary (yaitu Anda sendiri) yang memiliki akses ke dalam dashboard admin untuk melihat, menyusun, atau menghapus foto-foto tersebut.

Namun, perlu Anda ingat bahwa secara bawaan, tautan URL gambar yang diterbitkan Cloudinary bersifat publik (artinya siapa pun yang memegang alamat tautan URL tersebut bisa membuka gambarnya di browser). Jadi, hindari membuat fitur yang mewajibkan pengguna mengunggah dokumen yang sangat rahasia (seperti foto KTP, kartu keluarga, atau slip gaji) sebelum Anda mempelajari sistem keamanan enkripsi tingkat lanjut.

---

Dengan memahami cara kerja Cloudinary ini, Anda kini memiliki bekal yang cukup untuk merancang website yang interaktif. Mari kita tutup materi pertemuan keenam ini dengan membaca ringkasan lengkap di halaman berikutnya!
