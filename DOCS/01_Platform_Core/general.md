# OverCode: B2B2C Educational Marketplace & Tutor Companion

Dokumen ini mendefinisikan visi, misi, dan identitas utama dari platform **OverCode**. Platform ini berevolusi dari sekadar aplikasi kursus tunggal menjadi sebuah **Marketplace Edukasi & SaaS (Software as a Service) Pendamping Tutor**.

## 1. Identitas Brand: OverCode

- **OverCode** bertindak sebagai "Penyedia Infrastruktur" (Ibarat gedung _mall_ atau ruko komersial).
- Platform ini memfasilitasi dua pihak utama:
  1. **Teacher (Mitra/Tutor):** Sebagai _Tenant_ (Penyewa Ruko) yang mengelola bisnis les/mengajar mereka sendiri secara independen.
  2. **Student (Murid):** Sebagai Konsumen yang datang untuk mencari ilmu dan bergabung ke dalam kelas (_Basecamp_) milik guru spesifik.

## 2. Problem (Latar Belakang Masalah)

Banyak guru, tutor _freelance_, atau bimbingan belajar skala kecil hingga menengah memiliki metode pengajaran _offline/live_ yang sangat bagus. Namun, mereka seringkali terjegal oleh masalah administrasi:

1. **Pendistribusian Materi yang Berantakan:** Materi PDF, video, dan tugas seringkali hanya dikirim via grup WhatsApp, sehingga mudah hilang dan sulit dilacak.
2. **Absensi & Kedisiplinan:** Sulit melacak secara sistematis siapa murid yang bolos dan siapa yang berhak mendapatkan materi tahap selanjutnya.
3. **Pencarian Murid (Acquisition):** Sulit bagi tutor independen untuk mempromosikan kelas mereka tanpa adanya sebuah "Katalog" (Etalase) terpusat.

Di sisi lain, platform _EdTech_ raksasa yang ada saat ini (seperti Udemy) hanya fokus pada _Video Pre-Recorded_, sehingga tidak mengakomodasi guru-guru yang metode utamanya adalah **Tatap Muka (Live Class / Flipped Classroom)**.

## 3. Solusi & Tujuan Platform

**OverCode** hadir untuk menjembatani celah tersebut dengan menawarkan model **Tenant Basecamp Isolation**:

1. **Marketplace Discovery:** Memberikan ruang etalase berupa **Study Fields** (Kategori Kelas seperti Vibe Coding, Scratch, English) agar murid mudah menemukan kelas yang sesuai dengan minat mereka.
2. **Basecamp Otonom:** Setelah guru mendaftar, mereka mendapatkan _Workspace/Basecamp_ pribadi. Guru bebas menyusun kurikulum, mengunggah _asset_, dan mengelola _database_ muridnya sendiri **tanpa tercampur** dengan data guru lain, meskipun mereka berada di kategori mata pelajaran yang sama.
3. **Live Class Assistant:** Platform tidak membakar uang untuk membangun fitur Video Call sendiri. Sebaliknya, OverCode bertindak sebagai _Command Center_ di mana guru bisa menautkan link eksternal (Zoom/GMeet), dan setelah kelas selesai, guru bisa mencentang absensi (_Live Attendance Gating_) untuk membuka materi bagi murid yang hadir.

## 4. Arsitektur Bisnis

Model operasi platform mengikuti skema B2B2C:

- **Admin (Pemilik Platform):** Mendaftarkan _Study Fields_ (Katalog Utama) dan men- _generate_ link undangan sakti untuk para guru (Mitra).
- **Teacher (Mitra):** Membuat kelas, menyusun kurikulum, menempelkan _link_ tatap muka, dan memberikan _Enrollment Code_ (Kode Gabung) kepada murid-muridnya.
- **Student (Konsumen):** Mendaftar ke platform, mencari _Study Fields_ yang diminati, dan memasukkan _Enrollment Code_ untuk mengunci dirinya ke dalam _Basecamp_ milik guru tertentu.

## 5. Nilai Jual Utama (USP)

- **Absolute Data Isolation:** Data murid dan materi guru 100% terisolasi (Aman dari _cross-contamination_ antar tutor).
- **Flipped Classroom Ready:** Sistem _Double-Lock_ (Anti-Skip Video & Attendance Gating) yang memaksa murid untuk belajar materi dasar sebelum hadir di pertemuan tatap muka.
- **Cost-Effective:** Beban server sangat ringan karena proses _video conferencing_ diserahkan kepada _tools_ eksternal terbaik di kelasnya (Zoom/Teams).
