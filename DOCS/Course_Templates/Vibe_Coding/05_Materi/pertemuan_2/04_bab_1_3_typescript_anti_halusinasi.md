# Script Materi: Pertemuan 2 - 04. Mengapa Memilih TypeScript? (Subbab 1.3)

## ðŸ“– Bab 1: Anatomi Web Modern (Analogi Tubuh Manusia)

### Subbab 1.3: Mengapa Kita Memilih TypeScript? (Senjata Rahasia Anti-Halusinasi AI)

Saat membuat website dengan React dan Tailwind CSS, kita membutuhkan bahasa untuk mengatur jalannya logika aplikasi kita. Secara tradisional, bahasa yang digunakan adalah **JavaScript**.

Namun, di OverCode Academy, kami mengambil keputusan penting: seluruh proyek kita akan menggunakan **TypeScript** (varian JavaScript yang diberi fitur pengawasan ekstra).

Mengapa kita harus mempersulit diri dengan menambahkan TypeScript jika kita adalah pemula? Jawabannya sangat mengejutkan: **Untuk mempermudah pekerjaan asisten AI kita di Antigravity, dan melindunginya dari penyakit halusinasi!**

Mari kita bedah alasannya menggunakan analogi sederhana:

---

### Analogi Anak Kecil Tanpa Aturan vs Polisi Lalu Lintas

- **JavaScript Biasa (Anak Kecil Tanpa Aturan):**
  JavaScript biasa itu ibaratnya anak kecil yang sangat penurut tapi tidak tahu aturan keselamatan. Jika Anda menyuruhnya: _"Ambilkan air minum,"_ dia akan langsung berlari. Dia bisa saja membawakan air mentah dari selokan, air panas mendidih yang berbahaya, atau bahkan air sabun. Dia tidak peduli tipe air apa yang Anda inginkan. Akibatnya, di tengah jalan sering terjadi kekacauan (_crash_) karena data yang dikirimkan salah tipe (misalnya, sistem meminta angka untuk harga barang, tapi dimasuki teks huruf).
- **TypeScript (Polisi Lalu Lintas dengan Buku Panduan Ketat):**
  TypeScript bertindak sebagai polisi lalu lintas yang memegang buku aturan yang sangat ketat (dikenal dengan istilah _Type Safety_). Sebelum ada data yang dikirim, TypeScript mewajibkan kita menetapkan aturan jelas:
  - _"Variabel `HargaBarang` harus selalu berisi ANGKA."_
  - _"Variabel `NamaMurid` harus selalu berisi TEKS."_
  - _"Variabel `ApakahSudahBayar` hanya boleh berisi YA atau TIDAK."_

  Jika ada data teks yang mencoba masuk ke variabel `HargaBarang`, TypeScript akan langsung meniup peluit merahnya dan menghentikan aplikasi saat itu juga sebelum error parah terjadi.

---

### Hubungannya dengan Kecerdasan Buatan (AI)

Ingat, di kelas Vibe Coding ini, yang mengetik baris kode Anda adalah AI asisten di Antigravity. AI adalah mesin pembaca teks.

Jika kita memakai JavaScript biasa yang bebas aturan, AI sering kali bingung menentukan struktur data apa yang sedang kita bangun. Saat AI bingung, dia akan mulai **berhalusinasi**â€”dia akan menebak-nebak aturan sendiri dan akhirnya menuliskan kode yang salah, berputar-putar memberikan solusi yang tidak menyelesaikan masalah, atau bahkan membuat website kita berubah menjadi layar putih kosong (_blank_).

Namun, jika proyek kita menggunakan **TypeScript**, AI akan melihat papan petunjuk jalan yang sangat jelas di dalam kode kita. AI tidak perlu menebak-nebak lagi karena semua tipe data sudah didefinisikan dengan tegas oleh aturan TypeScript.

Hal ini membuat asisten AI di Antigravity bekerja **10 kali lebih akurat**, lebih jarang membuat kesalahan, dan bisa mendeteksi _error_ sebelum Anda membuka website Anda di browser.

Jadi, meskipun terdengar seperti istilah teknis yang rumit, penggunaan TypeScript sebenarnya adalah penyelamat hidup kita sebagai Vibe Coder agar terhindar dari pusingnya menghadapi kode yang rusak akibat halusinasi AI!
