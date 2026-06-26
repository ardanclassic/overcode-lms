# Kurikulum Vibe Coding | Overcode — Format Private / Small Group

> **Brand:** Overcode

### Panduan Lengkap untuk Mentor: Private 1-on-1 & Small Group (3–5 Siswa)

**Target:** Private 1-on-1 atau small group 3–5 siswa
**Durasi per sesi:** 1.5 jam, Tatap Muka
**Pricing:** Small Group (3–5): Rp 80.000/sesi/org · Private 1-on-1: Rp 100.000/sesi/org · Min. 4 sesi

---

## Overview

Kurikulum ini adalah versi **premium** dari program Vibe Coding — dirancang untuk pengalaman paling personal dan mendalam. Mentor bisa memberikan perhatian penuh, menyesuaikan kecepatan secara individual, dan memastikan setiap siswa mendapat hasil maksimal.

Kurikulum ini merupakan **reference utama** dari mana Kurikulum Sekolah dan Kurikulum Online diadaptasikan.

---

## I. Filosofi & Prinsip Dasar

### Premis Utama

Siswa tidak perlu menjadi programmer. Mereka perlu menjadi **builder** — orang yang bisa mengubah masalah nyata menjadi produk digital yang berfungsi, dengan AI sebagai eksekutor.

### Empat Prinsip Inti

| Prinsip                       | Penjelasan                                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| **Problem-First**             | Setiap sesi dimulai dari masalah nyata siswa. Kode adalah alat, bukan tujuan.                  |
| **Ship Early, Iterate Often** | Versi pertama tidak harus sempurna — yang penting bisa jalan. Perbaiki bertahap.               |
| **Direction Over Execution**  | Siswa adalah arsitek, AI adalah eksekutor. Skill di arah, bukan di teknis.                     |
| **Independence as the Exit** | Kursus berhasil bukan saat project selesai — tapi saat siswa bisa lanjut sendiri tanpa mentor. |

### Guide, Not Do

Mentor yang terlalu sering mengambil alih keyboard atau langsung memberikan jawaban adalah mentor yang menciptakan ketergantungan. Setiap kali mengetik untuk siswa, kamu mencuri kesempatan belajar dari mereka.

---

## II. Target Kompetensi Akhir

| Kompetensi                 | Cakupan                                                                  |
| -------------------------- | ------------------------------------------------------------------------ |
| **Computational Thinking** | Mampu memecah masalah kompleks jadi langkah kecil, berpikir dalam sistem |
| **Prompt Engineering**     | Menulis prompt yang presisi, terstruktur, dan kontekstual                |
| **Product Thinking**       | Membuat wireframe, mendefinisikan scope, user testing                    |
| **Technical Literacy**     | Memahami konsep web tanpa harus bisa menulis kode                        |
| **Version Control**        | Commit bermakna, push rutin, rollback jika perlu                         |

---

## III. Materi Fondasi (Wajib, Dikontekstualisasi)

> **Catatan:** Materi fondasi F1–F7 TIDAK diajarkan sebagai modul terpisah. Setiap fondasi diajarkan **tepat saat dibutuhkan** dalam proses build, sesuai konteks project siswa. Ini adalah pendekatan yang sudah tervalidasi — lebih efektif dari ceramah teori panjang.

### Fondasi 1 — Problem Discovery & Project Scoping

**Kapan diajarkan:** Sesi 1, menit 0–15
**Durasi efektif:** ~10 menit

- Teknik "5 Whys" untuk menggali akar masalah
- Problem vs. Solution framing — tulis masalah tanpa menyebut teknologi
- Feasibility check: apakah realistis dalam durasi kursus?
- MoSCoW method: Must Have, Should Have, Could Have, Won't Have

### Fondasi 2 — Computational & Systems Thinking

**Kapan diajarkan:** Organik, saat siswa mulai bertanya "kenapa ini bisa?"
**Durasi efektif:** ~10 menit, organik

- Decomposition: pecah fitur jadi langkah kecil
- Pattern recognition: kenali pola CRUD, form + submit
- Systems thinking: aplikasi = komponen yang saling terhubung
- Analoginya: rumah — ada pondasi, dinding, listrik, air

### Fondasi 3 — Prompt Engineering

**Kapan diajarkan:** Sesi 1, saat siswa akan menulis prompt pertama
**Durasi efektif:** ~10 menit di S1, diperdalam di S2

Anatomi prompt efektif:

```
[KONTEKS PROJECT] Saya sedang membangun aplikasi ...
[YANG DIINGINKAN] Buat komponen form untuk ...
[SPESIFIKASI DETAIL] Form harus punya: input X, input Y, tombol ...
[CONSTRAINT TEKNIS] Gunakan React + Tailwind. Data ke Supabase ...
```

Empat level berpikir sebelum prompt:

1. **Logical** — apa yang sedang dibangun?
2. **Analytical** — apa tujuan utamanya?
3. **Computational** — bagaimana logikanya bekerja?
4. **Procedural** — strategi fitur apa yang dipakai?

Tiga jenis prompt yang harus dikuasai:

- **Build Prompt** — untuk bikin sesuatu dari nol
- **Iterasi Prompt** — "sisanya jangan diubah, hanya bagian X"
- **Debug Prompt** — "Ini errornya: ..., kodenya: ..., yang saya coba lakukan: ..."

### Fondasi 4 — PRD & Wireframing

**Kapan diajarkan:** Sesi 1, setelah Problem Brief siap
**Durasi efektif:** ~10 menit

- PRD mini: nama project, masalah, pengguna, fitur Must Have/Nice to Have, stack, target selesai
- Wireframe kertas: kotak per halaman, isi apa saja
- Aturan: **gambar 10 menit sebelum prompt pertama** di setiap sesi

### Fondasi 5 — Version Control

**Kapan diajarkan:** Sesi 1, setelah halaman pertama berhasil di-generate
**Durasi efektif:** ~10 menit

- GitHub = "Ctrl+Z tanpa batas"
- Workflow: buat repo → commit pertama → commit setiap fitur selesai → push
- Commit message bermakna: "add expense form component" bukan "update"
- Pakai GitHub Desktop (UI visual) untuk siswa non-teknis

### Fondasi 6 — Tool Orientation

**Kapan diajarkan:** Sesi 1, sebelum build pertama
**Durasi efektif:** ~10 menit (demo live)

- Demo Antigravity: build halaman dari nol dalam 5 menit
- Demo Vercel: deploy dari kode ke live URL dalam 3 menit
- Demo Supabase Table Editor (jika project butuh database)
- Demo Claude/ChatGPT: explain kode, brainstorm, debug

### Fondasi 7 — Evaluasi Kritis Output AI

**Kapan diajarkan:** Ritual di setiap sesi — tidak ada slot khusus
**Durasi efektif:** Terintegrasi, ~2 menit per generate

Ritual setiap kali ada output AI:

> "Sebelum kita pakai ini, apa yang perlu kita cek dulu?"

Checklist evaluasi cepat:

- Apakah output melakukan yang diminta?
- Apakah ada bagian yang tidak perlu dan bisa mengganggu?
- Apakah ada hardcode yang seharusnya dinamis?
- Jalankan, klik semua tombol, isi semua form — jangan hanya lihat kode.

---

## IV. Struktur Sesi Universal (2–2.5 Jam)

Berlaku untuk semua jalur dan semua format private.

| Waktu     | Segmen                   | Tujuan                                                                                    |
| --------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| 0–10 mnt  | **Check-in & PR Review** | Apa yang dikerjakan sendiri? Hambatan apa? Bangun kebiasaan kerja mandiri.                |
| 10–20 mnt | **Micro-lesson**         | Satu konsep relevan dengan yang akan dibangun hari ini. Maks 10 menit.                    |
| 20–100 mnt| **Guided Build**        | _Siswa yang pegang keyboard._ Mentor mengarahkan dengan pertanyaan, bukan mengambil alih. |
| 100–130 mnt| **Review & Debug**      | Review hasil build. Siswa yang deskripsikan error ke AI — bukan mentor.                   |
| 130–150 mnt| **Wrap-up & PR**        | Commit ke GitHub. Tentukan PR konkret untuk antar sesi.                                   |

---

## V. Pendekatan Milestone-Driven

Daripada "8 sesi untuk jalur ini", gunakan pendekatan milestone — setiap tahap punya deliverable jelas, jumlah sesi menyesuaikan.

### 4 Milestone Wajib (Semua Project)

| Milestone                       | Deliverable                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| **M1 — Foundation & Setup**     | Problem Brief selesai, PRD tersusun, wireframe done, repo GitHub ada, tools terpasang        |
| **M2 — First Working Version**  | Halaman utama bisa diakses, minimal 1 fitur inti jalan, sudah di-deploy ke URL publik        |
| **M3 — Core Features Complete** | Semua fitur Must Have berjalan, data tersimpan ke database, alur pengguna selesai end-to-end |
| **M4 — Polish, Test & Launch** | Responsif mobile, aplikasi live final, siswa bisa presentasi, panduan maintenance tersedia   |

---

## VI. Jalur 4 Sesi — Website Statis (Private)

**Target output:** Website statis / portfolio personal, live di internet
**Scope:** Tanpa database, tanpa autentikasi, tanpa API
**Stack:** React/Vite + Tailwind + Vercel
**Durasi:** 1.5 jam per sesi

---

### PRA-SESI (H-3 sebelum Sesi 1)

Siswa wajib selesaikan sebelum sesi dimulai:

- [ ] Akun GitHub aktif di github.com
- [ ] GitHub Desktop terinstall
- [ ] Akun Antigravity terdaftar
- [ ] Akun Vercel (pakai GitHub)
- [ ] Laptop: Chrome/Edge terbaru, RAM 8 GB, SSD
- [ ] Gemini Advanced aktif
- [ ] **Problem Brief** 1–2 paragraf: masalah yang mau diselesaikan, untuk siapa, apa yang mau menonjol

> Mentor wajib baca Problem Brief sebelum Sesi 1 untuk mempersiapkan scope dan pertanyaan scoping.

---

### Sesi 1 — Foundation + First Build

**Tujuan Pembelajaran:**
> *"Memahami Problem-First approach, menulis prompt efektif pertama, dan deploy halaman website live ke internet."*

Di akhir sesi ini, siswa akan mampu:

1. Menjelaskan perbedaan coding tradisional vs AI-first development
2. Menulis prompt pertama menggunakan template [KONTEKS] → [YANG DIINGINKAN] → [SPESIFIKASI] → [CONSTRAINT]
3. Membuat repo GitHub, deploy halaman pertama ke Vercel, dan mendapat link live

**Sub-Topics (skala ke 90 menit):**

**1.1 — Problem Recap & Project Scoping (10 menit)**
- Review Problem Brief siswa
- Scope down yang terlalu luas — MoSCoW: Must Have / Should Have / Could Have
- Wireframe kertas 5 menit sebelum prompt pertama

**1.2 — AI-First Development Mindset (10 menit)**
- Demo live: mentor bangun landing page dari prompt dalam 5 menit — tanpa ketik kode
- Reframe: "Kamu arsitek, AI eksekutor."

**1.3 — Anatomi Prompt Efektif (15 menit)**
- Template: [KONTEKS] → [YANG DIINGINKAN] → [SPESIFIKASI] → [CONSTRAINT]
- Tiga jenis prompt: Build Prompt, Iterasi Prompt, Debug Prompt

**1.4 — Guided Build: Halaman Pertama (35 menit)**
- Siswa tulis prompt pertama, iterate 2–3x
- Mentor arahkan dengan pertanyaan

**1.5 — GitHub Setup + Commit + Deploy (10 menit)**
- Buat repo, export kode, commit, deploy ke Vercel

**1.6 — Wrap-up & PR (10 menit)**
- Commit + push. **PR:** "Tambahkan 1 section baru — isi konten nyata."

---

### Sesi 2 — Build Core Pages

**Tujuan Pembelajaran:**
> *"Membangun semua halaman dari PRD dan menguji navigasi antar halaman."*

Di akhir sesi ini, siswa akan mampu:

1. Prompt halaman-halaman berikutnya dengan template yang sudah dipelajari
2. Menguji website secara menyeluruh dan mengidentifikasi error
3. Mengiterate output AI untuk refinement

**Sub-Topics (skala ke 90 menit):**

**2.1 — PR Review: Check Progress (10 menit)**
- Buka link Vercel — lihat hasil PR
- Kalau PR tidak dikerjakan: resolve hambatan dulu

**2.2 — Prompt Iterasi & Refinement (10 menit)**
- Prompt vague vs. spesifik — contoh dari project siswa
- Prompt Iterasi: "sisanya jangan diubah, hanya bagian X"

**2.3 — Guided Build: Sisa Halaman (40 menit)**
- Siswa prompt halaman berikutnya. Commit setiap selesai.
- Debug: siswa baca error, tulis prompt debug sendiri.

**2.4 — Test & Review Bersama (15 menit)**
- Klik semua navigasi. DevTools mobile view.
- Catat yang perlu diperbaiki.

**2.5 — Commit + Push + Wrap-up (15 menit)**
- Push. Buka link live. **PR:** "Isi konten nyata di 2 halaman."

---

### Sesi 3 — Polish & Responsive

**Tujuan Pembelajaran:**
> *"Menyempurnakan tampilan, membuat website mobile-friendly, dan memahami bagaimana memodifikasi output AI."*

Di akhir sesi ini, siswa akan mampu:

1. Memodifikasi tampilan website via prompt iterasi (warna, font, layout)
2. Membuat website tampil baik di mobile (bukan DevTools simulation — test di HP nyata)
3. Mengevaluasi output AI secara kritis

**Sub-Topics (skala ke 90 menit):**

**3.1 — PR Review: Content Check (10 menit)**
- Buka link live. Feedback: apa yang sudah bagus, apa yang perlu diperbaiki.

**3.2 — Modifikasi Output AI (10 menit)**
- Cara baca output Antigravity
- DevTools Inspect untuk preview perubahan
- Prompt: "sisanya jangan diubah, hanya bagian X"

**3.3 — Polish Session (40 menit)**
- Prioritas: (1) responsif mobile, (2) tipografi & warna, (3) konten final
- Siswa perbaiki tampilan, commit setiap perubahan.

**3.4 — Mobile Test: HP Nyata (15 menit)**
- Siswa buka link Vercel di HP sendiri.
- Catat 3 hal yang mengganggu.

**3.5 — Commit + Push + Wrap-up (15 menit)**
- Push. **PR:** "Buka websitemu di HP, catat 3 hal yang masih mengganggu."

---

### Sesi 4 — Final Polish + Launch + Serah Terima

**Tujuan Pembelajaran:**
> *"Menyelesaikan website final, bisa update mandiri tanpa mentor, dan mempresentasikan hasil."*

Di akhir sesi ini, siswa akan mampu:

1. Memperbaiki error final dan memastikan website berfungsi sempurna
2. Update website secara mandiri: prompt → commit → push → lihat hasil live
3. Menjelaskan cara kerja website ke orang lain dalam bahasa awam

**Sub-Topics (skala ke 90 menit):**

**4.1 — Demo oleh Siswa (15 menit)**
- Siswa presentasikan websitenya: "ini halaman utama, fungsinya untuk..."
- Mentor tanya. Bukan formal — obrolan membangun percaya diri.

**4.2 — Final Fix (25 menit)**
- Selesaikan semua catatan.
- Prioritas: error kritis → konten → visual.

**4.3 — Skenario Maintenance: Test Kemandirian (25 menit)**
- Mentor minta perubahan: "coba ubah warna header"
- Siswa kerjakan: prompt → commit → push → cek live
- **Ini tes kemerdekaan — kalau siswa bisa, kursus berhasil.**

**4.4 — Wrap-up & Penutup (25 menit)**
- Commit final. Rayakan.
- Tulis "Panduan Update Website" 1 halaman.
- Review checklist kelulusan. Diskusikan next step.

---

### Checklist Kelulusan Jalur 4 Sesi

- [ ] Website live dan bisa diakses via link Vercel
- [ ] Semua halaman dari PRD ada dan bisa dinavigasi
- [ ] Konten sudah berisi informasi nyata (bukan placeholder)
- [ ] Tampil baik di mobile (test di HP sendiri)
- [ ] Repo GitHub ada dengan minimal 5 commit bermakna
- [ ] Bisa update mandiri: prompt → commit → push → lihat hasil live
- [ ] Punya dokumen "Panduan Update Website" yang ditulis sendiri
- [ ] Bisa jelaskan cara kerja websitenya ke orang lain dalam bahasa awam

---

## VII. Jalur 8 Sesi — App dengan Autentikasi

**Target output:** App dengan login/registrasi — sistem presensi, blog dengan admin panel, dll.
**Stack:** Next.js + Supabase Auth + Supabase DB + Vercel
**Durasi:** 1.5 jam per sesi
**Prinsip:** Siswa sudah punya pemahaman dasar website statis. Fokus di jalur ini: autentikasi, personal data, dan multi-user features.

> **Asumsi:** Siswa sudah menyelesaikan Jalur 4 Sesi atau punya pemahaman dasar yang setara. Jika tidak, tambahkan 1–2 sesi fondasi sebelum jalur ini.

---

### Sesi 1 — Auth Mindset & Database Design (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Memahami kenapa aplikasi butuh autentikasi, dan mendesain struktur data yang mendukung multi-user."*

Di akhir sesi ini, siswa akan mampu:

1. Menjelaskan perbedaan aplikasi publik vs personal
2. Mendesain tabel database dengan kolom user_id
3. Mengaktifkan Supabase Auth dan memahami cara kerjanya

**Sub-Topics (skala ke 90 menit):**

**1.1 — Problem Recap & Auth Context (15 menit)**
- Review project siswa dari Jalur 4 Sesi
- Tanya: "Aplikasi ini siapa yang bisa pakai sekarang?" → "Semua orang." → "Bagaimana kalau kita mau data hanya bisa dilihat oleh pemiliknya?"
- Scope: app ini akan punya login

**1.2 — Anatomi Multi-User App (10 menit)**
- Diagram: Public page vs. Protected page
- Contoh: WhatsApp (kamu lihat chat kamu, bukan chat orang lain)
- Session, cookie, token — dalam bahasa awam

**1.3 — Database Redesign (25 menit)**
- Tambahkan kolom `user_id` ke tabel yang sudah ada
- Demo: Supabase Auth → dapat `user_id` → simpan ke tabel
- Siswa modifikasi tabel di Supabase dashboard

**1.4 — Supabase Auth Setup (30 menit)**
- Aktifkan Supabase Auth di project
- Setup login page dengan template Supabase
- Prompt: "Buatkan halaman login dengan Supabase Auth, email/password"
- Commit

**1.5 — Wrap-up & PR (10 menit)**
- Commit. PR: "Pastikan login page bisa dibuka dan tidak ada error."

---

### Sesi 2 — Login, Signup & Protected Routes (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Mengimplementasikan autentikasi lengkap: signup, login, logout, dan proteksi halaman."*

Di akhir sesi ini, siswa akan mampu:

1. Menghubungkan halaman login dengan database autentikasi
2. Melindungi halaman agar hanya bisa diakses setelah login
3. Menampilkan nama/user info di halaman setelah login

**Sub-Topics (skala ke 90 menit):**

**2.1 — PR Review (10 menit)**
- Cek: login page muncul? Ada error?

**2.2 — Signup Flow (20 menit)**
- Prompt signup form → connect ke Supabase Auth
- Redirect after signup: dari在哪 ke halaman utama
- Empty state: "Kamu belum login" vs "Selamat datang, [nama]"

**2.3 — Protected Routes (25 menit)**
- Apa yang terjadi kalau langsung akses halaman fitur tanpa login?
- Prompt: "Tambahkan redirect ke login jika belum autentikasi"
- Demo: buka incognito, coba akses halaman fitur

**2.4 — User Info Display (20 menit)**
- Tampilkan nama/email user di navbar setelah login
- Prompt: "Ambil data user dari Supabase Auth, tampilkan di navbar"

**2.5 — Logout Flow (10 menit)**
- Tombol logout → clear session → redirect ke landing page

**2.6 — Commit + Wrap-up & PR (5 menit)**
- Commit. PR: "Coba signup, login, logout — pastikan alurnya sempurna."

---

### Sesi 3 — Personal Data: CRUD Terproteksi (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Memastikan setiap user hanya bisa melihat dan mengubah datanya sendiri."*

Di akhir sesi ini, siswa akan mampu:

1. Mengimplementasikan Row Level Security (RLS) di Supabase
2. Membuat dashboard personal: user hanya lihat datanya sendiri
3. Menguji bahwa autentikasi berfungsi end-to-end

**Sub-Topics (skala ke 90 menit):**

**3.1 — PR Review (10 menit)**
- Login/logout flow berfungsi?

**3.2 — Row Level Security (RLS) Intro (15 menit)**
- Demo: tanpa RLS, User A bisa lihat data User B
- Prompt: "Tambahkan policy RLS di Supabase: user hanya bisa SELECT data miliknya sendiri"
- Penjelasan: `auth.uid()` = id user yang sedang login

**3.3 — Personal Dashboard (30 menit)**
- Halaman yang hanya bisa diakses setelah login
- Data yang ditampilkan: hanya data user yang sedang login
- Prompt: "Modifikasi halaman utama agar menampilkan hanya data user yang sedang login"

**3.4 — Full Authenticated CRUD Test (20 menit)**
- Login sebagai User A → buat data → logout
- Login sebagai User B → cek: data User A TIDAK muncul
- Commit

**3.5 — Wrap-up & PR (15 menit)**
- Commit. PR: "Buat 1 data sebagai User A, убедись User B tidak bisa melihatnya."

---

### Sesi 4 — Profile Page & Settings (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Membuat halaman profile/user settings dan memperdalam pemahaman authenticated user."*

Di akhir sesi ini, siswa akan mampu:

1. Menampilkan dan mengedit profil user
2. Mengubah password dan info akun
3. Membuat UX yang jelas saat user belum login vs sudah login

**Sub-Topics (skala ke 90 menit):**

**4.1 — Profile Page Setup (25 menit)**
- Halaman baru: `/profile`
- Prompt: "Buatkan halaman profile user dengan: nama, email (readonly), avatar placeholder"
- Commit

**4.2 — Edit Profile (25 menit)**
- Form edit nama
- Prompt: "Tambahkan form edit nama, update ke Supabase Auth"
- Feedback UI: "Profil berhasil diupdate"

**4.3 — Conditional Rendering (20 menit)**
- Jika belum login: tampilkan "Login untuk akses"
- Jika sudah login: tampilkan dashboard + navbar user
- Prompt refinement iteratif

**4.4 — Wrap-up & PR (20 menit)**
- Commit. Review auth flow keseluruhan. PR: "Pastikan semua halaman memberikan response yang tepat untuk logged-in vs logged-out user."

---

### Sesi 5 — Multi-User Features (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Menambahkan fitur yang melibatkan interaksi antar user: komentar, like, atau shared data."*

Di akhir sesi ini, siswa akan mampu:

1. Mendesain fitur yang membutuhkan interaksi antar user
2. Mengimplementasikan fitur multi-user dengan autentikasi
3. Memahami kapan autentikasi diperlukan dan kapan tidak

**Sub-Topics (skala ke 90 menit):**

**5.1 — Feature Brainstorm (15 menit)**
- Tanya siswa: "Selain menyimpan data personal, fitur apa yang sering kita lihat di app yang butuh login?"
- Contoh: komentar, like/upvote, following, shared lists
- Pilih 1 fitur untuk diimplementasikan

**5.2 — Database Design untuk Multi-User (20 menit)**
- Tabel baru: `comments` / `likes` / `follows`
- Kolom: id, user_id (creator), target_id, content, created_at
- Prompt: "Buatkan tabel baru di Supabase untuk fitur [X]"

**5.3 — Implementasi CRUD Multi-User (40 menit)**
- Generate komponen dengan AI
- RLS: user hanya bisa hapus/edit konten miliknya sendiri
- Semua orang bisa lihat konten semua user

**5.4 — Wrap-up & PR (15 menit)**
- Commit. PR: "Tambahkan 3 entries dari fitur multi-user. Test: apakah semua user bisa melihat?"

---

### Sesi 6 — Notifications & Feedback (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Menambahkan feedback system: konfirmasi, notifikasi, dan empty states yang jelas."*

Di akhir sesi ini, siswa akan mampu:

1. Menambahkan feedback UI saat aksi berhasil/gagal
2. Membuat empty states yang informatif
3. Menggunakan toast/alert notifications

**Sub-Topics (skala ke 90 menit):**

**6.1 — UX Audit (15 menit)**
- Siswa buka app sebagai user baru: ada apa kalau belum ada data?
- Identifikasi: empty states yang perlu diperbaiki

**6.2 — Empty States (20 menit)**
- Prompt: "Tambahkan empty state yang helpful di halaman [X]: 'Kamu belum punya data. Yuk mulai dengan klik tombol di bawah.'"
- Commit per halaman

**6.3 — Success & Error Feedback (25 menit)**
- Toast notification: "Data berhasil disimpan!"
- Error alert: "Ups, ada masalah. Coba lagi."
- Prompt refinement

**6.4 — Final Feature Completion (25 menit)**
- Selesaikan semua fitur Must Have dari PRD
- Mentor rotate: bantu yang stuck

**6.5 — Wrap-up (5 menit)**
- Commit. PR: "Full test: signup → login → buat data → logout → login lagi → cek data masih ada."

---

### Sesi 7 — Polish, Mobile & Final Deploy (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Memoles tampilan, memastikan mobile-friendly, dan memverifikasi semua fitur berfungsi."*

Di akhir sesi ini, siswa akan mampu:

1. Memperbaiki tampilan agar profesional
2. Memastikan semua fitur berfungsi di mobile
3. Melakukan final deployment dan quality check

**Sub-Topics (skala ke 90 menit):**

**7.1 — Mobile Audit (15 menit)**
- Buka app di HP. Catat 3 hal mengganggu.

**7.2 — Polish Session (35 menit)**
- Prioritas: navigasi → tipografi → warna → spacing
- Siswa prompt perbaikan satu per satu. Commit setiap selesai.

**7.3 — Auth Flow Final Test (20 menit)**
- Mentor minta siswa test skenario: "Kamu User A, buat data. Lalu buka di incognito sebagai User B. Apakah data terpisah?"
- Fix jika ada bug

**7.4 — Final Deploy (15 menit)**
- Pastikan Vercel auto-deploy dari GitHub aktif
- Buka URL production. Verifikasi semua fitur jalan.

**7.5 — Wrap-up & PR (5 menit)**
- Commit final. PR: "Mulai persiapkan demo. Apa yang akan kamu tunjukkan dalam 2 menit?"

---

### Sesi 8 — Demo, Portfolio & Graduation (1.5 Jam)

**Tujuan Pembelajaran:**
> *"Mempresentasikan hasil project dan memahami langkah berikutnya."*

Di akhir sesi ini, siswa akan mampu:

1. Mempresentasikan app secara confidence dalam 2–3 menit
2. Menjelaskan fitur utama dan target user
3. Mengidentifikasi 1-2 fitur yang bisa ditambahkan selanjutnya

**Sub-Topics (skala ke 90 menit):**

**8.1 — Demo oleh Siswa (40 menit)**
- Setiap siswa demo 2–3 menit:
  1. "Nama app: ..."
  2. "Target user: ..."
  3. "Fitur utama: ..."
  4. "Demo live: signup → login → buat data → logout → login sebagai user lain → cek data terpisah"
- Mentor + teman tanya. Feedback konstruktif.

**8.2 — Personal Branding (20 menit)**
- Cara menyajikan project ini di CV / portofolio
- Prompt: "Ceritakan dalam 2 kalimat: masalah apa yang kamu selesaikan, teknologi apa yang kamu pakai."
- GitHub README: screenshot + demo link + tech stack

**8.3 — Graduation & Sertifikat (15 menit)**
- Review semua checklist kelulusan
- Terbitkan sertifikat jika criteria terpenuhi

**8.4 — Next Steps (15 menit)**
- "Kamu sekarang bisa bangun app dengan autentikasi. Mau ke mana berikutnya?"
- Opsi: Advanced features (payments, real-time), mobile app, atau project freelance pertama
- Sertifikat

---

### Checklist Kelulusan Jalur 8 Sesi

- [ ] App live dengan URL publik (Vercel)
- [ ] Signup, login, logout berfungsi sempurna
- [ ] User hanya bisa akses data miliknya sendiri (RLS verified)
- [ ] Semua fitur Must Have dari PRD berfungsi
- [ ] Empty states, loading states, error states sudah ada
- [ ] Responsive di mobile (test di HP nyata)
- [ ] GitHub repo dengan minimal 8 commit bermakna
- [ ] Personal branding paragraph dan GitHub README lengkap
- [ ] Bisa demo app dalam 2–3 menit dengan confidence
- [ ] Bisa jelaskan Row Level Security (RLS) ke orang lain

---

## VIII. Strategi Mentoring untuk Private

### Prinsip: Guide, Not Do

| Yang Dihindari                         | Yang Dilakukan                                                     |
| -------------------------------------- | ------------------------------------------------------------------ |
| "Sini biar saya yang ketik"            | "Coba deskripsikan error ini ke AI pakai kata-katamu sendiri dulu" |
| Memberikan solusi sebelum siswa coba   | "Menurutmu, kenapa bagian ini tidak berjalan?"                     |
| Menjelaskan panjang sebelum siswa coba | "Kalau mau minta AI tambahkan fitur ini, promptnya gimana?"        |
| Memperbaiki error tanpa libatkan siswa | "Bagus. Sekarang coba jelaskan ke saya apa yang baru saja dibuat"  |
| Membuat prompt debug untuk siswa       | "Sebelum kita pakai output ini, apa yang perlu kita cek dulu?"     |

### Debug Session 5-Step Workflow

1. **Baca** — minta siswa baca error message keras-keras
2. **Lokasi** — error di file mana, baris berapa? Browser console atau terminal?
3. **Formulasikan ke AI** — siswa yang tulis prompt debug, bukan mentor
4. **Evaluasi Solusi** — baca bersama, "Masuk akal tidak?"
5. **Implement & Verify** — terapkan, test ulang, kalau masih error ulang dari step 1

### Pendekatan Per Tipe Siswa

| Tipe                          | Strategi                                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mudah Frustrasi**           | Pecah task lebih kecil — win setiap 15–20 menit. Celebrate progress sekecil apapun. Akhiri sesi dengan sesuatu yang berfungsi.                     |
| **Terlalu Ambisius**          | Scope creep = risiko utama. Pegang PRD teguh. "Fitur itu bagus, kita catat di wish list." Satu fitur sempurna lebih baik dari lima setengah jalan. |
| **Pasif / Tidak Proaktif**    | PR konkret dan terukur — bukan "lanjutkan yang tadi" tapi "tambahkan komponen X sampai bisa diklik." Gali motivasi di balik project.               |
| **Sudah Punya Background IT** | Sesuaikan kecepatan. Fokus produktivitas: bagaimana AI mempercepat workflow. Ruang eksplorasi mandiri lebih banyak.                                |

---

## IX. Assessment Rubric

| Komponen                  | Belum Cukup                       | Memenuhi                       | Melebihi                              |
| ------------------------- | --------------------------------- | ------------------------------ | ------------------------------------- |
| **Milestone Deliverable** | Error kritis atau belum selesai   | Berfungsi sesuai spec          | Berfungsi + polish + edge case        |
| **Prompt Engineering**    | Prompt ambigu, hasil tidak sesuai | Prompt spesifik, hasil sesuai  | Prompt efisien + iterasi optimal      |
| **Debugging**             | Butuh bantuan mentor              | Bisa debug mandiri dengan AI   | Bisa debug + jelaskan ke orang lain   |
| **Version Control**       | Belum konsisten                   | Commit bermakna, push rutin    | Branching strategy, history rapi      |
| **Kemandirian**           | Butuh instruksi mentor terus      | Bisa lanjut mandiri antar sesi | Bisa mulai project baru tanpa panduan |

### Cara Pakai Rubric

- **Di akhir setiap milestone:** mentor isi bersama siswa (self-assessment + mentor assessment)
- **Untuk laporan sekolah:** rubrik ini jadi dasar laporan progres bulanan
- **Untuk konfirmasi naik tier:** minimal harus "Memenuhi" di semua komponen untuk naik ke jalur berikutnya

---

## X. Dropout & Reschedule Policy

**Minimum komitmen:** 4 sesi di depan (bayar di awal atau per 4 sesi)

**Reschedule:**

- Maks 1x per program, min. 24 jam sebelum sesi
- Jika < 24 jam: sesi tetap dihitung

**Dropout mid-program:**

- Tidak ada refund untuk sesi yang sudah dijalankan
- Jika berhenti sebelum 4 sesi: sisa sesi tidak bisa di-refund
- Jika mentor yang tidak bisa hadir: pengganti atau refund proporsional

**Sesi pengganti:** jika mentor perlu reschedule, offered waktu alternatif dalam 7 hari.

---

## XI. Tanda Siswa Siap Mandiri

- [ ] Bisa mendeskripsikan masalah/fitur baru ke AI tanpa bantuan mentor
- [ ] Tahu cara baca error di browser console
- [ ] Bisa formulasikan debug prompt sendiri
- [ ] Bisa tambah fitur kecil ke project yang sudah ada secara mandiri
- [ ] Aplikasinya live dan berfungsi sesuai tujuan
- [ ] Bisa jelaskan cara kerja aplikasinya ke orang lain dalam bahasa awam
- [ ] Tidak panik menghadapi error — tahu proses yang harus dilakukan
- [ ] Bisa membuat PRD sederhana untuk project berikutnya secara mandiri

---

_— Kurikulum Vibe Coding, Format Private —_
_Versi 1.2 · 2026-06-23_
