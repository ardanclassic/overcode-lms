# Script Materi: Pertemuan 4 - 08. Ringkasan Materi

## 📝 Ringkasan Materi Pertemuan 4: Rilis ke Publik! (Deployment)

Selamat! Kita telah menyelesaikan modul di Pertemuan Keempat, salah satu tonggak sejarah terbesar dalam perjalanan belajar Anda. Kita telah mengubah karya website lokal Anda di laptop menjadi produk yang terbit di internet dunia. Mari kita ulas kembali materi penting hari ini agar Anda memiliki gambaran utuh tentang proses rilis teknologi ini.

---

### 1. Konsep Lokal vs Deployed (Analogi Penerbitan Buku)

Kita membedakan status keberadaan proyek website kita dengan analogi penulisan karya ilmiah atau sastra **(Subbab 1.1)**:

- **Status Lokal (Draft di Laci Meja)**: Sebelum rilis, website kita hanya berjalan di laptop pribadi kita (`localhost`). Orang luar tidak bisa melihatnya. Ini seperti naskah buku yang masih disimpan rapat di laci meja kerja Anda.
- **Status Deployed (Buku Terbit di Gramedia)**: Setelah proses rilis (_deployment_), file website dipindahkan ke komputer server khusus yang menyala terus 24 jam sehari. Sekarang, siapa saja di seluruh belahan dunia bisa mengaksesnya hanya dengan mengetik tautan URL unik Anda. Ini seperti naskah Anda yang akhirnya dicetak, diterbitkan, dan dipajang di toko buku Gramedia untuk dibaca semua orang.

---

### 2. Mengenal Hosting Instan & CI/CD Otomatis

Kita diperkenalkan dengan alat modern gratis yang memangkas kerumitan sewa server tradisional **(Subbab 1.2)**:

- **Vercel & Netlify**: Layanan penampung (_hosting_) instan modern yang menyediakan server gratis Rp 0 bagi para developer di seluruh dunia.
- **Continuous Deployment (CI/CD)**: Konsep otomatisasi mutakhir. Begitu kita menyambungkan GitHub kita ke Vercel, kita tidak perlu mengunggah file secara manual setiap kali ada pembaruan. Setiap kali asisten AI kita melakukan _Git Push_ ke GitHub, Vercel akan otomatis mendeteksi perubahan tersebut dan memperbarui tampilan website hidup kita dalam hitungan detik.

---

### 3. Langkah Praktis Menghubungkan GitHub ke Vercel

Kita mempraktikkan proses penyambungan jembatan antara Gudang Kode kita dan Server Penerbitan **(Subbab 2.1)**:

1. Masuk ke situs Vercel dan mendaftar menggunakan tombol otorisasi "Continue with GitHub".
2. Memilih repositori proyek website kita dari daftar yang diimpor.
3. Menekan tombol "Deploy" dan menunggu proses perakitan selesai dalam waktu kurang dari satu menit hingga muncul visual siraman konfeti pertanda sukses.

---

### 4. Validasi Sosial & Membagi Karya (Subbab 2.3)

Kita mendorong keberanian untuk memamerkan hasil karya demi meningkatkan motivasi belajar:

- Melawan rasa malu atau perasaan tidak layak (_Imposter Syndrome_) dengan membagikan tautan URL website perdana kita ke grup WhatsApp keluarga, teman dekat, atau media sosial. Validasi dan apresiasi awal dari lingkungan sekitar adalah bahan bakar terbaik untuk melanjutkan proses belajar.

---

### 5. FAQ Batasan Paket Gratis Vercel (Subbab 3.1)

Kita mengupas tuntas kekhawatiran biaya tersembunyi dari penggunaan Vercel:

- **Selamanya Gratis**: Vercel menyediakan bandwidth gratis sebesar 100 GB per bulan. Ini setara dengan sekitar 100.000 kali kunjungan halaman per bulan untuk website portofolio sederhana.
- Jika kuota bulanan tersebut habis, website Anda tidak akan dihapus atau dikenakan tagihan denda otomatis; website hanya akan dinonaktifkan sementara dan akan menyala kembali secara otomatis di bulan berikutnya ketika kuota diatur ulang (_reset_).

---

Luar biasa! Dengan selesainya Pertemuan Keempat ini, Anda kini bukan lagi sekadar pengguna teknologi, melainkan seorang _kreator digital yang telah menerbitkan karya di panggung dunia_. Di pertemuan kelima berikutnya, kita akan menaikkan level website statis kita agar menjadi website dinamis yang bisa menyimpan data (seperti formulir pendaftaran, sistem komentar, atau login pengguna) dengan menggunakan sistem database awan dari Supabase! Sampai jumpa di pertemuan berikutnya!
