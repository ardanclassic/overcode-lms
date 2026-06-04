# Script Materi: Pertemuan 5 - 05. Integrasi API Key & Jembatan Kode (Subbab 2.2)

## 📖 Bab 2: Berkenalan dengan Supabase (BaaS)

### Subbab 2.2: Cara Memberikan API Key ke AI untuk Membangun Jembatan Koneksi

Sekarang, situasi kita adalah sebagai berikut: Anda memiliki **Website (React)** yang menyala indah di laptop lokal Anda, dan Anda memiliki **Brankas Data (Supabase)** yang berdiri kokoh di server awan internet.

Namun, saat ini kedua sistem ini belum saling mengenal. Mereka terpisah oleh jarak internet yang jauh dan tidak tahu cara berkomunikasi satu sama lain.

Tugas kita hari ini adalah memasang **kabel penghubung** di antara keduanya. Untuk memasang kabel ini, website Anda harus tahu di mana alamat brankas Supabase Anda berada, dan harus memegang kunci pas rahasia untuk bisa meletakkan data di dalamnya. Kunci pas rahasia inilah yang kita sebut dengan **API Key**.

---

### Memahami API Key: Alamat Rumah & Kunci Pas Rahasia

Di dalam dashboard proyek Supabase Anda, jika Anda masuk ke menu **Settings** (Pengaturan) -> **API**, Anda akan menemukan dua baris teks acak yang sangat penting:

1. **Project URL (Alamat Brankas)**
   Ini adalah alamat web unik yang merujuk langsung ke lokasi brankas Anda di server awan Supabase. Contoh bentuknya: `https://xyzabcqwerty.supabase.co`. Website kita membutuhkan alamat ini agar tahu ke arah mana ia harus mengirimkan paket data.
2. **Anon Key (Kunci Pas Publik)**
   Ini adalah kunci pas keamanan publik yang bertugas membuka pintu gerbang brankas Supabase Anda agar website diperbolehkan memasukkan data baru ke dalam tabel. Karakter teksnya sangat panjang dan acak.

---

### Langkah Aman Memberikan Kunci Akses ke AI Antigravity

Sebagai seorang _Vibe Coder_, Anda memiliki asisten AI pintar di Antigravity IDE yang siap membantu merakit kode penghubung ini. Anda tidak perlu pusing mempelajari sintaks penulisan pustaka program Supabase (_Supabase Client_).

Mari kita ikuti proses kolaborasi praktis bersama AI berikut:

1. **Salin Kunci dari Supabase**
   Pergilah ke dashboard Supabase Anda, lalu salin (copy) **Project URL** dan **Anon Key** milik proyek Anda.
2. **Buka Kotak Obrolan AI di Antigravity IDE**
   Arahkan pandangan Anda ke panel asisten AI Antigravity di samping meja kerja kode Anda. Ketik perintah instruksi menggunakan formula prompt yang sudah kita pelajari.

   _Contoh Prompt:_

   > _"Tolong sambungkan proyek React + TypeScript + Vite saya ke database Supabase. Buat file konfigurasi `.env` untuk menyimpan URL dan Anon Key berikut dengan aman di komputer saya:
   > URL: [PASTE_URL_ANDA_DI_SINI]
   > Anon Key: [PASTE_ANON_KEY_ANDA_DI_SINI]
   > Setelah itu, buatkan fungsi sederhana di halaman formulir kontak website saya agar ketika pengunjung menekan tombol kirim, data nama, email, dan pesan mereka langsung terkirim dan tersimpan di tabel bernama `messages` yang ada di Supabase."_

3. **Perhatikan Proses Kerja AI**
   AI Antigravity akan bekerja secara instan:
   - AI akan membuat berkas rahasia bernama `.env` (singkatan dari _Environment Variables_). Berkas ini bertugas menyembunyikan kunci akses Anda agar aman dan tidak tersebar secara publik di GitHub.
   - AI akan menginstal modul penghubung resmi Supabase (`@supabase/supabase-js`) ke dalam proyek Anda.
   - AI akan menulis logika kode pengiriman data formulir ke database.

4. **Uji Coba Pengiriman Data**
   Setelah AI selesai menulis kodenya, jalankan kembali website lokal Anda. Ketikkan nama Anda, tulis sebuah pesan acak pada formulir kontak di website, lalu klik kirim.

   Sekarang, buka tab browser dashboard Supabase Anda, masuk ke menu **Table Editor** dan klik tabel `messages`. **Keajaiban terjadi!** Nama Anda dan pesan yang baru saja Anda ketik kini terpajang dengan rapi di dalam baris tabel database Supabase di awan. Website Anda kini resmi hidup!

---

### Mengapa Berkas `.env` Sangat Penting?

Sebagai aturan keselamatan kerja digital yang wajib Anda patuhi: **Jangan pernah menuliskan URL dan Anon Key Supabase Anda secara langsung di dalam kode utama halaman website Anda.**

Jika Anda melakukannya, maka ketika Anda melakukan _push_ kode ke GitHub, semua orang di dunia bisa melihat kunci akses Anda. Mereka bisa menyalahgunakan kunci tersebut untuk mengacak-acak database Anda. Berkas `.env` bertindak sebagai laci rahasia pribadi di laptop Anda yang tidak akan pernah diunggah ke GitHub, sehingga kunci akses brankas Anda tetap aman terjaga.

Di subbab berikutnya, kita akan membahas FAQ tentang apa saja kekhawatiran umum seputar keselamatan dan pengelolaan data di database Supabase!
