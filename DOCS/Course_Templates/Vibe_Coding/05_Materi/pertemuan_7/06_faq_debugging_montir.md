# Script Materi: Pertemuan 7 - 06. FAQ Troubleshooting & Debugging

## ❓ FAQ (Sering Ditanyakan): Troubleshooting & Debugging

Menghadapi eror untuk pertama kalinya bisa terasa melelahkan secara mental. Berikut adalah rangkuman tanya-jawab darurat yang dirancang untuk menenangkan pikiran Anda dan memberikan panduan taktis saat tersesat di dalam kode.

---

### Q1: "AI saya tiba-tiba memberikan kode yang malah membuat seluruh layar website saya berubah menjadi putih polos (blank screen) tanpa pesan eror sama sekali. Apa yang harus saya lakukan?"

**Jawab:**
Kondisi layar putih polos (_blank screen_) biasanya terjadi karena ada **eror logika fatal** di dalam komponen React Anda yang membuat aplikasi mati sebelum sempat menggambar apa pun di layar.

Jangan panik! Ikuti langkah darurat berikut:

1. Buka **Console Browser** Anda (Klik kanan -> _Inspect_ -> tab _Console_). Meskipun layarnya putih polos, di panel Console dijamin akan terpajang tulisan teks merah yang sangat jelas menjelaskan penyebab matinya aplikasi tersebut.
2. Salin teks merah tersebut, lalu berikan ke AI Antigravity untuk diperbaiki.
3. Jika Anda tidak bisa menemukan erornya di Console, besar kemungkinan ada tanda kurung tutup `}` atau tag HTML yang lupa ditutup di baris kode terakhir yang Anda edit. Coba batalkan ketikan terakhir Anda dengan Ctrl + Z beberapa kali, atau lakukan **Rollback Git** jika kode sudah terlanjur berantakan.

---

### Q2: "Jika website saya eror, apakah itu berarti saya tidak memiliki bakat di dunia teknologi? Saya merasa sangat bodoh."

**Jawab:**
**Sama sekali tidak!** Tolong buang jauh-jauh pikiran negatif tersebut.
Eror bukanlah indikator kecerdasan atau bakat Anda. Di dunia IT, eror adalah bagian dari rutinitas harian yang tidak terpisahkan.

Bahkan seorang programmer legendaris yang membuat aplikasi tingkat dunia pun menghabiskan 80% waktu kerja mereka hanya untuk memperbaiki eror (_debugging_) dan hanya 20% waktu untuk menulis kode baru. Menghadapi eror adalah proses belajar yang paling efektif. Setiap kali Anda berhasil menyelesaikan satu eror, Anda baru saja naik kelas menjadi kreator digital yang lebih cerdas.

---

### Q3: "Asisten AI saya memberikan jawaban solusi eror yang salah secara berulang-ulang, padahal saya sudah me-reset chat. Mengapa hal itu bisa terjadi?"

**Jawab:**
Jika AI terus memberikan solusi yang salah meskipun chat sudah di-reset, biasanya ada dua kemungkinan penyebabnya:

1. **Laporan eror Anda kurang lengkap**: Pastikan Anda telah menempelkan seluruh pesan eror merah dari Console browser beserta isi file kode yang utuh. Jika AI hanya diberi potongan kode pendek, ia akan menebak-nebak dan tebakannya bisa salah.
2. **Konteks database tidak sinkron**: Terkadang eror terjadi karena nama tabel atau kolom di database Supabase Anda berbeda dengan yang ditulis di kode React. Periksalah apakah ada huruf kapital yang berbeda atau huruf 's' jamak yang tertinggal. AI tidak bisa melihat dashboard Supabase Anda secara langsung kecuali Anda memberi tahu struktur tabelnya secara tertulis.

---

### Q4: "Apakah saya harus menghafal semua arti kode eror di browser?"

**Jawab:**
Tidak perlu! Sama seperti ribuan kode bahasa pemrograman, Anda tidak dituntut untuk menghafal arti kode eror seperti `404`, `500`, atau `net::ERR_CONNECTION_REFUSED`.

Tugas Anda cukup menyalin teks eror tersebut dan menanyakannya langsung ke AI Antigravity dengan bahasa santai: _"AI, apa arti eror ini dan bagaimana cara memperbaikinya?"_ AI akan dengan senang hati menjelaskannya kepada Anda seperti seorang guru yang ramah.

---

Dengan terjawabnya keraguan ini, Anda sekarang resmi menjadi detektif digital yang siap menghadapi tantangan apa pun. Mari kita tutup pertemuan ketujuh ini dengan membaca ringkasan materi di halaman terakhir!
