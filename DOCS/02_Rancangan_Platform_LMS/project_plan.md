# Spesifikasi Teknis & Arsitektur Platform B2B2C (LMS-Lite)

Dokumen ini menjelaskan rancangan arsitektur perangkat lunak, konfigurasi _tech stack_, skema database Supabase, manajemen _state_ global Zustand, serta alur bisnis "Tenant Basecamp" (Isolasi Guru) untuk platform **OverCode**.

---

## 1. Arsitektur Bisnis: B2B2C Marketplace & Tutor Companion

Platform ini menggunakan model arsitektur _Multi-Tenant_ di mana:

- **Tenant (Teacher/Tutor):** Menyewa ruang kelas/basecamp di dalam platform. Data kurikulum, materi kelas, dan daftar siswa bersifat **terisolasi mutlak** (tidak bisa dilihat oleh guru lain).
- **Consumer (Student):** Mendaftar ke platform, mencari _Study Fields_ (Kategori Kelas), lalu melakukan proses pendaftaran mandiri (Enrollment) menggunakan _Class Code_ atau Link untuk masuk ke _Basecamp_ guru tertentu.
- **Platform (Admin):** Bertindak sebagai "Agency" pusat yang membuat _Study Fields_ dan mengundang guru-guru independen menggunakan Token Rahasia.

## 2. Konfigurasi Tech Stack & Pustaka (Libraries)

Aplikasi akan dibangun menggunakan arsitektur monolitik modern berbasis awan (_cloud-native architecture_) dengan detail teknologi sebagai berikut:

- **Frontend & Routing:** Next.js (App Router) versi terbaru + TypeScript. Menggunakan Server Components untuk pemuatan materi secara cepat, dan Client Components untuk komponen interaktif.
- **Styling:** Tailwind CSS + Shadcn UI (untuk komponen kartu, dialog, dan tombol premium).
- **State Management (Global):** Zustand. Digunakan untuk menyimpan:
  - _Auth Store:_ Data profil user aktif, token sesi, dan peran (_role_).
- **Backend-as-a-Service (BaaS):** Supabase.
  - _Database:_ PostgreSQL untuk relasi data terstruktur dan isolasi Basecamp (menggunakan Row Level Security).
  - _Authentication:_ Supabase Auth (Integrasi login dengan Email/Token).
- **Media Management (Zero-Storage Policy):** Platform ini **tidak** menampung unggahan file (beban server 0%). Semua aset materi (Video, PDF, Gambar) cukup dimasukkan menggunakan **Tautan/URL eksternal** (YouTube, Google Drive, ImageKit, Cloudflare, dll). Frontend akan merender tautan tersebut menjadi _Embed Player_ (menggunakan `react-player` atau `iframe`).

---

## 3. Alur Flipped Classroom & Live Class Gating

Platform ini **tidak menyediakan fitur Video Call mandiri**. Melainkan bertindak sebagai _Command Center_ untuk _Live Class_ eksternal (Zoom/Google Meet/Offline).

### Mekanisme:

1. **Penyusunan Materi:** Guru menyusun materi PDF/Video menggunakan _Curriculum Builder_.
2. **Penempelan Link Live Class:** Saat membuat _Live Session_, Guru memasukkan `meeting_url` (Link Zoom).
3. **Kehadiran Siswa:** Siswa _login_ ke _Basecamp_ guru, melihat daftar kelas yang akan datang, lalu mengklik tautan Zoom tersebut.
4. **Attendance Gating (Pengunci Materi):**
   - Pertemuan materi minggu ke-2 akan **terkunci**.
   - Setelah Zoom ditutup, Guru masuk ke _Teacher Command Center_ dan menekan tombol **"Verify Attendance"**.
   - Aksi ini akan mengirim pembaruan ke Supabase, yang secara instan membuka gembok materi minggu ke-2 untuk siswa yang hadir.

---

## 4. Skema Database Supabase Aktual (Multi-Tenant)

Berikut adalah ringkasan struktur tabel PostgreSQL yang mendukung isolasi _Basecamp_ guru:

- **`profiles`:** Tabel utama _user_ (Role: Admin, Teacher, Student).
- **`study_fields`:** Katalog Kategori Kelas (misal: Vibe Coding, Scratch, English). Dibuat oleh Admin.
- **`teacher_invitations`:** Sistem token khusus buatan Admin untuk mengundang guru secara aman.
- **`courses`:** (Basecamp/Ruang Kelas Utama). Tabel ini memiliki `owner_id` (Referensi ke `profiles` guru) dan `study_field_id` (Kategori).
- **`course_enrollments`:** Tabel _junction_ yang mengikat `student_id` ke dalam `course_id` milik guru tertentu.
- **`course_items`:** Node materi kurikulum (Video, Kuis, Folder) yang ada di dalam _Basecamp_.
- **`live_sessions` & `live_attendance`:** Tabel yang mencatat kapan kelas _Zoom/Offline_ dimulai, `meeting_url`, dan status kehadiran siswa.

### Keamanan Data (Row Level Security)

Supabase RLS memastikan bahwa:

- Guru **hanya** bisa melakukan CRUD (Create, Read, Update, Delete) pada tabel `courses` dan `course_items` di mana `owner_id = auth.uid()`.
- Guru **hanya** bisa melihat nama siswa yang terdapat di dalam `course_enrollments` miliknya.
