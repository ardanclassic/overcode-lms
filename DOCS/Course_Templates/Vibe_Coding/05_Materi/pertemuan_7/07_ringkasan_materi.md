# Script Materi: Pertemuan 7 - 07. Ringkasan Materi

## 📝 Ringkasan Materi Pertemuan 7: Jurus Rahasia Detektif (Troubleshooting & Debugging)

Luar biasa! Kita telah menyelesaikan seluruh modul di Pertemuan Ketujuh. Hari ini, kita berhasil menaklukkan ketakutan terbesar seorang pembuat aplikasi: menghadapi eror. Kita telah belajar bagaimana bertindak tenang dan taktis seperti seorang detektif digital. Mari kita rangkum seluruh materi penting agar melekat erat di ingatan Anda.

---

### 1. Perubahan Pola Pikir terhadap Error

Kita mengubah cara pandang kita terhadap pesan kesalahan di komputer:

- Eror adalah hal yang sangat normal dan terjadi setiap hari pada semua programmer di seluruh dunia.
- Eror bukanlah tanda kemarahan komputer atau bukti bahwa Anda tidak berbakat.
- Kita menggunakan **analogi GPS Peta Navigasi**: ketika kita salah mengambil belokan, GPS mengeluarkan suara peringatan untuk putar balik. Pesan eror di layar bekerja dengan cara yang sama—ia memberi tahu jalan mana yang buntu agar kita bisa memutar balik ke arah yang benar.

---

### 2. Membaca Console Log Browser

Kita mempelajari cara membuka "Buku Harian Rahasia" browser untuk berburu petunjuk eror:

- Membuka **Console Developer Tools** dengan menekan tombol **F12** atau klik kanan -> **Inspect** -> tab **Console**.
- Membedah arti warna lampu lalu lintas informasi:
  - **Putih/Abu-abu (Log)**: Laporan operasional santai yang normal.
  - **Kuning (Warning)**: Peringatan kecil yang tidak menghentikan jalannya website.
  - **Merah (Error Fatal)**: Target buruan utama kita, menandakan sistem mati atau instruksi gagal dijalankan. Kita belajar membaca kode eror seperti `net::ERR_NAME_NOT_RESOLVED` untuk mendiagnosis masalah internet atau kesalahan ketik URL database.

---

### 3. Teknik Laporan Kerusakan ke AI (Montir Pribadi)

Kita mempraktikkan cara mengirim laporan kerusakan yang terstruktur ke asisten AI Antigravity agar mendapatkan perbaikan jitu:

- **Tindakan**: Blokir dan salin seluruh pesan merah dari Console browser beserta file kode lengkapnya.
- **Formula Prompt**: Tuliskan niat Anda -> sebutkan nama file -> tempelkan pesan eror merah -> lampirkan kode file saat ini -> minta AI mendiagnosis dan memberikan perbaikan lengkap.

---

### 4. Menaklukkan Halusinasi AI & Git Rollback

Kita menyiapkan strategi pertahanan jika asisten AI mengalami kebingungan (_hallucination_):

- **Reset Chat Context**: Menekan tombol "New Chat" atau ikon penyegar obrolan AI untuk membersihkan ingatan jangka pendek AI yang sudah penuh dan tumpang tindih.
- **Rollback Git (Save-Game)**: Memanfaatkan "mesin waktu" Git Commit. Jika kode terlanjur rusak berantakan, kita cukup menyuruh AI Antigravity mengembalikan folder proyek ke status commit terakhir yang aman (`git checkout .`).

---

### 5. Penanganan Darurat Layar Putih (Blank Screen)

Kita merangkum langkah cepat menangani layar putih polos:

- Jangan panik. Buka panel Console browser untuk melihat jeritan pesan merah di balik layar.
- Periksa keselarasan nama kolom/tabel di database Supabase dengan yang ditulis di dalam kode React Anda.
- Manfaatkan tombol batalkan (Ctrl + Z) atau Rollback Git jika diperlukan.

---

Dengan memahami kelima poin di atas, Anda kini resmi memiliki mental baja seorang kreator teknologi mandiri. Anda tidak akan pernah takut lagi mencoba hal baru karena Anda memegang kunci penyelamat berupa Git dan asisten AI yang hebat. Di pertemuan kedelapan (terakhir) berikutnya, kita akan fokus melakukan pemolesan visual terakhir pada website Anda dan melatih kemampuan bercerita (_storytelling_) untuk memamerkan proyek akhir Anda di depan kelas! Sampai jumpa di pertemuan terakhir!
