# Script Materi: Pertemuan 7 - 05. Mengatasi Halusinasi AI & Rollback (Subbab 2.2)

## 📖 Bab 2: Meminta AI Menjadi "Montir" Pribadi

### Subbab 2.2: Bahaya "Halusinasi AI" dan Teknik Rollback ke Save-Game Git

Kecerdasan buatan (AI) adalah asisten yang luar biasa pintar, namun kita harus jujur pada satu hal: **AI tidak sempurna.**

Ada kalanya AI mengalami kondisi yang disebut **Halusinasi** (_Hallucination_). Ini adalah kondisi di mana AI mulai kebingungan, memberikan solusi kode yang melantur, salah menebak letak eror, dan jika kita terus menuruti sarannya, website kita malah akan semakin hancur berantakan hingga tidak bisa dinyalakan sama sekali.

Jika Anda terjebak dalam situasi di mana kode Anda sudah berantakan dan AI mulai berputar-putar memberikan jawaban salah yang sama berulang kali, jangan panik! Kita memiliki dua senjata rahasia untuk melepaskan diri dari jebakan ini.

---

### Senjata Rahasia 1: Hapus Riwayat Percakapan (Reset Chat Context)

AI di Antigravity IDE mengingat seluruh obrolan Anda dari awal. Jika obrolan Anda sudah terlalu panjang dan dipenuhi oleh pesan eror yang saling tumpang tindih, ingatan AI akan menjadi "penuh" dan kacau. Akibatnya, AI akan mulai pikun dan memberikan saran yang bertolak belakang.

Cara mengatasinya sangat mudah:

- Klik tombol **"New Chat"** atau ikon tong sampah/segar kembali (_Reset Context_) pada panel chat AI Antigravity Anda.
- Ini akan menghapus ingatan jangka pendek obrolan lama Anda yang berantakan dan memulai sesi diskusi yang bersih dari nol.
- Setelah chat di-reset, berikan kembali file kode Anda yang bersih dan jelaskan erornya dari awal secara singkat. Anda akan terkejut melihat bagaimana AI mendadak menjadi sangat pintar kembali setelah ingatannya dibersihkan!

---

### Senjata Rahasia 2: Taktik Rollback Menggunakan Git

Bagaimana jika kode file di laptop Anda sudah terlanjur diubah-ubah oleh instruksi AI yang salah hingga Anda lupa bagian mana saja yang dirusak? Di sinilah peran penyelamat dari **Git Commit** (Mesin Waktu / _Save-Game_) yang sudah kita pelajari di Pertemuan Ketiga!

Jika kode Anda hancur total, Anda tidak perlu mengetik ulang dari awal. Anda bisa melakukan **Rollback** atau memundurkan waktu proyek Anda ke titik aman terakhir saat website Anda masih menyala dengan normal.

Langkah melakukan Rollback bersama AI Antigravity:

1. Buka kotak obrolan AI Anda.
2. Ketik instruksi perintah rollback menggunakan bahasa manusia biasa:
   > _"Asisten AI, saya baru saja melakukan kesalahan dan merusak kode saya. Tolong batalkan semua perubahan file yang belum di-commit dan kembalikan seluruh isi folder proyek saya ke status commit terakhir yang aman di Git."_
3. AI Antigravity akan segera mengakses sistem Git lokal Anda dan menjalankan perintah pembatalan perubahan (_Discard Changes_ atau `git checkout .`).
4. **Keajaiban mesin waktu bekerja!** Dalam waktu satu detik, seluruh berkas kode Anda yang rusak akan terhapus dan digantikan kembali dengan kode bersih lama Anda yang aman. Layar browser Anda akan kembali menyala hijau normal seperti sedia kala.

---

### Pesan Kebijaksanaan Vibe Coder

Ingatlah selalu aturan emas ini: **Lakukan commit setiap kali Anda berhasil menyelesaikan satu fitur kecil yang berjalan lancar.**

Jangan menunda commit hingga seluruh website selesai. Commit-lah sesering mungkin. Semakin sering Anda membuat _save-game_, maka jarak lompatan mundur mesin waktu Anda akan semakin dekat dan aman jika terjadi kecelakaan kode di tengah jalan.

Di subbab berikutnya, kita akan membahas FAQ penting mengenai penanganan darurat saat website mendadak mati menjadi putih polos tanpa pesan eror sama sekali!
