# Script Materi: Pertemuan 3 - 03. Mengapa Ctrl+Z Tidak Cukup? (Subbab 1.2)

## ðŸ“– Bab 1: Mengapa Kita Butuh Mesin Waktu?

### Subbab 1.2: Bahayanya Mengandalkan Fitur Undo (Ctrl+Z) Konvensional

Mungkin beberapa dari Anda berpikir: 
*"Mas, kalau cuma mau membatalkan kesalahan ketik, kan saya tinggal pencet tombol **Ctrl+Z** (Undo) di keyboard? Kenapa harus repot-repot belajar Git Commit?"*

Ini adalah anggapan yang wajar bagi pemula. Namun, di dunia pembuatan aplikasi, mengandalkan Ctrl+Z untuk memperbaiki kesalahan adalah tindakan yang sangat berbahaya dan tidak aman. 

Mari kita bedah **3 Keterbatasan Utama Ctrl+Z** dibandingkan dengan Git:

---

#### Keterbatasan 1: Riwayat yang Hilang Saat Aplikasi Ditutup

Fitur Ctrl+Z hanya tersimpan di dalam memori sementara komputer Anda saat aplikasi editor kode sedang aktif terbuka. 

Bayangkan Anda bekerja hingga larut malam, kodenya rusak di bagian akhir, lalu karena lelah Anda memutuskan untuk menutup aplikasi Antigravity dan mematikan laptop untuk tidur. 

Keesokan paginya, ketika Anda membuka kembali laptop Anda, **riwayat Ctrl+Z Anda sudah terhapus bersih!** Anda tidak bisa lagi menekan Ctrl+Z untuk membatalkan kesalahan semalam. Anda terjebak dengan kode yang rusak tersebut selamanya. 

*Bedanya dengan Git:* Titik aman (*Commit*) Git disimpan di dalam database rahasia proyek Anda secara permanen. Meskipun Anda menutup aplikasi, mematikan laptop selama satu bulan, atau mencopot baterainya, titik aman tersebut tetap tersimpan kokoh dan tidak akan pernah hilang.

---

#### Keterbatasan 2: Ctrl+Z Hanya Bergerak Satu Garis Lurus

Ctrl+Z memaksa Anda membatalkan perubahan langkah demi langkah secara berurutan ke belakang. Anda tidak bisa memilih bagian mana yang ingin dibatalkan.

Misalkan Anda melakukan 3 tindakan berurutan:
1. Membuat menu atas (Navbar).
2. Menghias warna tombol.
3. Menulis teks biodata baru.

Jika Anda menyadari bahwa menu atas (Navbar) yang Anda buat di langkah pertama ternyata salah, Anda terpaksa harus menekan Ctrl+Z berkali-kali untuk menghapus teks biodata dan hiasan tombol Anda terlebih dahulu, hanya untuk mencapai langkah pertama. Hasil kerja keras Anda di langkah 2 dan 3 ikut terhapus sia-sia.

*Bedanya dengan Git:* Git memungkinkan kita melihat daftar rekaman secara mandiri. Kita bisa melompat bebas antar versi tanpa harus menghapus hasil kerja yang tidak bermasalah.

---

#### Keterbatasan 3: Tidak Ada Catatan Keterangan

Saat menekan Ctrl+Z, Anda seperti berjalan mundur dengan mata tertutup. Anda tidak tahu apa yang sedang Anda hapus sampai teks tersebut hilang dari layar. Tidak ada label atau keterangan.

*Bedanya dengan Git:* Setiap kali melakukan *Commit*, kita wajib menuliskan pesan (misal: *"Menambahkan tombol WhatsApp"*). Ini seperti meletakkan bendera penanda jalan. Kita tahu persis apa fungsi dari setiap versi cadangan kita.

Oleh karena itu, mengandalkan Ctrl+Z untuk merakit software ibarat berkendara di jalan tol yang ramai tanpa menggunakan sabuk pengaman. Pasanglah sabuk pengaman Anda menggunakan Git, agar perjalanan belajar kita di OverCode Academy terasa aman dan menyenangkan!
