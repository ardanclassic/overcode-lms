# Rancangan UI/UX: Student Dashboard (Consumer / Learner View)

Dokumen ini merinci fitur, tata letak, dan alur kerja _screen_ khusus untuk Siswa (Student View) pada platform **OverCode**. Layar ini berfokus pada kemudahan menemukan kelas (Marketplace Discovery), proses Enrollment, dan pengalaman belajar yang terstruktur melalui _Live Class Gating_.

---

## 1. Onboarding & Marketplace Discovery

Berbeda dengan sistem kursus tunggal, siswa di OverCode masuk ke dalam sebuah ekosistem (Marketplace):

- **Explore Study Fields:** Saat pertama kali masuk, siswa disuguhkan dengan "Etalase" Kategori Kelas (misal: Vibe Coding, Scratch, English).
- **Class Enrollment:**
  Untuk mulai belajar, siswa harus bergabung ke _Basecamp_ milik guru tertentu.
  Siswa bisa memasukkan **Enrollment Code** (yang didapat dari Guru mereka via WhatsApp) untuk langsung masuk ke kelas/basecamp spesifik tersebut.

---

## 2. Peta Jalan Kurikulum (Curriculum Roadmap)

Setelah terdaftar di sebuah kelas, siswa masuk ke dalam _Basecamp_ tersebut dan melihat Peta Jalan (Curriculum Tree) yang disusun secara eksklusif oleh guru mereka.

### UI Komponen Peta Jalan:

- Disajikan secara vertikal mirip peta perjalanan (contoh: _Duolingo path_).
- Setiap _node_ mewakili satu pertemuan/modul.
- **Node Aktif:** Berwarna terang dan dapat di-klik.
- **Node Terkunci (Gembok):** Berwarna redup/abu-abu dengan ikon gembok kecil.

---

## 3. Alur Belajar & Live Class Gating

Platform ini menggunakan sistem _Flipped Classroom_, di mana materi terkunci hingga siswa menghadiri _Live Class_:

### Tahap 1: Live Class (Pertemuan Tatap Muka)

- Terdapat _banner_ mencolok di _dashboard_: **"Next Live Class: Pertemuan 2 (Hari Ini, 15:00)"**.
- _Banner_ ini memiliki tombol **"Join Live Class"** yang akan mengarahkan siswa ke URL eksternal (Zoom/Google Meet) yang telah diatur oleh Guru mereka.

### Tahap 2: Pembukaan Akses (Attendance Trigger)

- Materi/Tugas untuk Pertemuan 2 akan tetap **Terkunci** saat kelas berlangsung.
- Setelah kelas Zoom usai, Guru akan memverifikasi kehadiran di _Teacher Dashboard_.
- Melalui _Supabase Realtime_, gembok modul Pertemuan 2 di layar siswa akan terbuka secara ajaib (_auto-refresh_) disertai animasi perayaan kecil (konfeti), menandakan materi penunjang kini bisa diakses.

---

## 4. Materi Penunjang & Media Player

Setelah modul terbuka, siswa bisa mengkonsumsi _asset_ belajar yang disediakan Guru mereka:

- **Video Player:** Pemutar video anti-skip (terintegrasi _Cloudinary/React Player_). Siswa harus menonton video secara utuh (tidak bisa di- _fast forward_ melebihi batas durasi maksimum tontonan mereka).
- **PDF/Slide Viewer:** Komponen untuk membaca dokumen pendukung.
- **Kuis & Pengumpulan Tugas:** Form evaluasi untuk dikerjakan siswa. Nilainya akan langsung masuk ke _Score Board_ milik Guru di _Teacher Dashboard_.

---

## 5. Pembaruan Fitur Terkini (Updates)

### 5.1 Multi-Course Routing & Dashboard

- **Kelas Saya (Course List):** Siswa kini tidak terbatas pada satu kelas. Layar `/student/course` telah diperbarui menjadi daftar kelas/course yang sedang diikuti (Enrolled Courses) dalam bentuk _Grid Card_, lengkap dengan indikator _progress bar_ dan nama instruktur.
- **Dynamic Routing:** Mengklik salah satu kartu kelas akan mengarahkan siswa ke rute kurikulum dinamis spesifik kelas tersebut (`/student/course/[courseId]`).

### 5.2 Direct Communication (WhatsApp Integration)

- **Tombol "Hubungi WA":** Di dalam kartu kelas, siswa kini bisa langsung menghubungi instrukturnya via WhatsApp melalui tombol _redirect_ khusus. Tombol ini bersifat dinamis (hanya muncul jika guru telah mengisi nomor telepon di profil/saat registrasi).

### 5.3 Dynamic Registration Flow

- **Form Pendaftaran Cerdas:** Alur registrasi siswa kini memiliki UI berbasis tahapan yang dinamis. Jika siswa memilih jenjang pendidikan anak usia dini (TK/SD), sistem otomatis meminta pengisian _Nama Orang Tua_ dan _Nomor Telepon Orang Tua_. Untuk jenjang SMP ke atas, pendaftaran berlanjut dengan data personal siswa biasa. Seluruhnya di-handle secara interaktif dan tervalidasi menggunakan Zod.
