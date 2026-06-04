# Script Materi: Pertemuan 2 - 02. Komponen React sebagai Tulang/Rangka (Subbab 1.1)

## ðŸ“– Bab 1: Anatomi Web Modern (Analogi Tubuh Manusia)

### Subbab 1.1: Komponen React sebagai Tulang/Rangka Bongkar-Pasang

Saat kita membuka sebuah website di browser, mata kita melihat satu halaman utuh yang menyatu indah. Namun, di balik layar, website modern dirakit menggunakan sebuah teknologi bernama **React**.

Untuk memahaminya tanpa pusing, mari kita gunakan **Analogi Tubuh Manusia**:
Bayangkan sebuah website adalah tubuh manusia. React bertindak sebagai **Tulang dan Rangka** yang menyusun tubuh tersebut.

Rangka manusia tidak diciptakan sebagai satu kesatuan tulang raksasa yang kaku dari ujung kepala hingga kaki. Tubuh kita dirakit dari ratusan tulang-tulang kecil yang saling terhubung: ada tulang tengkorak, tulang lengan, tulang rusuk, dan tulang kaki.

Setiap tulang ini berdiri sendiri secara mandiri. Sebagai contoh: jika Anda ingin mengganti lengan robot pada mainan aksi, Anda cukup mencopot bagian lengannya saja tanpa harus menghancurkan atau membongkar tulang rusuk atau kakinya.

---

### Konsep Modular: Mainan Lego

React bekerja dengan cara yang persis sama. Dia membagi-bagi website kita menjadi blok-blok kecil mandiri yang disebut dengan **Komponen**.

Bayangkan Anda ingin membuat website portofolio pribadi. Menggunakan React, kita akan memecah website tersebut menjadi beberapa komponen terpisah:

1. **Komponen `Navbar` (Menu Atas):** Berisi logo dan navigasi link.
2. **Komponen `ProfileCard` (Kartu Profil):** Berisi foto, nama, dan biodata singkat Anda.
3. **Komponen `ProjectList` (Daftar Karya):** Berisi kumpulan proyek yang pernah Anda buat.
4. **Komponen `Footer` (Kaki Halaman):** Berisi hak cipta dan info kontak di bagian paling bawah.

Masing-masing komponen ini disimpan di dalam file terpisah (biasanya berakhiran `.tsx` di dalam folder proyek Anda).

---

### Mengapa Konsep Komponen Ini Sangat Keren?

Ada dua keuntungan utama mengapa website modern wajib menggunakan komponen React:

1. **Bisa Digunakan Berulang Kali (_Reusable_):**
   Bayangkan Anda memiliki komponen sebuah tombol cantik dengan efek bersinar. Menggunakan React, Anda cukup membuat komponen itu sekali saja. Jika Anda butuh tombol tersebut di 10 halaman yang berbeda, Anda tidak perlu menulis ulang kodenya 10 kali. Anda cukup memanggil komponen tombol tersebut berulang kali seperti menempelkan balok Lego yang sama.
2. **Mudah Diperbaiki & Dikembangkan:**
   Jika suatu hari logo di menu atas website Anda tiba-tiba miring, Anda tidak perlu menelusuri ribuan baris kode seluruh website Anda. Anda cukup masuk ke file khusus bernama `Navbar.tsx`, memperbaikinya di sana, dan perubahan tersebut akan otomatis teraplikasikan tanpa mengganggu bagian kartu profil atau footer.

Di kelas OverCode Academy ini, asisten AI kita di Antigravity sangat menyukai React karena AI bisa fokus membuatkan kita satu komponen demi satu komponen secara terpisah dan rapi, tanpa membuat struktur kode website kita berantakan.

Ingat logikanya: **React adalah tulang rangka bongkar pasang website kita!**
