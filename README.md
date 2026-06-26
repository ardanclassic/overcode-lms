# OverCode LMS

> **Level Up Your Mind, Code Your Own Reality.**

OverCode adalah sebuah platform **B2B2C Educational Marketplace & Tutor Companion** yang dirancang secara spesifik untuk memfasilitasi kebutuhan tutor independen, guru, atau lembaga bimbingan belajar skala menengah dalam mengelola kelas tatap muka (_Live Class / Flipped Classroom_).

Berbeda dengan platform _EdTech_ konvensional yang berfokus pada _video pre-recorded_, OverCode bertindak sebagai infrastruktur (_Mall/Agency_) yang memberikan ruang otonom bagi setiap pengajar (_Tenant_).

## 🚀 Fitur Unggulan & Konsep Utama

### 1. Tenant Basecamp Isolation

Setiap guru yang bergabung akan mendapatkan _Basecamp_ atau ruang kerjanya sendiri. Data kurikulum, materi, hingga daftar murid bersifat **terisolasi mutlak**. Murid hanya dapat bergabung ke _Basecamp_ tersebut menggunakan _Enrollment Code_ khusus.

### 2. Live Class Assistant & Flipped Classroom

OverCode dirancang sebagai _Command Center_ untuk kelas tatap muka:

- **Zero-Storage Policy:** Tidak ada beban _server_ untuk unggah video. Guru cukup menempelkan tautan (YouTube, Google Drive, Zoom, dll).
- **Attendance Gating:** Materi lanjutan dapat dikunci (di-gembok) dan hanya akan terbuka setelah murid terverifikasi hadir (_Verify Attendance_) pada sesi _live class_ (Zoom/Offline).
- **Double-Lock System:** Memaksa murid untuk menyelesaikan materi fundamental sebelum mereka dapat mengikuti sesi praktik langsung.

### 3. Marketplace Discovery

Menyediakan etalase _Study Fields_ (seperti _Vibe Coding_, _Scratch_, dll) yang memudahkan calon murid untuk mencari dan memilih tutor atau bidang studi yang sesuai dengan minat mereka.

---

## 💻 Tech Stack & Architecture

Platform ini dibangun menggunakan arsitektur _cloud-native_ dengan teknologi terkini:

- **Frontend & Routing:** [Next.js 16 (App Router)](https://nextjs.org/) dengan TypeScript. Server Components untuk _load_ yang cepat & SEO.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Shadcn UI untuk komponen interaktif yang elegan dan premium.
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) untuk mengelola _global state_ (seperti sesi Auth & Role User).
- **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL + Supabase Auth).
  - Menggunakan **Row Level Security (RLS)** untuk memastikan keamanan dan isolasi data antar guru (_Tenant_).
- **Documentation Engine:** Render langsung file Markdown lokal (`DOCS/`) menggunakan `react-markdown` dan `@tailwindcss/typography` untuk modul Partner Overview yang responsif.

---

## 🛠 Panduan Instalasi & Pengembangan

### Prasyarat

- Node.js (v18 atau lebih baru)
- NPM, Yarn, atau PNPM
- Akun & Project Supabase (untuk Database & Auth)

### Menjalankan Proyek Lokal

1. **Kloning Repositori**

   ```bash
   git clone https://github.com/ardanclassic/overcode-lms.git
   cd overcode
   ```

2. **Instalasi Dependensi**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Konfigurasi Environment Variable**
   Buat file `.env.local` di _root_ direktori dan tambahkan kunci Supabase Anda:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Aplikasi dapat diakses melalui `http://localhost:3000`.

---

## 📂 Struktur Dokumentasi

Selain kode sumber, repositori ini memuat direktori `DOCS/` yang sangat krusial:

- `DOCS/01_Platform_Core/`: Latar belakang masalah, visi-misi, dan identitas _brand_.
- `DOCS/02_Rancangan_Platform_LMS/`: Desain arsitektur, spesifikasi _database_, dan _tech stack_.
- `DOCS/v2/`: Playbook operasional, kurikulum detail, dan panduan kemitraan (dapat dibaca langsung melalui _route_ `/overview` di aplikasi web).

---

_Dikembangkan oleh Ardan Classic | OverCode Team 2026_
