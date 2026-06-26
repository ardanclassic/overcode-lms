# Vibe Coding | Overcode — Operations Playbook (Format Private)

> **Brand:** Overcode

### Panduan Operasional Mentor: Private 1-on-1 & Small Group (3-5 Siswa)

**Scope:** Format Private (Small Group 3-5 siswa dan Private 1-on-1)
**Durasi:** 1.5 jam per sesi (Private) | Min. 4 sesi per program
**Pricing:** Small Group: Rp 80.000/sesi/org | Private 1-on-1: Rp 100.000/sesi/org
**Untuk:** Mentor, Partner/Asisten Mentor

---

## Overview

Kurikulum adalah _apa yang diajarkan_. Playbook ini adalah _apa yang mengelilingi kurikulum_ — proses onboarding, komunikasi, teknis setup, sertifikat, dan semua SOP yang membuat format Private berjalan lancar.

Format Private adalah pengalaman paling premium dan personal. Tidak ada cohort untuk ditutupi, tidak ada grup chat besar untuk dikelola. Tapi justru karena itu, setiap detail — dari puntualitas sampai follow-up — lebih terasa.

---

## I. Dua Program Path

### Path A — Private 4 Sesi (Website Statis)

| Item          | Detail                                       |
| ------------- | -------------------------------------------- |
| Sesi          | 4 sesi x 1.5 jam (total 6 jam)               |
| Total/org     | Rp 400.000 (1-on-1) / Rp 320.000 (3-5 org)   |
| Target output | Website statis / portfolio personal, live    |
| Stack         | React/Vite + Tailwind + Vercel               |
| Cocok untuk   | Pemula total, portfolio personal, portofolio |

### Path B — Private 8 Sesi (App dengan Autentikasi)

| Item          | Detail                                            |
| ------------- | ------------------------------------------------- |
| Sesi          | 8 sesi x 1.5 jam (total 12 jam)                   |
| Total/org     | Rp 800.000 (1-on-1) / Rp 640.000 (3-5 org)        |
| Target output | Web app fungsional dengan login (CRUD + Auth)     |
| Stack         | Next.js + Supabase Auth + Supabase DB + Vercel    |
| Cocok untuk   | Yang sudah lewat Path A, atau yang punya dasar IT |

> **Prinsip:** Private itu fleksibel. Tapi MINIMUM 4 sesi. Di bawah itu tidak cukup untuk hasil yang meaningful.

---

## II. Onboarding Process

Onboarding Private berbeda dari Online karena melibatkan orang tua (jika siswa di bawah umur) dan require setup teknis di sisi siswa. Proses ini butuh 3-5 hari sebelum Sesi 1.

### Timeline Onboarding Private

---

#### H+0 — Registrasi Diterima

Segera (maks 2 jam setelah pembayaran):

1. Kirim **welcome message** via WhatsApp personal (bukan grup)
2. Lampirkan invoice
3. Kirim **Technical Setup Guide** (dokumen terpisah)
4. Kirim **Pre-Flight Checklist** (Google Form)

**Welcome Message Template:**

```
Hai [Nama]! Selamat sudah registrasi Vibe Coding Private.

Sebelum Sesi 1, ada beberapa hal yang perlu disiapin:

1. Install tools [link checklist]
2. Isi Pre-Flight Checklist [link Google Form]
3. Tulis Problem Brief [link template] - 1-2 paragraf tentang website/app yang mau kamu bangun

Sesi 1 dimulai [hari/tanggal], [jam]. Lokasi: [online via Zoom / Tatap muka di lokasi].

Aku tunggu ya!
```

---

#### H+1 s/d H-3 — Technical Setup

**Yang harus dilakukan siswa sebelum Sesi 1:**

- [ ] Akun GitHub aktif di github.com
- [ ] GitHub Desktop terinstall
- [ ] Akun Antigravity terdaftar
- [ ] Akun Vercel (pakai GitHub)
- [ ] Gemini Advanced aktif (atau alternatif AI)
- [ ] Problem Brief sudah ditulis

**Mentor Wajib Lakukan:**

- Baca Problem Brief setiap siswa sebelum Sesi 1
- Identifikasi potensi scope creep atau ketidaksesuaian ekspektasi
- Siapkan 2-3 pertanyaan scoping untuk opening Sesi 1
- Jika ada siswa yang belum bisa install tools H-1: prepare 15 menit di awal Sesi 1 untuk bantu setup

**Handling Siswa yang Stuck di Setup:**

- Respons cepat (maks 2 jam) via WhatsApp
- Screen sharing via Zoom/Meet untuk troubleshooting
- Jika tidak bisa solve dalam 1 sesi troubleshooting: offered waktu tambahan sebelum Sesi 1

---

#### H+0 — Sesi 1

- Buka dengan review Problem Brief
- Confirm scope: terlalu luas → scope down; terlalu sempit → expand
- Wireframe kertas 5 menit sebelum prompt pertama
- Ikuti struktur sesi yang sudah ada di Kurikulum Private

---

## III. SOP Setiap Sesi

### Sebelum Sesi

**H-1 (1 hari sebelum):**

- Kirim reminder: "Sesi [N] besok [hari/tanggal], [jam]. Topik: [ringkasan]."
- Minta siswa review PR (Personal Record) dari sesi sebelumnya
- Jika siswa belum push commit dari PR → tanya via WhatsApp

**Persiapan Mentor:**

- [ ] Review progress siswa dari sesi sebelumnya
- [ ] Prepare 2-3 challenge/refinement pertanyaan
- [ ] Siapkan micro-lesson sesuai timeline sesi
- [ ] Test koneksi internet + tools (jika online)

### Saat Sesi

**Struktur sesi 90 menit (Private):**

| Waktu     | Segmen                   | Tujuan                                                                                    |
| --------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| 0–10 mnt  | **Check-in & PR Review** | Apa yang dikerjakan sendiri? Hambatan apa? Bangun kebiasaan kerja mandiri.                |
| 10–20 mnt | **Micro-lesson**         | Satu konsep relevan dengan yang akan dibangun hari ini. Maks 10 menit.                    |
| 20–85 mnt | **Guided Build**         | _Siswa yang pegang keyboard._ Mentor mengarahkan dengan pertanyaan, bukan mengambil alih. |
| 85–90 mnt | **Wrap-up & PR**         | Commit ke GitHub. Tentukan PR konkret untuk antar sesi.                                   |

**Aturan Penting untuk Mentor:**

1. **Guide, Not Do** — Siswa yang pegang keyboard. Jika mentor mengambil alih, siswa kehilangan kesempatan belajar.
2. **Celebrate small wins** — Setiap fitur yang jalan, setiap commit, setiap prompt yang berhasil → dirayakan.
3. **Punctual** — Mulai dan akhiri tepat waktu. Ini membangun trust.
4. **No multitasking** — Jika online, minimize distractions. Siswa Private deserve full attention.

### Setelah Sesi

**Wajib (dalam 24 jam):**

- [ ] Commit catatan progress siswa (ke哪里)
- [ ] Kirim ringkasan sesi + PR ke siswa via WhatsApp

**Ringkasan Sesi Template:**

```
Ringkasan Sesi [N] — [Nama Siswa]

Yang sudah diselesaikan:
- [x] [Fitur/output]

Yang perlu dikerjakan sebelum Sesi [N+1]:
- [ ] [PR detail]

Catatan mentor:
- [Catatan specific untuk siswa ini]

Sesi [N+1]: [hari/tanggal], [jam]
```

---

## IV. Komunikasi & Stakeholder Management

### Untuk Siswa Dewasa (18+)

| Konteks            | Channel             | SLA Respons |
| ------------------ | ------------------- | ----------- |
| Teknis (debugging) | WhatsApp DM         | Maks 24 jam |
| Jadwal/reschedule  | WhatsApp DM         | Maks 4 jam  |
| Progress update    | Kirim di akhir sesi | Langsung    |

### Untuk Siswa Di Bawah Umur

Orang tua adalah stakeholder utama. Mereka yang bayar, mereka yang punya ekspektasi.

**Onboarding Orang Tua (H+0):**

- Kirim pesan perkenalan ke orang tua via WhatsApp
- Jelaskan: (1) apa yang akan dipelajari, (2) hasil yang diharapkan, (3) cara mereka bisa monitor progress

**Pesan Perkenalan ke Orang Tua:**

```
Hai [Nama Orang Tua], saya [Nama Mentor] — mentor Vibe Coding Private untuk [Nama Siswa].

Terima kasih sudah mendaftar. Sebelum Sesi 1, saya mau sharing beberapa hal:

APA YANG DIPELAJARI:
[Deskripsi program — bisa copy dari kurikulum section overview]

HASIL YANG DIHARAPKAN:
Di akhir program, [Nama] akan punya [output spesifik].
Kalian bisa lihat progressnya di: [link progress tracker]

BAGAIMANA BISA MONITOR:
- Saya kirim ringkasan setiap akhir sesi
- Di sesi 4 atau 8, [Nama] akan demo hasilnya ke kalian

TECHNICAL SETUP:
[Nama] perlu install beberapa tools sebelum Sesi 1:
[link checklist]
Saya siap bantu jika ada kesulitan.

Sesi 1 dimulai [hari/tanggal]. Jika ada pertanyaan, langsung chat ya!
```

**Update Periodik ke Orang Tua:**

- Setiap 2 sesi: kirim ringkasan singkat progress
- Jika ada masalah: segera komunikasikan
- Jika siswa ahead of schedule: beri tahu orang tua dan tawarkan acceleration options

### Handling Orang Tua yang Over-Involved

Beberapa orang tua ingin tahu detail setiap sesi. Respon yang tepat:

> "Saya paham keinginan [Nama Orang Tua] untuk monitor progress. Saya kirim ringkasan setiap 2 sesi ya. Jika ada concern spesifik, langsung chat saya."

Jangan: memberikan update per-menit. Ini bukan sekolah formal.

---

## V. Reschedule & Refund Policy

### Reschedule

| Situasi                      | Aturan                                               |
| ---------------------------- | ---------------------------------------------------- |
| Siswa minta reschedule       | Maks 1x per program, min. 24 jam sebelumnya          |
| < 24 jam sebelum sesi        | Sesi tetap dihitung sebagai berjalan                 |
| Mentor yang minta reschedule | Offered waktu alternatif dalam 7 hari, tanpa penalti |
| Emergencies (sakit, urgent)  | Case-by-case, gunakan judgment baik-baik             |

### Refund

| Situasi                           | Policy                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------- |
| Siswa berhenti sebelum sesi 2     | Refund 75% dari total program                                                    |
| Siswa berhenti setelah sesi 2+    | Tidak ada refund — sesi yang sudah berjalan dianggap commitment 已完成           |
| Siswa sakit (dengan surat dokter) | Reschedule tanpa penalti, refund proporsional jika tidak bisa lanjut sama sekali |
| Mentor berhenti mid-program       | Offered mentor pengganti atau refund proporsional                                |
| Program tidak bisa dijalankan     | Refund penuh                                                                     |

---

## VI. Technical Setup — Panduan Lengkap

### Tool yang Perlu Diinstall Siswa

**Sebelum Sesi 1:**

| Tool                 | Purpose                             | Link                               |
| -------------------- | ----------------------------------- | ---------------------------------- |
| Google Chrome / Edge | Browser utama untuk development     | chrome.com / edge.com              |
| GitHub               | Version control repository          | github.com                         |
| GitHub Desktop       | Visual Git client                   | desktop.github.com                 |
| Antigravity          | AI coding tool (atau Vite + Claude) | Antigravity (link mentor kasih)    |
| Vercel               | Deployment platform                 | vercel.com (signup dengan GitHub)  |
| Gemini Advanced      | AI chat untuk debugging/brainstorm  | (sesuaikan dengan tool preference) |

**Jika Antigravity unavailable (escape plan):**

Vite + Claude Code adalah alternatif yang works out of the box:

1. `npm create vite@latest my-project -- --template react`
2. Buka project di VS Code
3. Gunakan Claude Code (claude.ai/code) untuk generate komponen
4. Deploy ke Vercel dengan `vercel --prod`

### Handling Setup Issues

| Masalah                           | Solusi                                                  |
| --------------------------------- | ------------------------------------------------------- |
| Antigravity tidak bisa diakses    | Gunakan Vite + Claude sebagai escape plan               |
| GitHub Desktop error saat install | Unduh ulang dari desktop.github.com                     |
| Vercel tidak connect ke GitHub    | Pastikan GitHub sudah login di browser yang sama        |
| Gemini/AI tool tidak aktif        | Gunakan ChatGPT sebagai alternatif sementara            |
| Laptop slow / RAM kurang          | Kurangi jumlah tabs browser, gunakan lightweight editor |

> **Escape Plan Antigravity:**
> Jika Antigravity unavailable atau down: langsung switch ke Vite + Claude workflow. Tidak ada sesi yang perlu dibatalkan karena masalah tool. Ini adalah contingency plan yang harus mentor know by heart.

---

## VII. Progress Tracking & Reporting

### Per Siswa (Private Tracker)

Buat satu Google Sheets per siswa:

| Kolom              | Isi                                |
| ------------------ | ---------------------------------- |
| Nama Siswa         |                                    |
| Program            | Private 1-on-1 / Small Group       |
| Path               | 4 Sesi / 8 Sesi                    |
| Sesi 1             | [Tanggal] - [Output] - [Catatan]   |
| Sesi 2             | [Tanggal] - [Output] - [Catatan]   |
| ...                | ...                                |
| Milestone Terakhir | M1 / M2 / M3 / M4                  |
| Sertifikat Terbit  | [Ya / Belum] - [Tanggal]           |
| Next Program       | [None / Path B / Builder Bootcamp] |

### Progress Update ke Orang Tua (Setiap 2 Sesi)

```
Progress Update Vibe Coding — [Nama Siswa] — Sesi [N]

MILESTONE SAAT INI: M[1-4]
Yang sudah dicapai:
- [x] Website/app sudah [deskripsi]
- [x] Siswa sudah paham [konsep]

Catatan mentor:
- [Catatan specific untuk orang tua]

Tantangan yang dihadapi:
- [Jika ada, dan solusinya]

Untuk Sesi [N+1]:
Topik: [ringkasan]
Yang perlu dipREPARE: [ jika ada]

---
[Nama Mentor]
```

---

## VIII. Sertifikat & Graduation

### Kebijakan Sertifikat

| Program        | Sertifikat                        | Syarat                              |
| -------------- | --------------------------------- | ----------------------------------- |
| Private 4 Sesi | Digital Certificate of Completion | Semua checklist kelulusan terpenuhi |
| Private 8 Sesi | Digital Certificate of Excellence | Semua checklist kelulusan + demo    |

### Checklist Kelulusan 4 Sesi (Website Statis)

- [ ] Website live dan bisa diakses via link Vercel
- [ ] Semua halaman dari PRD ada dan bisa dinavigasi
- [ ] Konten sudah berisi informasi nyata (bukan placeholder)
- [ ] Tampil baik di mobile (test di HP sendiri)
- [ ] Repo GitHub ada dengan minimal 5 commit bermakna
- [ ] Bisa update mandiri: prompt -> commit -> push -> lihat hasil live
- [ ] Punya dokumen "Panduan Update Website" yang ditulis sendiri
- [ ] Bisa jelaskan cara kerja websitenya ke orang lain dalam bahasa awam

### Checklist Kelulusan 8 Sesi (App dengan Autentikasi)

- [ ] App live dengan URL publik (Vercel)
- [ ] Signup, login, logout berfungsi sempurna
- [ ] User hanya bisa akses data miliknya sendiri (RLS verified)
- [ ] Semua fitur Must Have dari PRD berfungsi
- [ ] Empty states, loading states, error states sudah ada
- [ ] Responsive di mobile (test di HP nyata)
- [ ] GitHub repo dengan minimal 8 commit bermakna
- [ ] Personal branding paragraph dan GitHub README lengkap
- [ ] Bisa demo app dalam 2-3 menit dengan confidence
- [ ] Bisa jelaskan Row Level Security (RLS) ke orang lain

### Format Sertifikat

**Title:** CERTIFICATE OF COMPLETION / CERTIFICATE OF EXCELLENCE
**Subtitle:** Vibe Coding Private
**Body:** "Ini menyatakan bahwa [Nama] telah menyelesaikan [Program], Periode [Tanggal], dengan project [Judul Project]"
**Competencies:** Prompt Engineering, Version Control, Deploy & Maintenance, Computational Thinking
**Mentor:** [Nama Mentor]
**Verification:** QR code ke link verifikasi (opsional)

**Tool:** Canva (template "Certificate of Completion Modern Dark")

---

## IX. Upsell & Kelanjutan Program

### Dari Private ke Format Lain

Jika siswa sudah selesai 4 sesi dan ingin lanjut:

| Opsi Kelanjutan                        | Detail                      | Harga                   |
| -------------------------------------- | --------------------------- | ----------------------- |
| Lanjut ke 4 sesi lagi (menjadi 8 sesi) | Tambahan 4 sesi autentikasi | Rp 400.000 / Rp 320.000 |
| Builder Bootcamp Online                | 8 sesi online cohort-based  | Rp 600.000              |
| Private 8 Sesi penuh                   | Jalur lengkap autentikasi   | Rp 800.000 / Rp 640.000 |

**Soft Offer Template (di akhir Sesi 4):**

> "Kamu sudah punya website yang live. Keren. Sekarang pertanyaannya: mau kemana berikutnya? Ada tiga opsi: (1) Lanjut privat 4 sesi lagi untuk bangun app dengan login — ini yang paling personal. (2) Ikut Builder Bootcamp online — bareng cohort, lebih murah, tapi kurang personal. (3) Berhenti di sini — dan kamu sudah punya skill untuk maintain websitemu sendiri."
>
> Tidak ada tekanan. Yang penting kamu tahu opsinya.

### Referral Program (Private)

| Referral type                      | Credit            |
| ---------------------------------- | ----------------- |
| Ajak teman daftar Private          | Rp 100.000 credit |
| Ajak teman daftar Builder Bootcamp | Rp 150.000 credit |

Credit bisa dipakai untuk sesi berikutnya atau di-redeem.

---

## X. Instructor Capacity & Scheduling

### Kapasitas Realistis Private

| Tipe              | Sesi per Minggu | Total Murid/Minggu  | Effort         |
| ----------------- | --------------- | ------------------- | -------------- |
| Private 1-on-1    | 6-8 sesi        | 6-8 siswa           | Full attention |
| Small Group (3-5) | 4-6 sesi        | 12-30 siswa         | High           |
| Campuran          | Boleh           | Total maks 20 aktif | Manageable     |

**Maximum realistic load:** 3-4 siswa private aktif sekaligus (bisa 1-on-1 atau small group) + 1 ekskul sekolah.

**Kapan perlu partner/assistant:**

- Jika ada > 2 small group simultan
- Jika ada > 3 siswa private 1-on-1 simultan
- Jika siswa tersebar di lokasi berbeda (都需要 travel)

---

## XI. Zona Bahaya — Apa yang Perlu Dihindari

1. **Jangan tunda technical setup** — jika siswa tidak ready di Sesi 1, 15-20 menit pertama terbuang
2. **Jangan mengambil alih keyboard** — "Sini biar aku yang ketik" = mentor menciptakan ketergantungan
3. **Jangan abaikan progress tracker** — tanpa tracker, sulit menunjukkan hasil ke orang tua atau untuk naikkan harga
4. **Jangan over-promise** — "bisa bangun startup dalam 4 sesi" bukan promise yang jujur
5. **Jangan skip the celebration** — siswa Private butuh recognition personal. Rayakan setiap milestone.
6. **Jangan atur harga terlalu murah** — pengalaman 1-on-1 premium worth premium price. Di bawah Rp 80.000/sesi sudah undercutting.

---

## XII. Checklist Operasional Per Fase

### Fase Pre-Program (H-7 hingga H-1)

- [ ] Terima pembayaran, kirim invoice
- [ ] Kirim welcome message + Technical Setup Guide
- [ ] Kirim Pre-Flight Checklist (Google Form)
- [ ] Review Problem Brief setiap siswa
- [ ] Prepare 2-3 pertanyaan scoping per siswa
- [ ] Test semua tools sendiri
- [ ] Siapkan ruang/lokasi (jika Tatap Muka) atau link Zoom (jika Online)
- [ ] Kirim reminder H-1

### Fase Per Sesi

**Sebelum:**

- [ ] Review progress tracker
- [ ] Prepare micro-lesson
- [ ] Kirim reminder (H-1)
- [ ] Siapkan environment (tools, browser tabs)

**Sesudah:**

- [ ] Update progress tracker
- [ ] Kirim ringkasan + PR via WhatsApp
- [ ] Commit perubahan ke GitHub (jika ada)
- [ ] Identifikasi siswa yang butuh extra attention

### Fase Post-Program

- [ ] Graduation ceremony (minimal tapi meaningful)
- [ ] Terbitkan sertifikat
- [ ] Kirim progress summary final ke orang tua
- [ ] Soft offer kelanjutan program
- [ ] Minta testimoni (jika bersedia)
- [ ] Ajak join grup alumni (opsional)

---

## XIII. Frequently Asked Questions dari Siswa & Orang Tua

**Q: "Apakah harus bisa coding dulu?"**
A: "Tidak. Yang perlu adalah mau mencoba dan mau mengetik. Coding tradisional tidak diajarkan — yang diajarkan adalah cara mengarahkan AI untuk membangun. Itu bedanya."

**Q: "Apakah hasil bisa dipakai untuk portfolio?"**
A: "Bisa. Website/app siswa akan live di internet dengan link yang bisa dimasukan ke CV dan LinkedIn."

**Q: "Bagaimana jika siswa tidak bisa install tools?"**
A: "Saya bantu di Sesi 1. Biasanya 15 menit sudah cukup. Yang penting siswa usahakan sebelum sesi ya."

**Q: "Bagaimana jika siswa ternyata tidak cocok?"**
A: "Setelah 2 sesi, jika memang tidak cocok, refund proporsional bisa dibahas."

**Q: "Berapa banyak PR yang harus dikerjakan antar sesi?"**
A: "Rata-rata 1-2 jam per minggu sudah cukup. Tidak overwhelming."

**Q: "Apakah orang tua bisa ikut menonton sesi?"**
A: "Bisa untuk intake session atau demo graduation. Untuk sesi reguler, kami sarankan tidak — agar siswa merasa nyaman membuat mistakes tanpa merasa dinilai."

---

## XIV. Document History

| Versi | Tanggal    | Perubahan                                            |
| ----- | ---------- | ---------------------------------------------------- |
| 1.0   | 2026-06-22 | Initial release                                      |
| 1.0   | 2026-06-23 | First Private-specific version (adapted from Online) |

---

_Vibe Coding Operations Playbook — Format Private_
_Versi 1.0 · 2026-06-23_
