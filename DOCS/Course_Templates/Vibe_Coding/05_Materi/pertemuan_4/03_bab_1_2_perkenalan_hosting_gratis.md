# Script Materi: Pertemuan 4 - 03. Perkenalan Hosting Gratis (Subbab 1.2)

## ðŸ“– Bab 1: Konsep Deployment (Penerbitan)

### Subbab 1.2: Perkenalan Vercel & Netlify (Layanan Hosting Instan Rp 0)

Dulu, agar sebuah website bisa online di internet, prosesnya sangat rumit, mahal, dan menakutkan bagi pemula. Kita harus membeli server fisik yang menyala 24 jam, menyewa alamat IP publik, mengatur kabel jaringan, dan membayar biaya bulanan yang mahal. 

Bahkan jika menggunakan server awan, kita tetap harus mengonfigurasi sistem Linux hitam yang rumit. 

Namun hari ini, semua kerumitan tersebut sudah dipangkas menjadi nol! Lahirlah layanan hosting modern yang sangat memanjakan pemula. Dua layanan terbaik, terpopuler, dan paling stabil saat ini adalah **Vercel** dan **Netlify**.

---

### Apa itu Vercel dan Netlify?

Vercel dan Netlify adalah **Gudang Pajangan Website Gratis** berbasis komputasi awan (*Cloud*). 

Mereka dirancang khusus untuk menampung jenis website statis dan dinamis modern yang kita pelajari saat ini (yaitu React).

Berikut adalah **3 Alasan Utama** mengapa kita memilih mereka untuk rilis web perdana kita:

#### 1. Biaya Gratis (Rp 0 Selamanya)
Mereka menyediakan paket yang disebut dengan *Hobby Tier* atau paket belajar. Selama website yang Anda buat digunakan untuk keperluan pribadi, portofolio lamaran kerja, atau bisnis kecil pemula, mereka tidak akan menagih uang sepeser pun. Tidak ada kewajiban memasukkan nomor kartu kredit saat mendaftar. 

#### 2. Kecepatan Server Kelas Dunia
Meskipun gratis, server mereka tidak lambat. Vercel dan Netlify menyebarkan salinan website Anda ke ratusan pusat data (*Data Center*) di seluruh belahan dunia (yang disebut sistem *CDN / Content Delivery Network*). Jika pengunjung website Anda berada di Jakarta, mereka akan diarahkan ke server terdekat di Singapura. Hasilnya? Website Anda akan terbuka dalam hitungan milidetik saat diklik!

#### 3. Keajaiban Koneksi Otomatis ke GitHub
Ini adalah fitur paling favorit para pengembang web profesional. Vercel dan Netlify tidak menyuruh Anda mengunggah file zip secara manual lewat tombol upload setiap kali ada perbaikan. 

Mereka terhubung langsung ke akun **GitHub** Anda. Setiap kali Anda menyuruh asisten AI melakukan *Push* ke GitHub, Vercel atau Netlify akan mendeteksi perubahan tersebut, mengambil kodenya secara otomatis, merakitnya ulang, dan memperbarui website online Anda dalam hitungan detik. 

Proses otomatis ini di dunia industri dikenal dengan istilah **Continuous Integration & Continuous Deployment (CI/CD)**. 

Di kelas OverCode Academy, kita akan menggunakan Vercel sebagai pilihan utama kita karena integrasinya dengan framework React + Vite sangat mulus dan stabil. Mari kita siapkan langkah-langkah untuk menyambungkan proyek kita!
