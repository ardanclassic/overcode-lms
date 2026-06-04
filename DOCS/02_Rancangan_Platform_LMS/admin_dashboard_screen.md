# Rancangan UI/UX: Admin Dashboard (Platform Agency)

Dokumen ini merinci fitur, tata letak, dan alur kerja _screen_ khusus untuk Admin (Pemilik Platform/Agency) pada platform **OverCode**. Admin bertugas sebagai penjaga gerbang (Gatekeeper) yang mengatur katalog kelas dan merekrut mitra pengajar.

---

## 1. Top Navigation & Platform Overview

- **Global Metrics:** Menampilkan total keseluruhan _Study Fields_, total _Teachers_ (Mitra) yang aktif, dan total _Students_ terdaftar di seluruh platform.
- **Quick Actions:** Akses cepat ke pengaturan Supabase dan Manajemen Tagihan.

---

## 2. Study Fields & Teacher Recruitment (Inti Platform)

Panel ini adalah jantung operasional Admin dalam menjalankan model B2B2C Marketplace:

### A. Study Fields (Katalog Mata Pelajaran)

Admin berwenang mendaftarkan "Kategori Kelas" atau katalog utama yang akan tampil di halaman depan platform (Marketplace Discovery).

- **CRUD Study Fields:** Form untuk menambah Kategori baru (Misal: Vibe Coding, Scratch for Kids, English for Business).
- Kategori ini **bukan** berisi materi, melainkan sekadar "Label" yang akan menaungi Basecamp para guru.

### B. Teacher Invitations (Rekrutmen Mitra)

Guru tidak bisa mendaftar bebas; mereka harus diundang oleh Admin.

- **Generate Invite Token:** Admin memilih sebuah _Study Field_ (Misal: Vibe Coding), lalu menekan "Generate Link".
- Sistem akan membuat URL unik yang mengandung token rahasia (Tersimpan di tabel `teacher_invitations`).
- Admin menyalin link tersebut dan mengirimkannya kepada calon Tutor via WhatsApp atau Email.

---

## 3. Platform Monitoring & Moderation

### A. Basecamp / Tenant Oversight

Meskipun data kelas 100% terisolasi untuk Guru, Admin memiliki hak prerogatif (God Mode) untuk mengawasi seluruh aktivitas Basecamp jika terjadi pelanggaran atau sengketa:

- Melihat daftar Basecamp (_courses_) yang saat ini sedang aktif beserta metrik jumlah murid di dalamnya.
- Melihat aktivitas _Live Sessions_ yang dijadwalkan oleh para Guru.

### B. User Management

- Manajemen akun global (Memblokir akses, mengatur ulang kata sandi, mengubah peran pengguna).
- Tabel daftar seluruh pengguna (Teacher & Student) yang mendaftar ke platform.
