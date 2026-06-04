# Script Materi: Pertemuan 7 - 03. Membaca Console Log (Subbab 1.2)

## 📖 Bab 1: Error Itu Wajar, Bukan Kiamat

### Subbab 1.2: Cara Menemukan dan Membaca Pesan Error (Console Browser)

Ketika website kita mengalami eror di browser (misalnya data tidak mau terkirim saat tombol diklik, atau gambar tidak muncul), browser pengunjung sebenarnya sedang merekam semua detail kejadian buruk tersebut di sebuah **Buku Harian Rahasia** di balik layar.

Buku harian rahasia ini disebut dengan **Console Log** (Log Konsol). Sebagai Vibe Coder, tugas pertama kita saat melakukan penyelidikan adalah membuka buku harian rahasia ini dan membaca petunjuknya.

---

### Langkah 1: Membuka Panel Detektif (Developer Tools)

Untuk membuka panel ini di browser Anda (Google Chrome, Edge, atau Firefox):

1. Buka halaman website lokal Anda yang sedang bermasalah.
2. Lakukan klik kanan di bagian layar mana saja yang kosong.
3. Dari menu yang muncul, pilih opsi paling bawah: **"Inspect"** (Periksa) atau klik tombol shortcut keyboard **F12**.
4. Di bagian samping atau bawah layar Anda, akan muncul sebuah jendela baru berisi barisan kode HTML yang rumit. Jangan panik! Hiraukan jendela rumit itu.
5. Arahkan pandangan Anda ke barisan menu di bagian atas jendela baru tersebut, lalu klik tab menu yang bertuliskan **"Console"** (Konsol).

Selamat! Anda baru saja masuk ke ruang rahasia pemantauan browser.

---

### Langkah 2: Mengenal Tiga Warna Informasi di Console

Di dalam panel Console, Anda akan melihat barisan teks berjalan. Browser membagi informasi tersebut menggunakan sistem warna lampu lalu lintas yang sangat mudah dipahami:

1. **Teks Putih/Abu-abu Biasa (Log)**
   Ini hanyalah pesan obrolan santai dari website Anda untuk melaporkan bahwa sistem berjalan normal. Misalnya: _"Aplikasi React berhasil dinyalakan."_ Ini tidak perlu Anda khawatirkan.
2. **Teks Kuning (Warning / Peringatan)**
   Ini adalah peringatan kecil. Browser ingin memberi tahu bahwa ada sesuatu yang kurang optimal tetapi website Anda masih bisa berjalan dengan baik. Misalnya: _"Anda menggunakan versi React lama, sebaiknya lakukan pembaruan."_ Anda bisa menghiraukannya terlebih dahulu untuk sementara.
3. **Teks Merah Berdarah (Error / Eror Fatal)**
   Nah, **inilah target buruan utama kita!** Teks berwarna merah dengan tanda silang merah di sampingnya menunjukkan ada sistem yang rusak atau terputus total. Browser sedang menjerit memberi tahu bahwa ada perintah Anda yang gagal dieksekusi.

---

### Langkah 3: Cara Membaca Petunjuk Teks Merah

Teks merah eror jangan hanya ditatap dengan rasa takut. Mari kita baca satu contoh pesan eror yang sering muncul:

> `GET https://xyzabc.supabase.co/rest/v1/messages net::ERR_NAME_NOT_RESOLVED`

Mari kita bedah artinya seperti seorang detektif:

- Kata **`GET`** berarti website kita sedang mencoba **mengambil data**.
- Tautan **`https://xyzabc.supabase.co...`** menunjukkan website sedang mencoba menghubungi **alamat brankas database Supabase kita**.
- Pesan **`net::ERR_NAME_NOT_RESOLVED`** adalah kode rahasia browser yang artinya: _"Saya tidak bisa menemukan alamat server ini di internet. Alamatnya salah ketik atau koneksi internet Anda mati."_

Dari pembacaan sederhana ini, kita langsung tahu letak kesalahannya: URL Supabase di berkas `.env` kita kemungkinan besar ada huruf yang salah ketik (_typo_), atau kita lupa menyalakan koneksi internet laptop kita. Sangat cepat dan presisi, bukan? Kita tidak perlu menebak-nebak lagi di mana kerusakannya.

Di bab berikutnya, kita akan belajar bagaimana cara menyalin teks merah dari buku harian browser ini dan memberikannya kepada asisten AI kita di Antigravity IDE agar AI tersebut bisa merakit perbaikan kodenya untuk kita secara instan!
