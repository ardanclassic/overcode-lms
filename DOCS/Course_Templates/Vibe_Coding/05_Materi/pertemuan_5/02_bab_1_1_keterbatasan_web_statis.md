# Script Materi: Pertemuan 5 - 02. Keterbatasan Web Statis (Subbab 1.1)

## 📖 Bab 1: Keterbatasan Web Statis

### Subbab 1.1: Mengapa Web Kita Belum Bisa Menyimpan Data Form atau Login?

Mari kita jujur. Saat pertama kali Anda melihat website portofolio atau halaman pendaftaran buatan Anda menyala dengan indah di layar laptop, ada rasa bangga yang luar biasa. Anda mencoba mengetikkan nama di kolom formulir, mengklik tombol kirim, dan... muncul pesan bertuliskan _"Terima kasih, pesan Anda terkirim!"_

Tampilannya terlihat sangat meyakinkan! Namun, cobalah Anda tekan tombol **Refresh** (Muat Ulang) pada browser Anda, atau coba tutup tab browser tersebut lalu buka kembali. Apa yang terjadi? Ya, semua teks yang barusan Anda ketik di kolom input lenyap tanpa bekas. Form kembali kosong bersih.

Mengapa hal ini terjadi? Mengapa website kita seolah-olah memiliki penyakit amnesia atau hilang ingatan jangka pendek?

---

### Konsep Dasar: Segala Sesuatu Berjalan di "Otak" Browser Pengunjung

Untuk memahaminya, mari kita tengok apa yang terjadi di balik layar. Website statis yang kita bangun menggunakan React dan Tailwind CSS adalah kode-kode yang dirancang untuk **ditampilkan** oleh browser (seperti Google Chrome, Safari, atau Microsoft Edge).

Ketika seseorang membuka tautan URL Vercel Anda:

1. Browser pengunjung akan mengunduh seluruh file tampilan website kita ke perangkat mereka (HP atau laptop mereka).
2. Browser kemudian mengeksekusi kode React tersebut untuk menggambar tombol, memajang foto, dan menampilkan formulir di layar perangkat mereka.
3. Seluruh proses pengolahan data masukan dari formulir diproses di dalam **memori RAM sementara** perangkat pengunjung tersebut.

Karena prosesnya hanya numpang lewat di memori sementara perangkat pengunjung, maka begitu tab browser ditutup atau halaman dimuat ulang, browser akan menghapus seluruh catatan memori sementara itu untuk menghemat ruang RAM. Browser akan memulai ulang segalanya dari nol. Tidak ada tempat penyimpanan terpusat yang bertugas mencatat dan menjaga data tersebut agar tetap ada setelah browser ditutup.

---

### Analogi Papan Tulis Kapur di Restoran

Bayangkan website statis Anda seperti sebuah **Papan Tulis Kapur** yang dipajang di depan sebuah kafe.

Sang pelayan kafe (browser) menulis menu hari ini di papan tulis tersebut menggunakan kapur. Ketika pelanggan datang, mereka bisa membaca menu dengan jelas. Pelanggan bahkan bisa menuliskan nama mereka di papan tulis tersebut menggunakan kapur tulis yang disediakan untuk mendaftar antrean meja.

Namun, begitu malam tiba dan kafe tutup, pelayan akan mengambil penghapus papan tulis dan menyeka bersih seluruh tulisan kapur tersebut agar esok hari papan bisa digunakan kembali.

Jika informasi antrean pelanggan tadi hanya ditulis di papan tulis kapur tanpa dipindahkan ke buku catatan pesanan kafe, maka semua data antrean pelanggan hari itu akan hilang selamanya begitu papan tulis dihapus. Papan tulis kapur (website statis) tidak memiliki memori permanen untuk menyimpan catatan setelah kafe tutup.

---

### Apa yang Kita Butuhkan?

Agar data antrean pelanggan tidak hilang saat papan tulis dihapus, kita memerlukan sebuah **Buku Catatan Besar** yang disimpan rapi di meja kasir. Setiap kali ada pelanggan menuliskan namanya di papan tulis kapur, pelayan harus segera menyalin nama tersebut ke dalam Buku Catatan Besar tersebut. Buku Catatan Besar inilah yang di dunia pemrograman disebut dengan **Database (Basis Data)**.

Di subbab berikutnya, kita akan membahas lebih dalam tentang bagaimana Buku Catatan Besar atau Database ini bekerja menggunakan analogi brankas penyimpanan barang yang aman dan teratur!
