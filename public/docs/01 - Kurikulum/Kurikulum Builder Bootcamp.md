# Kurikulum Vibe Coding | Overcode — Builder Bootcamp

> **Brand:** Overcode

### Format Online: 8 Sesi × 2–2.5 Jam

**Target:** Peserta yang sudah menyelesaikan Starter Bootcamp atau punya pemahaman dasar setara
**Harga:** Rp 600.000 / peserta
**Kapasitas:** 10–15 peserta per cohort
**Output akhir:** Web app fungsional dengan database + AI features + live di internet

---

## Overview

Builder Bootcamp adalah kelanjutan natural dari Starter Bootcamp. Di Starter, peserta membangun website statis tanpa database. Di Builder, peserta membangun **aplikasi web yang menyimpan data** — fungsional dan nyata.

Menggunakan struktur 8 sesi dari Codepolitan sebagai backbone, diadaptasi untuk Vibe Coding approach:

- AI sebagai partner, bukan menggantikan thinking
- Problem-First: project nyata dari hari pertama
- Milestone-driven: bukan session-count locked
- Tool stack: React/Vite + Tailwind + Antigravity + Supabase + Vercel

---

## Prerequisites

Sebelum Builder Bootcamp dimulai, peserta diharapkan sudah:

- Punya website statis yang live di Vercel (dari Starter Bootcamp atau setara)
- Paham dasar prompt engineering (template [KONTEKS] → [YANG DIINGINKAN] → [SPESIFIKASI])
- Paham GitHub basics: commit, push
- Bisa evaluasi output AI secara kritis
- Akun Supabase sudah terdaftar

Peserta yang belum punya fondasi ini harus selesaikan Starter Bootcamp dulu sebelum join Builder.

---

## Program Outcomes

Di akhir Builder Bootcamp, peserta akan mampu:

| #   | Outcome                                   | Indikator                                           |
| --- | ----------------------------------------- | --------------------------------------------------- |
| 1   | Membangun aplikasi web dengan database    | CRUD fungsional — Create, Read, Update, Delete data |
| 2   | Mengintegrasikan AI features ke aplikasi  | AI response yang relevant dengan konteks aplikasi   |
| 3   | Mendesain struktur database sederhana     | Tabel, kolom, relasi yang masuk akal                |
| 4   | Deploy aplikasi full-stack ke internet    | URL publik yang bisa diakses siapa saja             |
| 5   | Menulis prompt yang kompleks dan iteratif | Multi-step prompting untuk fitur nyata              |
| 6   | Mengevaluasi dan polish aplikasi          | Mobile-friendly, UX yang usable, error handling     |
| 7   | Mempresentasikan project dengan jelas     | Demo 3 menit ke cohort                              |

---

## Tool Stack

| Tool           | Fungsi                                 | Catatan                     |
| -------------- | -------------------------------------- | --------------------------- |
| React/Vite     | Frontend framework                     | Sudah familiar dari Starter |
| Tailwind CSS   | Styling                                | Sudah familiar dari Starter |
| Antigravity    | AI coding partner                      | Primary tool untuk generate |
| Supabase       | Backend-as-a-service (database + auth) | Primary new tool di Builder |
| Vercel         | Hosting + deployment                   | Sudah familiar              |
| GitHub Desktop | Version control                        | Sudah familiar              |
| Google Sheets  | Progress tracker                       | Mentor use                  |

---

## Milestone Mapping

| Milestone                        | Sesi Target | Deliverable                                   |
| -------------------------------- | ----------- | --------------------------------------------- |
| **M1 — Foundation**              | Sesi 1–2    | Project scoping + wireframe + database design |
| **M2 — First Working Version**   | Sesi 3–4    | Landing page + 1 fitur CRUD berjalan          |
| **M3 — Core Features Complete**  | Sesi 5–6    | Semua fitur Must Have jalan + AI integration  |
| **M4 — Polish, Deploy & Launch** | Sesi 7–8    | App live + polish + demo                      |

---

## Struktur Sesi Universal (2–2.5 Jam)

Berlaku untuk semua 8 sesi Builder Bootcamp:

| Waktu       | Segmen               | Detail                                                                     |
| ----------- | -------------------- | -------------------------------------------------------------------------- |
| 0–15 mnt    | Check-in & PR Review | Review PR dari sesi sebelumnya. 1–2 showcase cepat project peserta.        |
| 15–30 mnt   | Micro-lesson         | 1 konsep baru yang langsung applicable ke project hari ini.                |
| 30–100 mnt  | Guided Build         | Peserta pegang keyboard. Mentor rotate. Sub-topics hari ini dipraktikkan.  |
| 100–120 mnt | Review & Debug       | Review hasil. Error solved bareng. Peserta jelaskan ke AI untuk debugging. |
| 120–150 mnt | Wrap-up & PR         | Commit + push. Tentukan PR konkret untuk antar sesi.                       |

> **Note:** Mentor tidak mengambil alih keyboard. "Guide, Not Do." Jika 3+ peserta stuck di error yang sama → solved secara klasikal di layar.

---

## Sesi 1 — Mindset & Project Scoping

### Tujuan Pembelajaran

> _"Membangun pola pikir AI-first dan memvalidasi ide aplikasi dengan database."_

Di akhir sesi ini, peserta akan:

- Mendefinisikan masalah nyata yang akan diselesaikan aplikasinya
- Mendesain struktur database sederhana (tabel + kolom)
- Menulis PRD mini untuk project Builder

### Sub-Topics

**1.1 — AI-First Development Mindset (20 menit)**

Apa yang BUKAN vibe coding (vs coding tradisional):

| Coding Tradisional         | AI-First Development                  |
| -------------------------- | ------------------------------------- |
| Tulis kode baris per baris | Describe desired outcome ke AI        |
| Debugging manual           | AI debug + manusia evaluasi           |
| Learning curve: syntax     | Learning curve: komunikasi + thinking |
| Months to first project    | Sessions to first project             |

Demo: "Saya mau bangun fitur X. Tanpa ngetik satu baris kode, AI yang generate."

**1.2 — Ideation & Problem Validation (30 menit)**

Teknik validasi ide cepat:

- "Siapa yang punya masalah ini?" — kalau tidak bisa jawab, ide perlu direvisi
- "Apakah solusi digital yang paling tepat?" — kadang analog lebih baik
- "Apa yang sudah ada, dan kenapa masih perlu bikin baru?"

Workshop: Setiap peserta menulis 1 paragraf Problem Brief untuk aplikasi Builder mereka.

Contoh topic aplikasi Builder:

- Pencatatan keuangan personal
- Task/to-do tracker
- Form pendaftaran event
- Book tracker / reading list
- Habit tracker
- Portfolio builder dengan contact form

**1.3 — Database Design Fundamentals (45 menit)**

Supabase = spreadsheet online yang bisa diprogram.

Konsep yang diajarkan:

- **Table** = kategori data (Users, Tasks, Expenses)
- **Column** = atribut data (id, name, amount, date)
- **Row** = 1 record data
- **Primary Key** = ID unik untuk setiap row
- **Data Types** = text, number, boolean, timestamp

Demo live: Mentor buat tabel pertama di Supabase dashboard, connect ke project React.

Workshop: Peserta desain 2–3 tabel untuk aplikasi mereka. Drawn di kertas dulu, baru masuk ke Supabase.

**1.4 — PRD Mini untuk Builder (25 menit)**

PRD mini Builder version:

```
Nama Aplikasi: [Nama]
Problem: [Masalah nyata yang diselesaikan]
Target User: [Siapa yang pakai]
Fitur Must Have (4–6 fitur):
  1. [Fitur utama — CRUD data]
  2. [Fitur kedua]
  ...
Tech Stack: React + Supabase + Vercel
Target Selesai: Sesi 8
```

Peserta submit PRD mini sebelum sesi selesai.

### Homework/PR

1. Buat 2–3 tabel pertama di Supabase (sesuai PRD)
2. Tulis Problem Brief 1 paragraf di Google Docs
3. Install Supabase CLI atau daftar di supabase.com (jika belum)

---

## Sesi 2 — Prompt Engineering for App Development

### Tujuan Pembelajaran

> _"Menguasai prompt engineering untuk membangun fitur aplikasi yang kompleks dan spesifik."_

Di akhir sesi ini, peserta akan:

- Menulis prompt multi-step yang menghasilkan kode fitur lengkap
- Menggunakan prompt iteration untuk refine output
- Connect Antigravity ke project React

### Sub-Topics

**2.1 — Anatomy of App Feature Prompt (30 menit)**

Template prompt untuk fitur aplikasi:

```
[KONTEKS]
Saya sedang membangun aplikasi [nama] menggunakan React + Supabase.
Aplikasi ini untuk [target user] yang mau [use case].

[YANG DIINGINKAN]
Buat komponen React untuk [fitur spesifik].
Contoh: form input dengan validasi, tabel data dari Supabase,
tombol hapus dengan konfirmasi.

[SPESIFIKASI]
- Input fields: [list]
- Behavior: [apa yang terjadi saat submit, error, empty state]
- Styling: [Tailwind classes atau deskripsi visual]
- Koneksi Supabase: [table name, operation (insert/select/delete)]

[CONSTRAINT]
- Tidak pakai library tambahan selain yang sudah ada
- Kode harus production-ready
```

**2.2 — Multi-Step Prompt Chaining (35 menit)**

Untuk fitur kompleks: pecah jadi langkah-langkah kecil.

Contoh: Fitur "Tambah Pengeluaran"

- Prompt 1: Generate form input komponen
- Prompt 2: "Sisanya jangan diubah. Tambahkan validasi: jumlah harus > 0, form tidak boleh kosong."
- Prompt 3: "Sisanya tetap. Connect form ini ke Supabase table 'expenses' — saat submit, insert row baru."
- Prompt 4: "Sisanya tetap. Setelah insert berhasil, kosongkan form dan tampilkan data baru di tabel di bawah."

Demo live: Mentor demonstrasikan full flow dari prompt ke working feature.

**2.3 — Connecting Antigravity to Project (25 menit)**

Langkah-langkah:

1. Generate component di Antigravity
2. Copy kode ke project React lokal
3. Install dependencies jika ada
4. Test di browser
5. Commit ke GitHub

Peserta mengikuti dengan project masing-masing.

**2.4 — Supabase Integration via AI (35 menit)**

Prompt template untuk Supabase operations:

```
[Konteks: table 'expenses' dengan kolom id, amount, category, note, created_at]

"Buat komponen React yang:
1. Menampilkan semua data dari tabel 'expenses' (SELECT)
2. Form untuk tambah data baru (INSERT)
3. Tombol hapus per row (DELETE)
4. Sudah terhubung ke Supabase via @supabase/supabase-js"
```

### Homework/PR

1. Generate 1 fitur utama aplikasi (form input atau data display) dari PRD
2. Connect ke Supabase table yang sudah dibuat di S1
3. Commit + push ke GitHub
4. Share link Vercel preview di grup

---

## Sesi 3 — Landing Page & App Foundation

### Tujuan Pembelajaran

> _"Membuat landing page profesional yang mengarahkan ke fitur utama aplikasi."_

Di akhir sesi ini, peserta akan:

- Membangun landing page dengan Antigravity yang menjelaskan aplikasi
- Navigasi yang menghubungkan landing page ke fitur utama
- Men-deploy versi pertama aplikasi (MVP shell)

### Sub-Topics

**3.1 — Struktur Landing Page untuk App (25 menit)**

Struktur landing page untuk web app (berbeda dengan website statis):

```
Hero Section
  → Judul app + tagline
  → CTA: "Coba Sekarang" / "Mulai Gratis"

Problem-Solution Section
  → Pain point yang diselesaikan
  → Solusi yang ditawarkan

Features Overview (3 fitur utama)
  → Ikon + deskripsi singkat

How It Works (3 langkah)
  → Mulai cepat

Testimonial / Social Proof (jika ada)

Footer
  → Links, contact, credits
```

Demo: Mentor bangun landing page untuk aplikasi contoh (tracker keuangan) dari prompt.

**3.2 — Navigation & Routing (30 menit)**

Multi-page app structure di React:

```
/ (Landing Page)
/app (Fitur utama — setelah login/landing)
/app/[fitur] (Fitur individual)
```

Prompt untuk routing:

```
"Tambahkan React Router. Navigasi di header:
- Logo → ke /
- Fitur → ke /app
- About → ke /about
Code splitting: setiap halaman load component terpisah."
```

**3.3 — App Shell — MVP yang Sudah Jalan (40 menit)**

MVP Shell = landing page + 1 fitur utama yang sudah berfungsi.

Workshop: Peserta bangun MVP shell aplikasi mereka:

1. Landing page ( Antigravity)
2. Header navigation (prompt)
3. 1 fitur CRUD sederhana (dari PR S2)
4. Deploy ke Vercel

**3.4 — First Deploy & URL Sharing (15 menit)**

Deploy MVP shell:

- GitHub → Vercel connect
- Environment variables untuk Supabase
- Live URL

Peserta share URL pertama aplikasi mereka. Mentor celebrate semua first deploy.

### Homework/PR

1. Lengkapi landing page dengan minimal 3 section
2. Navigasi berfungsi ke fitur utama
3. 1 fitur CRUD sudah berjalan
4. Deploy dan share URL
5. Commit + push

---

## Sesi 4 — Web App Structure & Core CRUD

### Tujuan Pembelajaran

> _"Membangun aplikasi web dengan fitur Create, Read, Update, Delete data yang lengkap."_

Di akhir sesi ini, peserta akan:

- Mengimplementasikan semua operasi CRUD untuk fitur utama aplikasi
- Memahami alur data: input → Simpan ke Supabase → Tampilkan ke user
- Menulis error handling untuk empty state dan error state

### Sub-Topics

**4.1 — Create: Form Input Data (30 menit)**

Prompt template:

```
"Buat form React untuk [menambah data ke tabel X].
Form harus punya:
- [list input fields dengan type]
- Validasi: [rules]
- Submit button
- Setelah submit: insert ke Supabase table '[table_name]'
- On success: tampilkan success message + kosongkan form
- On error: tampilkan pesan error yang informatif"
```

Peserta implement untuk fitur utama aplikasi mereka.

**4.2 — Read: Display Data dari Database (30 menit)**

Prompt template:

```
"Tampilkan semua data dari Supabase table '[table_name]'
dalam bentuk [tabel / cards / list].
- Urutkan dari yang terbaru
- Tampilkan [kolom yang relevan]
- Jika data kosong: tampilkan empty state yang informatif
- Loading state: skeleton / spinner saat fetch"
```

**4.3 — Update & Delete: Edit & Hapus Data (30 menit)**

Update prompt:

```
"Tambahkan fitur edit untuk setiap row:
- Icon/button edit di setiap row
- Klik → form pre-filled dengan data existing
- Submit → update row di Supabase
- On success: refresh tampilan"

Delete prompt:
```

"Tambahkan tombol hapus per row:

- Klik → muncul konfirmasi 'Yakin hapus?'
- Confirm → delete row dari Supabase
- On success: refresh tampilan
- On error: tampilkan pesan"

```

**4.4 — Testing & Debugging Bareng (20 menit)**

Mentor berkeliling. Common errors yang mungkin muncul:
- Supabase connection error (API keys salah)
- Type mismatch di form
- Row tidak tampil (RLS policy issue)

Solved secara klasikal.

### Homework/PR

1. Semua operasi CRUD (Create, Read, Update, Delete) sudah berfungsi
2. Empty state dan error state sudah ada
3. Test semua alur: tambah → tampil → edit → hapus
4. Commit + push

---

## Sesi 5 — Database & Backend Integration

### Tujuan Pembelajaran
> *"Mengintegrasikan database Supabase secara mendalam: multiple tables, relations, dan real-time data."*

Di akhir sesi ini, peserta akan:
- Mendesain multiple tables dengan relasi sederhana
- Mengimplementasikan relasi parent-child di aplikasi
- Menggunakan Supabase features tambahan: timestamps, row counts

### Sub-Topics

**5.1 — Multi-Table Design & Relations (35 menit)**

Relasi di database:
- **One-to-Many**: 1 user punya banyak tasks
- **Many-to-One**: setiap task punya 1 category
- Pengalaman langsung: peserta upgrade database design dari S1

Workshop: Peserta analisis fitur utama mereka.
- Tabel utama apa? (expenses, tasks, entries)
- Tabel pendukung apa? (categories, tags)
- Relasinya bagaimana?

Demo: Mentor demonstrasikan one-to-many di Supabase dan cara fetch dengan JOIN.

**5.2 — Real-time Data (20 menit)**

Supabase real-time = ketika data berubah, tampilan otomatis update tanpa refresh.

Prompt:
```

"Tambahkan real-time subscription:

- Saat ada data baru dari user lain → tampilkan langsung
- Saat ada data dihapus → hilangkan dari tampilan
  Gunakan: supabase.channel('table-db')"

```

**5.3 — Query Optimization (20 menit)**

Batasan dan best practice:
- Jangan fetch semua data kalau cukup 10 terbaru
- Gunakan .select() dengan kolom spesifik
- Filter di database, bukan di frontend

Prompt template:
```

"Fetch data dari '[table]':

- Hanya kolom [specific columns]
- Urutkan dari [field] [asc/desc]
- Limit 20 item terbaru
- Tampilkan loading state"

```

**5.4 — User-Specific Data (20 menit)**

Untuk app yang butuh personal data:

Prompt:
```

"Modifikasi query Supabase:

- Filter: WHERE user_id = [current_user_id]
- RLS Policy: user hanya bisa lihat datanya sendiri
- Jika user belum login: tampilkan prompt login"

```

> Note: Authentication akan dibahas lebih dalam di Pro Bootcamp. Di Builder, kita pakai pendekatan "shared device" atau simple user identification (nama/nickname di localStorage) jika perlu.

**5.5 — Mid-Program Check (15 menit)**

Survey singkat mid-program. Mentor review engagement level. Peserta yang stuck: DM personal.

### Homework/PR

1. Database design sudah final (tabel + relasi)
2. Semua fitur CRUD berjalan dengan data yang persistent
3. Real-time atau live refresh sudah aktif (jika relevan)
4. Commit + push

---

## Sesi 6 — AI Integration

### Tujuan Pembelajaran
> *"Mengintegrasikan AI features ke dalam aplikasi untuk meningkatkan kapabilitas dan value bagi user."*

Di akhir sesi ini, peserta akan:
- Mengidentifikasi use case AI yang relevan untuk aplikasinya
- Mengintegrasikan AI response yang contextual ke aplikasi
- Mendesain alur Input → AI Process → Output yang seamless

### Sub-Topics

**6.1 — Jenis AI Integration di App (20 menit)**

Tiga level AI integration:

| Level | Contoh | Complexity |
|-------|--------|------------|
| **1 — AI as Assistant** | Chat help di sidebar, FAQ bot | Simple |
| **2 — AI as Feature** | Smart categorization, auto-tagging, AI summary | Medium |
| **3 — AI as Core** | AI-generated content, smart recommendations | Advanced |

Demo: Mentor demonstrasikan Level 1–2 integration di aplikasi contoh.

**6.2 — AI for Categorization (40 menit)**

Use case: Aplikasi pencatatan keuangan — AI auto-categorize transaksi.

Prompt:
```

"Gunakan API [Claude/GPT]:

- Input: deskripsi transaksi dari user
- Process: AI categorize ke 'Makanan', 'Transportasi', 'Belanja', dll.
- Output: tampilkan kategori + confidence

Gunakan prompt:
'[DESKRIPSI] → categorize ke salah satu: [list kategori]'

```

Workshop: Peserta implement AI categorization di aplikasi mereka.

**6.3 — AI for Content Generation (35 menit)**

Use cases:
- AI-generated description/summary untuk setiap entry
- Smart suggestions berdasarkan history
- Auto-fill field tertentu

Prompt template:
```

"Tambahkan fitur [AI feature]:

- Trigger: [apa yang memicu AI]
- Input: [data dari aplikasi]
- Prompt ke AI: '[prompt template]'
- Output: [bagian UI mana AI ditampilkan]
- Fallback: jika AI error, tampilkan [alternative]"

```

**6.4 — Error Handling untuk AI (15 menit)**

AI bisa salah. Protokol:
1. Selalu tampilkan AI output dengan disclaimer
2. User tetap bisa override/edit hasil AI
3. Error state: "AI tidak bisa memproses saat ini. Coba lagi."
4. Rate limiting: jika terlalu banyak request, queue

### Homework/PR

1. Minimal 1 AI feature terintegrasi di aplikasi
2. AI response contextual (bukan generik)
3. User bisa lihat/edit hasil AI
4. Error handling sudah ada
5. Commit + push

---

## Sesi 7 — Enhancement, Polish & Mobile-First

### Tujuan Pembelajaran
> *"Meningkatkan kualitas aplikasi: mobile-friendly, UX yang usable, dan error handling."*

Di akhir sesi ini, peserta akan:
- Membuat aplikasi tampil baik di mobile (bukan DevTools simulation)
- Menambahkan loading state, empty state, error state yang informatif
- Menyelesaikan semua fitur Must Have dari PRD

### Sub-Topics

**7.1 — Mobile-First Testing (30 menit)**

Aturan: Test di HP sendiri, bukan di DevTools.

Workflow:
1. Buka Vercel URL di Chrome HP
2. Test semua fitur
3. Catat 3 hal yang mengganggu
4. Fix 1 per 1

Common mobile issues:
- Text terlalu kecil
- Touch targets terlalu kecil (button < 44px)
- Horizontal scroll yang tidak perlu
- Form input tidak nyaman di mobile

**7.2 — State Management Polish (30 menit)**

Loading states:
- Skeleton loader saat fetch data
- Spinner di tombol saat submit
- Progress bar untuk operasi panjang

Empty states:
- Ilustrasi + teks: "Belum ada data. Tambahkan yang pertama!"
- CTA jelas: tombol "Tambah Sekarang"

Error states:
- Tidak: "Error occurred"
- Ya: "Gagal menyimpan. Kemungkinan koneksi terputus. Coba lagi atau hubungi [WA]"

**7.3 — UX Enhancement (25 menit)**

Micro-interactions yang bikin app terasa premium:
- Confetti/celebration saat data berhasil disimpan
- Smooth transition antar halaman
- Form validation yang membantu (tidak menghukum)
- Toast notification (popup kecil) untuk feedback

Prompt template:
```

"Tambahkan UX enhancement:

- Saat form berhasil submit: tampilkan toast 'Berhasil!'
  dengan animasi slide-in selama 3 detik
- Saat ada error: toast merah dengan pesan spesifik
- Transisi antar halaman: fade 200ms
- Loading: skeleton cards saat fetch data"

```

**7.4 — Final Feature Completion Push (25 menit)**

Workshop: Semua peserta selesaikan fitur Must Have yang belum selesai.
Mentor rotate. TA pantau grup Tech Help.

### Homework/PR

1. Aplikasi sudah tested di mobile (HP nyata)
2. Semua fitur Must Have dari PRD berfungsi
3. Empty/loading/error states ada di setiap fitur
4. UX enhancement diterapkan di minimal 1 tempat
5. Commit + push final pre-deploy

---

## Sesi 8 — Deployment & Project Showcase

### Tujuan Pembelajaran
> *"Mempublikasikan aplikasi dan mempresentasikan project kepada cohort."*

Di akhir sesi ini, peserta akan:
- Aplikasi live di URL publik yang bisa diakses siapa saja
- Mempresentasikan project dalam format demo 3 menit
- Mendapatkan feedback dari cohort

### Sub-Topics

**8.1 — Final Deployment & Validation (30 menit)**

Deployment checklist:
- [ ] Semua environment variables sudah diset di Vercel
- [ ] GitHub repo up-to-date (push semua perubahan)
- [ ] Vercel auto-deploy triggered
- [ ] Buka URL live
- [ ] Test semua fitur di URL live (bukan localhost)
- [ ] Mobile test di HP via Vercel URL

Common deployment errors:
- Supabase API keys not in env vars
- Redirect rules bermasalah
- Build failed (dependency error)

Solved bareng.

**8.2 — Domain Customization (15 menit) — Opsional**

- Vercel provide free subdomain: [app-name].vercel.app
- Custom domain: beli di Niagahoster/RajaWP (opsional)
- Setup DNS: CNAME record ke Vercel
- Prompt: "Domenasi domain [nama] ke aplikasi ini"

**8.3 — Project Showcase & Demo (60 menit)**

Format demo: 3 menit per peserta. Struktur:

```

MENIT 1 — Context
"Nama saya [X]. Saya bangun [nama app] untuk [target user]
yang punya masalah [problem]."

MENIT 2 — Demo
Live demo di HP/HP emulator:

1. Buka Vercel URL
2. Test 1 fitur utama
3. Test 1 AI feature (jika ada)
4. Test CRUD flow

MENIT 3 — Learning
"Hal paling sulit yang saya pelajari: [X].
Hal yang surprising: [Y].
Next step jika lanjut: [Z]."

```

Mentor berikan feedback singkat setelah setiap demo.

**8.4 — Monetization & Next Steps (20 menit)**

Pengenalan monetization basics ( untuk peserta yang mau lanjut):
- Free + Premium model
- Simple landing page untuk paid features
- Kolaborasi dengan komunitas

Pengenalan Pro Bootcamp path:
- Authentication (login/registrasi)
- User dashboard
- Multi-user features
- Advanced AI integration

**8.5 — Closing & Alumni (15 menit)**

- Sertifikat di-email ke semua peserta
- Invite ke grup Alumni VC
- Referral link diberikan
- Foto cohort bersama (screenshot)

---

## Assessment Rubric — Builder Bootcamp

| Komponen | Belum Cukup | Memenuhi | Melebihi |
|----------|------------|----------|----------|
| **Milestone Deliverable** | Fitur utama tidak berjalan atau error kritis | Semua CRUD berjalan, data tersimpan | Semua CRUD + AI integration berfungsi tanpa error |
| **Database Design** | Tabel belum ada atau tidak masuk akal | Tabel + kolom sesuai kebutuhan app | Relasi antar tabel optimal, indexed |
| **Prompt Engineering** | Prompt generik, hasil tidak sesuai | Prompt spesifik + iterasi yang efektif | Prompt kompleks multi-step, efficient |
| **AI Integration** | Tidak ada atau AI memberikan hallucination | AI feature berjalan contextual | AI memberikan nilai tambah nyata ke user |
| **Deployment** | App tidak bisa diakses publik | App live di URL publik | Custom domain + SSL + tested |
| **Polish & UX** | Mobile broken, empty states tidak ada | Mobile usable + states informatif | UX delightful + micro-interactions |
| **Version Control** | Commit tidak bermakna | Commit per fitur, history rapi | Commit bermakna + branch strategy |
| **Presentation** | Tidak bisa jelaskan alur app | Menjelaskan fitur utama dengan jelas | Demo smooth + bisa jawab pertanyaan |
| **Kemandirian** | Still needs mentor to do everything | Bisa lanjut fitur baru dengan AI | Bisa troubleshoot error tanpa bantuan |

---

## Graduation Criteria — Builder Bootcamp

Sertifikat diterbitkan jika:

- [ ] App live di URL publik (Vercel)
- [ ] Minimal 1 fitur CRUD lengkap (Create + Read + Update + Delete)
- [ ] Database design ada di Supabase
- [ ] Minimal 1 AI feature terintegrasi
- [ ] Mobile-friendly (tested di HP)
- [ ] Commit history bermakna (minimal 8 commit)
- [ ] Demo dilakukan di Sesi 8

---

_— Kurikulum Vibe Coding, Builder Bootcamp (Online) —_
_Based on Codepolitan curriculum structure, adapted for Vibe Coding AI-first approach_
_Versi 1.0 | 2026-06-22_
```
