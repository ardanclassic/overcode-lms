# Rancangan UI/UX: Teacher Dashboard (Tenant Basecamp)

Dokumen ini merinci fitur, tata letak, dan alur kerja _screen_ khusus untuk Pengajar (Teacher View) pada platform **OverCode**. Layar ini adalah "Kerajaan/Basecamp" pribadi milik Guru, tempat mereka meracik kurikulum mandiri, menyisipkan _Link Live Class_, memantau progres belajar siswa, serta melakukan penguncian materi (_Attendance Gating_).

---

## 1. Top Navigation Bar & Basecamp Monitor

- **Basecamp Info:** Indikator kelas/basecamp yang sedang aktif (Misal: "Basecamp: Vibe Coding - Kelas Pak Andy").
- **Live Class Schedule:** Jadwal sesi tatap muka berikutnya lengkap dengan kolom _input_ untuk menaruh tautan **Zoom / Google Meet** (`meeting_url`).
- **Emergency Links Block:** Akses cepat ke dashboard admin eksternal Supabase, Vercel console, dan akun GitHub organisasi pengajar untuk membantu kendala teknis siswa dengan cepat.

---

## 2. Main Dashboard Split-Screen Layout

Layar pengajar dibagi menjadi area pemandu kelas (kiri) dan area manajemen siswa (kanan) untuk memaksimalkan fokus mengajar.

### Area Kiri: Curriculum Builder & Teleprompter

#### Tab A: Curriculum CRUD & Prep Mode (Persiapan Materi)

Fitur otonom untuk mengelola isi basecamp sebelum kelas dimulai:

- **CRUD Materi Interaktif:** Tombol **"Add Folder"**, **"Add Video/PDF"**, dan **"Add Quiz"**. Guru menyusun materi khusus untuk basecamp mereka sendiri.
- **Hide/Show Submodule:** Tombol visibilitas untuk menyembunyikan materi yang belum siap dari dashboard siswa.

#### Tab B: Interactive Teleprompter (Saat Sesi Mengajar Berlangsung)

Membimbing pengajar langkah-demi-langkah menyampaikan materi tatap muka secara manual:

- **Learning Objectives Checklist:** Daftar centang target penyampaian materi hari ini (Contoh: [ ] _Siswa paham state management_, [ ] _Praktik deploy Vercel_).
- **Interactive Prompt Clipboard:** Tombol salin instan (_Copy to Clipboard_) untuk kode boilerplate yang akan dibagikan saat Live Zoom.

---

### Area Kanan: Student Management & Live Attendance Gating

#### Tab A: Student Management & Attendance Gating (KUNCI AKSES)

Pusat kontrol kehadiran kelas (Zoom/Offline) dan pengunci modul materi:

- **Enrollment Code Generator:** Tombol untuk menghasilkan kode unik (misal: `ANDY-VIBE-99`) yang akan dibagikan guru ke murid via grup WhatsApp agar murid bisa masuk ke Basecamp ini.
- **Live Attendance Controller:**
  Setiap siswa dalam daftar roster basecamp memiliki baris interaktif:
  - _Status Kehadiran Pertemuan Hari Ini:_ Tombol switch/toggle **"Hadir (Verify Attendance)"**.
  - Begitu tombol ini diaktifkan oleh pengajar setelah kelas Zoom selesai:
    1. Status kehadiran siswa ter-update di Supabase.
    2. Sistem akan otomatis **membuka gembok (Unlock)** materi teori penunjang untuk Pertemuan Berikutnya di dashboard siswa tersebut.

#### Tab B: Grading Hub (Penilaian Tugas & Showcase)

- **Quiz Score Board:** Rekapitulasi nilai kuis otomatis siswa per pertemuan.
- **Private Teaching Notes:** Kolom catatan pribadi guru untuk mencatat perkembangan emosional atau kesulitan spesifik siswa tertentu (catatan ini tidak bisa dilihat oleh siswa atau guru lain).

---

## 3. Fitur Broadcast Message

- **Broadcast Message Panel:** Fitur bagi pengajar untuk menuliskan pesan instan yang akan muncul di layar dashboard seluruh siswa _di dalam basecamp mereka_ (misal: _"Tolong semua buka link Zoom sekarang, kelas sudah dimulai!"_).

---

## 4. Pembaruan Fitur Terkini (Updates)

### 4.1 Teaching Playbook (Teacher Theater View)

- **Side Panel Cerdas:** Saat memutar materi (Video/Slide) dalam _Preview Mode_ (`/teacher/course/[id]`), guru kini memiliki panel interaktif (Playbook) yang bisa digeser masuk (_slide-in_) dari sisi kanan tanpa menutupi konten utama.
- Fitur di dalam Playbook meliputi:
  1. **Preparation Checklist:** Daftar centang yang dinamis (React state) untuk mengingatkan _setup_ lingkungan sebelum mengajar.
  2. **Talking Points:** Area statis berisi poin kritis dan panduan bernada motivasi untuk disampaikan ke siswa.
  3. **Private Scratchpad:** Teks area penyimpanan catatan bebas untuk evaluasi mengajar yang dilengkapi tombol "Simpan Catatan" (lengkap dengan _loading animation_). Catatan ini disimpan secara terpisah ke dalam tabel baru `teacher_notes` di Supabase.

### 4.2 Direct Communication (WhatsApp Integration)

- **Kontak WA Siswa:** Pada panel Detail Siswa di rute `/teacher/students`, kini disematkan tombol aksi "Hubungi via WA" tepat di sebelah tombol "Kirim Pesan Sistem".
- Sama halnya dengan dashboard siswa, _button_ ini akan dirender secara kondisional hanya bila nomor WA telah tercatat dalam sistem pendaftaran.

### 4.3 Registrasi Pengajar Spesifik

- Pendaftaran guru (`/register-teacher`) telah dilengkapi _field_ esensial khusus pengajar seperti **Nomor WhatsApp**, **Bidang Keahlian** (Mata Pelajaran), dan **Tautan Portofolio/CV**. Validasi nomor telepon _Required_ juga dijaga konsisten oleh Zod.
