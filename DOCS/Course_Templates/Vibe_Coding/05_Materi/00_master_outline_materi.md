# Master Outline Materi Video (NotebookLM Blueprint)

Dokumen ini adalah cetak biru (_blueprint_) kurikulum course **OverCode**. Struktur di bawah ini (Topik, Bab, dan Subbab) dirancang spesifik agar sangat mudah dipahami saat diubah menjadi format Audio Podcast atau Presentasi oleh **NotebookLM**.

**ðŸ”§ Tech Stack Standar Course (OverCode Stack):**
Seluruh praktik dalam course ini akan diinstruksikan kepada AI menggunakan standar _tech stack_ industri modern:

- **Core Frontend:** React + Vite + TypeScript.
- **Styling:** CSS & Tailwind CSS.
- **Backend/Database:** Supabase (Untuk Project Level 2 & 3).
- **Media Storage:** Cloudinary / ImageKit (Khusus Project Level 3).

---

## ðŸ“Œ Pertemuan 1: Fondasi & "Senjata Tempur" Vibe Coder

_Misi: Memahami konsep Vibe Coding dan menyiapkan environment._

- **Bab 1: Apa itu Vibe Coding? (Mindset Shift)**
  - Subbab 1.1: Literasi & Kemandirian Digital (Kemerdekaan untuk Berkreasi).
  - Subbab 1.2: Tiga Pilar Coding (Tradisional vs AI Assisted vs Vibe Coding).
- **Bab 2: Persiapan "Senjata Tempur"**
  - Subbab 2.1: Analogi Alat: GitHub sebagai "Gudang" dan IDE sebagai "Pabrik".
  - Subbab 2.2: Panduan Registrasi Akun (Pembuatan Email Khusus, Daftar GitHub).
  - Subbab 2.3: Instalasi dan Pengenalan Antigravity IDE (Asisten AI kita).
- **FAQ (Sering Ditanyakan):** "Apakah laptop spesifikasi rendah/jadul bisa dipakai untuk Vibe Coding dengan Antigravity IDE?"
- **Ringkasan Materi Pertemuan 1**

---

## ðŸ“Œ Pertemuan 2: Fondasi UI Modern (React & Tailwind CSS)

_Misi: Mengerti fondasi penyusunan UI modern dan memberikan instruksi desain ke AI._

- **Bab 1: Anatomi Web Modern (Analogi Tubuh Manusia)**
  - Subbab 1.1: Komponen React sebagai Tulang/Rangka bongkar-pasang.
  - Subbab 1.2: Tailwind CSS sebagai Kulit/Pakaian instan.
  - Subbab 1.3: Mengapa kita memilih TypeScript? (Agar AI lebih jarang berhalusinasi).
- **Bab 2: Seni Berbicara dengan AI (Prompt Engineering Dasar)**
  - Subbab 2.1: Struktur Prompt yang Baik (Konteks Tech Stack + Instruksi Spesifik).
  - Subbab 2.2: Meminta AI membuat kerangka UI awal menggunakan Vite & React.
  - Subbab 2.3: Meminta AI memberikan sentuhan warna, _margin_, dan visual dengan _Tailwind CSS_.
- **FAQ (Sering Ditanyakan):** "Saya belum pernah dengar React atau Tailwind, apakah saya harus menghafal kodenya?"
- **Ringkasan Materi Pertemuan 2**

---

## ðŸ“Œ Pertemuan 3: "Mesin Waktu" & Kontrol Versi (Git & GitHub)

_Misi: Mengamankan kode di Cloud agar tidak hilang jika terjadi error fatal._

- **Bab 1: Mengapa Kita Butuh Mesin Waktu?**
  - Subbab 1.1: Analogi "Save Game" di konsol game vs _Git Commit_.
  - Subbab 1.2: Bahayanya mengandalkan fitur _Undo_ (Ctrl+Z) konvensional.
- **Bab 2: Sinkronisasi ke Cloud (GitHub)**
  - Subbab 2.1: Memahami alur kerja: _Edit -> Commit -> Push_.
  - Subbab 2.2: Cara menyuruh AI melakukan _Push_ ke GitHub secara otomatis.
- **FAQ (Sering Ditanyakan):** "Apakah kode rahasia saya di GitHub aman dan tidak dicuri orang?"
- **Ringkasan Materi Pertemuan 3**

---

## ðŸ“Œ Pertemuan 4: Rilis ke Publik! (Deployment)

_Misi: Mengubah web yang jalan di laptop menjadi web yang bisa diakses dunia._

- **Bab 1: Konsep Deployment (Penerbitan)**
  - Subbab 1.1: Analogi merilis naskah buku ke toko buku.
  - Subbab 1.2: Perkenalan Vercel & Netlify (Layanan Hosting Instan).
- **Bab 2: Proses Eksekusi Deployment**
  - Subbab 2.1: Cara menghubungkan repositori GitHub ke Vercel/Netlify.
  - Subbab 2.2: Menikmati "Keajaiban" Deployment dalam 1 Menit.
  - Subbab 2.3: Strategi membagikan _link_ perdana ke kerabat (Validasi Sosial).
- **FAQ (Sering Ditanyakan):** "Apakah Vercel/Netlify ini selamanya gratis?"
- **Ringkasan Materi Pertemuan 4**

---

## ðŸ“Œ Pertemuan 5: Web Statis Menjadi "Hidup" (Database/Supabase)

_Misi: Memahami konsep penyimpanan data (Backend-as-a-Service)._

- **Bab 1: Keterbatasan Web Statis**
  - Subbab 1.1: Mengapa web kita belum bisa menyimpan data form atau _login_?
  - Subbab 1.2: Analogi Brankas Penyimpanan Data (Database).
- **Bab 2: Berkenalan dengan Supabase (BaaS)**
  - Subbab 2.1: Pembuatan Project di Supabase.
  - Subbab 2.2: Memahami Pengaturan Tabel Dasar (Baris & Kolom).
  - Subbab 2.3: Cara memberikan _API Key_ ke AI agar web kita bisa tersambung ke brankas.
- **FAQ (Sering Ditanyakan):** "Jika tabel datanya terhapus, bisakah dikembalikan?"
- **Ringkasan Materi Pertemuan 5**

---

## ðŸ“Œ Pertemuan 6: Fitur Lanjutan (File Storage & API)

_Misi: Menambah kompleksitas aplikasi (Upload gambar/file untuk Proyek Level 3)._

- **Bab 1: Media Storage vs Database**
  - Subbab 1.1: Kenapa gambar/video tidak boleh disimpan langsung di dalam Database?
  - Subbab 1.2: Pengenalan Cloudinary / ImageKit (Gudang Media Khusus).
- **Bab 2: Integrasi Fitur Upload**
  - Subbab 2.1: Konsep API (Jembatan komunikasi antar aplikasi/sistem).
  - Subbab 2.2: Prompt tingkat lanjut untuk menyuruh AI merakit fitur _Upload Image_.
- **FAQ (Sering Ditanyakan):** "Bagaimana jika _storage_ gratisnya penuh? Apakah web saya mati?"
- **Ringkasan Materi Pertemuan 6**

---

## ðŸ“Œ Pertemuan 7: Jurus Rahasia Detektif (Troubleshooting & Debugging)

_Misi: Membangun mental baja saat menghadapi error layar merah._

- **Bab 1: Error Itu Wajar, Bukan Kiamat**
  - Subbab 1.1: Mengubah _mindset_: Error adalah cara komputer memberi petunjuk, bukan marah.
  - Subbab 1.2: Cara menemukan dan membaca pesan _error_ (Console Browser).
- **Bab 2: Meminta AI Menjadi "Montir" Pribadi**
  - Subbab 2.1: Teknik _Copy-Paste Error Log_ yang benar ke dalam kotak obrolan AI.
  - Subbab 2.2: Bahaya "Halusinasi AI" (Apa yang harus dilakukan jika AI berputar-putar memberi solusi salah).
  - Subbab 2.3: Teknik _Rollback_ (Kembali ke _Save-an_ lama) jika kode sudah hancur berantakan.
- **FAQ (Sering Ditanyakan):** "AI saya tiba-tiba memberikan kode yang malah bikin web putih (_blank_), salah siapa?"
- **Ringkasan Materi Pertemuan 7**

---

## ðŸ“Œ Pertemuan 8: Persiapan Demonstrasi (Showcase Day)

_Misi: Finalisasi project dan melatih presentasi ala Tech Founder._

- **Bab 1: Pemolesan Terakhir (Polishing)**
  - Subbab 1.1: _Hunting Bugs_ (Pengecekan cacat fitur terakhir).
  - Subbab 1.2: _Tweaking_ kosmetik (Merapikan teks, warna, jarak spasi/margin).
- **Bab 2: _Storytelling_ & Presentasi Produk**
  - Subbab 2.1: Menyusun narasi presentasi: "Masalah apa yang dipecahkan oleh web saya?"
  - Subbab 2.2: Demonstrasi interaktif (Live Tour) _project_ di depan kelas.
  - Subbab 2.3: Selebrasi kemerdekaan/kemandirian digital!
- **FAQ (Sering Ditanyakan):** "Apa langkah lanjutan setelah lulus dari kelas ini?"
- **Ringkasan Materi Pertemuan 8**
