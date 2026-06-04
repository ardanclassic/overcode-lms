# Script Materi: Pertemuan 4 - 02. Analogi Penerbitan Buku (Subbab 1.1)

## 📖 Bab 1: Konsep Deployment (Penerbitan)

### Subbab 1.1: Perbedaan File Lokal vs File Terpublikasi (Analogi Penerbitan Buku)

Sebelum kita melakukan rilis, mari kita samakan persepsi dulu. Apa sebenarnya perbedaan antara website yang jalan di laptop kita (*Local*) dengan website yang sudah jalan di internet (*Deployed*)?

Mari kita gunakan **Analogi Menulis dan Menerbitkan Buku**:

Bayangkan Anda adalah seorang penulis novel yang hebat. Anda duduk di kamar Anda, membuka laptop, dan mengetik naskah novel Anda kata demi kata hingga selesai.

---

### Kondisi 1: Naskah di Laci Meja Kamar Anda (LOKAL / Localhost)

Saat novel tersebut masih berupa naskah mentah di Microsoft Word di laptop Anda, atau berupa tumpukan kertas yang Anda simpan di dalam laci meja kamar Anda:
- Siapa saja yang bisa membaca kisah seru novel Anda?
- Hanya Anda sendiri! Dan mungkin orang yang Anda izinkan masuk ke kamar Anda untuk membaca langsung di meja belajar Anda.
- Jika ada orang di luar kota atau di luar negeri yang ingin membaca novel tersebut, tentu tidak bisa. Mereka tidak memiliki akses fisik ke kamar Anda.
- Kondisi ini sama dengan **Localhost** (`localhost:5173`). Kode website Anda sudah jadi dan berjalan di laptop Anda, tetapi orang luar tidak bisa membukanya karena laptop Anda tidak memberikan akses internet langsung ke berkas komputer Anda.

---

### Kondisi 2: Buku Dipajang di Toko Buku Gramedia (DEPLOYMENT)

Untuk membagikan kisah novel Anda kepada dunia, Anda membawa naskah tersebut ke penerbit besar. Penerbit mencetak novel Anda menjadi ribuan buku rapi, menyebarkannya menggunakan truk logistik, dan memajangnya di rak-rak pajangan toko buku Gramedia di seluruh kota.
- Sekarang, siapa saja yang bisa membaca kisah novel Anda?
- Siapa saja! Semua orang bisa pergi ke toko buku terdekat, membeli buku Anda, dan membacanya kapan saja dari rumah mereka tanpa perlu izin masuk ke kamar pribadi Anda.
- Proses membawa naskah novel dari laci meja kamar menuju ke rak toko buku Gramedia disebut dengan **Deployment**.

---

### Bagaimana Proses Ini Terjadi di Dunia Web?

Di dunia pembuatan aplikasi web:
1. **Naskah Novel** adalah barisan kode React dan Tailwind CSS yang kita rakit di Antigravity IDE.
2. **Kamar Pribadi** adalah harddisk lokal laptop Anda.
3. **Penerbit & Toko Buku Gramedia** adalah penyedia layanan awan (seperti **Vercel** atau **Netlify**). Mereka menyediakan "rak pajangan" di internet (yang disebut server atau *Hosting*) agar berkas website Anda diletakkan di sana secara publik.
4. **Alamat URL** (`.app` atau `.com`) adalah petunjuk jalan atau koordinat toko buku tersebut agar orang-orang tidak tersesat saat ingin mengunjungi website Anda.

Dengan melakukan deployment, Anda meresmikan karya Anda untuk dinikmati oleh publik luas. Sekarang, mari kita berkenalan dengan "toko buku gratisan" terbaik tempat kita meletakkan website kita!
