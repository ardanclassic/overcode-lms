# Silabus Utama & Pembelajaran Komprehensif (OverCode Academy)

Dokumen ini adalah Silabus Induk (Buku Putih Kurikulum) yang merinci perjalanan transformasi peserta dari seorang "Awam" menjadi "Independent Vibe Coder" dalam 8 pertemuan.

Silabus ini dirancang sedemikian rupa untuk berpegang teguh pada **Visi (Mendemokratisasi pembuatan perangkat lunak)** dan **Tujuan Utama (Memangkas kurva belajar yang mengintimidasi)**.

> **ðŸ”§ Standar Tech Stack Course (OverCode Stack)**
> Seluruh kurikulum dan instruksi _prompt_ di kelas ini dirancang menggunakan arsitektur _web modern_ yang paling stabil dan paling dipahami oleh AI:
>
> - **Core Frontend:** React + Vite + TypeScript (TS).
> - **Styling:** CSS & Tailwind CSS.
> - **Backend/BaaS:** Supabase (Diwajibkan untuk Project Level 2 & 3).
> - **Media Storage:** Cloudinary / ImageKit (Khusus Project Level 3).

---

## ðŸ“Œ Fase 1: Penghancuran Mental Block (Pertemuan 1-2)

_Tujuan Fase: Menghilangkan rasa takut peserta terhadap layar gelap penuh kode dan membuktikan bahwa mereka bisa mengendalikan komputer dengan bahasa manusia._

### Pertemuan 1: Fondasi Vibe Coder & "Senjata Tempur"

**Fokus Utama:** Meruntuhkan _mental block_ dan menyiapkan _environment_ kerja standar industri (tanpa harus ngoding).

- **Topik Pembelajaran:**
  1. Pengenalan Esensi Literasi & Kemandirian Digital.
  2. Tiga Pilar Coding: _Vibe Coding_ vs _AI Assisted Coding_ vs _Traditional Coding_.
  3. Pembuatan "Pabrik" & "Gudang": Registrasi GitHub dan Instalasi Antigravity IDE.
  4. Perkenalan Antarmuka (UI): Mengapa layar gelap (IDE) tidak semenakutkan yang terlihat.
- **Tugas Praktik:** Berhasil melakukan konfigurasi awal dan melakukan _chatting_ sapaan pertama dengan AI di dalam Antigravity.
- **Indikator Keberhasilan:** Peserta tidak lagi panik saat membuka _code editor_.

### Pertemuan 2: Fondasi UI Modern (React, Tailwind & Struktur)

**Fokus Utama:** Memahami logika struktur web modern agar peserta paham apa yang AI hasilkan. Penggunaan _Tech Stack_ modern sangat krusial untuk mengurangi halusinasi AI.

- **Topik Pembelajaran:**
  1. Pengenalan Tech Stack Standar: **React, Vite, TypeScript, dan Tailwind CSS**.
  2. Analogi Anatomi Web Modern: Komponen React (Rangka bongkar-pasang) dan Tailwind CSS (Pakaian Instan).
  3. Formula Prompt Engineering: Menyuruh AI membuat komponen UI (contoh: Navbar) dengan _styling_ Tailwind.
- **Tugas Praktik:** Meminta AI merakit satu _Landing Page_ statis (Halaman Profil Pribadi atau Portofolio) menggunakan React & Tailwind.
- **Indikator Keberhasilan:** Peserta mampu mengenali mana file komponen React (`.tsx`) dan berhasil menyuruh AI mengubah warna _background_ web menggunakan Tailwind CSS.

---

## ðŸ“Œ Fase 2: Mandiri di Udara (Pertemuan 3-4)

_Tujuan Fase: Membekali peserta dengan kemampuan untuk mengamankan karya mereka dan menampilkannya ke dunia nyata (publik)._

### Pertemuan 3: "Mesin Waktu" (Version Control / Git)

**Fokus Utama:** Mengajarkan cara menyimpan kode di awan agar aman dari _error_ fatal.

- **Topik Pembelajaran:**
  1. Mengapa "Ctrl+Z" (Undo) konvensional tidak cukup untuk merakit _software_?
  2. Analogi "Save Game": Mengenal _Git Commit_ dan _Push_.
  3. Cara menginstruksikan AI untuk melakukan _Push_ ke GitHub secara otomatis.
- **Tugas Praktik:** Melakukan 3x _Commit_ dan sukses melihat kodenya tersimpan di _repository_ GitHub.
- **Indikator Keberhasilan:** Peserta paham bahwa _error_ sefatal apapun bisa dikembalikan ke versi sebelumnya dengan mudah.

### Pertemuan 4: Rilis ke Publik! (Deployment)

**Fokus Utama:** Akselerasi ide bisnis; mengubah kode lokal di laptop menjadi tautan (URL) yang hidup di internet.

- **Topik Pembelajaran:**
  1. Konsep _Hosting_ & Domain (Analogi menyewa ruko untuk buka toko).
  2. _One-Click Deployment_: Menyambungkan GitHub ke Vercel atau Netlify.
  3. _Continuous Integration (CI)_: Mengapa web akan _update_ otomatis saat kode diubah?
- **Tugas Praktik:** Web statis dari Pertemuan ke-2 kini sudah _live_ dan bisa diakses lewat HP masing-masing.
- **Indikator Keberhasilan:** Peserta berhasil mengirimkan _link_ web buatan mereka sendiri ke grup WhatsApp kelas atau keluarga.

---

## ðŸ“Œ Fase 3: Merakit "Otak" Aplikasi (Pertemuan 5-6)

_Tujuan Fase: Mengangkat level peserta dari pembuat "Brosur Digital (Web Statis)" menjadi pembuat "Aplikasi Fungsional (Web Dinamis)"._

### Pertemuan 5: Memori & Data (Database BaaS)

**Fokus Utama:** Membuat web bisa menyimpan dan menampilkan data menggunakan Supabase.

- **Topik Pembelajaran:**
  1. Keterbatasan Web Statis vs Kehebatan Web Dinamis.
  2. Setup Supabase: Membuat Proyek, Tabel (_Table_), dan Kolom (_Column_).
  3. Menyerahkan _Anon Key_ Supabase ke AI agar AI bisa membuatkan jembatan koneksinya (JavaScript).
- **Tugas Praktik:** Membuat fitur _Guestbook_ (Buku Tamu) atau Form Kontak sederhana yang datanya masuk ke tabel Supabase.
- **Indikator Keberhasilan:** Saat peserta menekan "Submit" di web, datanya muncul di _dashboard_ Supabase.

### Pertemuan 6: Fitur Lanjutan (File Storage & Keamanan)

**Fokus Utama:** Memperkaya fitur aplikasi untuk finalisasi _Minimum Viable Product_ (MVP).

- **Topik Pembelajaran:**
  1. Mengapa gambar tidak boleh disimpan di Database?
  2. Integrasi Layanan _Storage_ (Cloudinary / ImageKit / Supabase Storage).
  3. _Prompt_ Kompleks: Menyuruh AI merangkai HTML, CSS, JavaScript, dan API Key secara bersamaan.
- **Tugas Praktik:** Menambahkan fitur "Upload Foto" pada project dari Pertemuan 5.
- **Indikator Keberhasilan:** Sistem _upload_ gambar berjalan sempurna tanpa membuat _website crash_.

---

## ðŸ“Œ Fase 4: Eksekusi MVP & Mental Detektif (Pertemuan 7-8)

_Tujuan Fase: Pendewasaan pola pikir agar peserta siap menghadapi dunia nyata yang penuh dengan "Error"._

### Pertemuan 7: Jurus Rahasia Detektif (Troubleshooting)

**Fokus Utama:** Menciptakan ketahanan mental (_Resilience_) saat aplikasi hancur atau _blank putih_.

- **Topik Pembelajaran:**
  1. Error itu Komunikasi: Cara membaca pesan merah di _Console Browser_.
  2. Memerintah AI sebagai Montir: Cara memberi umpan (_feeding_) pesan _error_ ke Antigravity agar diperbaiki secara presisi.
  3. Mitigasi "Halusinasi AI": Apa yang harus diucapkan saat AI memberikan kode perbaikan yang _ngawur_.
- **Tugas Praktik:** Menemukan _bug_ (cacat) pada Final Project masing-masing dan menyuruh AI memperbaikinya secara mandiri.
- **Indikator Keberhasilan:** Peserta tidak langsung panik saat melihat layar merah, melainkan refleks men-_copy-paste_ error tersebut ke AI.

### Pertemuan 8: Hari Kelulusan (Showcase & Demo Day)

**Fokus Utama:** Memvalidasi kemandirian digital peserta melalui presentasi karya.

- **Topik Pembelajaran:**
  1. Pemolesan kosmetik UI/UX (_Tweaking margin, padding_, dan _font_).
  2. _Storytelling_: Cara mempresentasikan MVP di depan umum (Menjawab: "Masalah apa yang dipecahkan aplikasi ini?").
- **Tugas Praktik:** Demonstrasi Live (Presentasi Final Project) di kelas Zoom.
- **Indikator Keberhasilan:** Kelulusan 100%. Peserta keluar dari _course_ dengan sebuah produk yang siap pakai, membuktikan bahwa "Barrier IT" sudah berhasil diruntuhkan sepenuhnya oleh OverCode.
