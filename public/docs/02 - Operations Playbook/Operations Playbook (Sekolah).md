# Vibe Coding | Overcode — Operations Playbook (Format Sekolah)

> **Brand:** Overcode

### Panduan Operasional Mentor & Partner: Ekstrakurikuler & Program Sekolah

**Scope:** Format Sekolah / Ekstrakurikuler (15–20 siswa per kelas, Tatap Muka)
**Durasi:** 2–2.5 jam per sesi · 8 sesi per program
**Pricing:** Rp 2.000.000 / kelas (15–20 siswa) · Negotiable untuk 2 kelas+
**Untuk:** Mentor, Partner/Asisten Mentor, Guru Pembimbing Ekskul

---

## Overview

Kurikulum adalah _apa yang diajarkan_. Playbook ini adalah _apa yang mengelilingi kurikulum_ — koordinasi dengan sekolah, komunikasi dengan guru pembimbing dan orang tua, setup teknis, progress tracking, laporan ke sekolah, dan semua SOP yang membuat format Ekskul berjalan lancar.

Format Sekolah berbeda dari Private dan Online dalam satu hal fundamental: **mentor bekerja dalam ekosistem institusional**. Ada guru pembimbing, ada kebijakan sekolah, ada laporan yang harus diajukan, dan ada multiple stakeholder yang punya ekspektasi berbeda.

---

## I. Dua Program Path

### Path A — Ekstrakurikuler 4 Sesi (Website Statis)

| Item          | Detail                                        |
| ------------- | --------------------------------------------- |
| Sesi          | 4 sesi × 2–2.5 jam (total 10–12 jam)          |
| Total/kelas   | Rp 2.000.000 (15–20 siswa)                    |
| Target output | Website statis / portfolio personal per siswa |
| Stack         | React/Vite + Tailwind + Vercel                |
| Cocok untuk   | Ekstrakurikuler pendek, orientation program   |

### Path B — Ekstrakurikuler 8 Sesi (Website Statis atau Web App CRUD)

| Item          | Detail                                              |
| ------------- | --------------------------------------------------- |
| Sesi          | 8 sesi × 2–2.5 jam (total 20–25 jam)                |
| Total/kelas   | Rp 2.000.000 (15–20 siswa)                          |
| Target output | Website statis lengkap ATAU Web app dengan database |
| Stack         | Path A: React/Vite + Tailwind + Vercel              |
|               | Path B: React + Supabase + Vercel                   |
| Cocok untuk   | Ekstrakurikuler reguler semester penuh              |

> **Prinsip:** Minimum 8 sesi untuk hasil yang meaningful. 4 sesi hanya untuk program pendek atau orientation. Jika sekolah minta kurang dari 8 sesi, negotiates supaya jadi 8 sesi atau scope down output secara eksplisit.

---

## II. Koordinasi dengan Sekolah

Format Sekolah membutuhkan koordinasi institusional yang tidak ada di Private atau Online. Bagian ini mencakup semua hal yang perlu dinegosiasikan dan disepakati dengan sekolah SEBELUM program dimulai.

### Onboarding Sekolah — Sebelum Program

#### Step 1: Kickoff Meeting

Sebelum kontrak ditandatangani, jadwalkan meeting 30–45 menit dengan:

- Guru pembimbing ekskul (atau bagian kurikulum)
- Pihak yang berwenang menandatangani kontrak
- Coordinator IT jika sekolah punya (untuk teknis)

**Agenda Meeting Kickoff:**

```
AGENDA KICKOFF — Vibe Coding Ekstrakurikuler
============================================

1. Perkenalan singkat + demo langsung (10 menit)
   → Mentor bangun website dari prompt dalam 5 menit
   → Tunjukkan hasil nyata siswa sebelumnya

2. Overview program (10 menit)
   → Apa yang akan dipelajari
   → Hasil yang diharapkan (website/app live per siswa)
   → Jadwal 8 sesi

3. Kebutuhan teknis sekolah (10 menit)
   → Ruangan dengan proyektor/layar
   → Internet stabil (minimal 10 Mbps)
   → Colokan listrik cukup
   → GitHub sudah bisa diakses dari jaringan sekolah

4. Administratif (10 menit)
   → Harga + payment terms
   → Siapa yang menandatangani kontrak
   → Kapan deadline pembayaran
   → Siapa guru pembimbing yang jadi contact person

5. Q&A (5 menit)
```

#### Step 2: Technical Requirements Checklist

Konfirmasi dengan pihak sekolah:

| Kebutuhan          | Detail                                      | Responsible |
| ------------------ | ------------------------------------------- | ----------- |
| Proyektor/Layar    | HDMI atau adapter tersedia                  | Sekolah     |
| Internet           | Stabil, minimal 10 Mbps, GitHub accessible  | Sekolah     |
| Colokan Listrik    | Cukup untuk semua laptop                    | Sekolah     |
| GitHub Access      | Tidak diblokir oleh firewall sekolah        | Sekolah     |
| Vercel Access      | Tidak diblokir oleh firewall sekolah        | Sekolah     |
| Antigravity Access | Tidak diblokir (escape plan: Vite + Claude) | Sekolah     |
| Akun per Siswa     | GitHub + Vercel — buat sebelum Sesi 1       | Mentor      |

**Jika GitHub/Vercel diblokir sekolah:**
Gunakan escape plan Vite + Claude Code lokal + Netlify/Vercel (alternatif). Konfirmasi sebelum Sesi 1.

#### Step 3: Kontrak & Payment

**Payment Terms:**

| Tahap       | Jumlah | Waktu                                        |
| ----------- | ------ | -------------------------------------------- |
| Deposit     | 50%    | Saat kontrak ditandatangani (sebelum Sesi 1) |
| Mid-program | 50%    | Setelah Sesi 4 selesai                       |

**Yang perlu ada di kontrak:**

- Program name + path (4 sesi / 8 sesi)
- Jadwal lengkap (hari, jam, tanggal)
- Total harga
- Payment terms (schedule di atas)
- Deliverables (website/app live per siswa)
- Sertifikat untuk setiap siswa
- Laporan progress (setiap 4 sesi)
- Minimum quorum: 10 siswa
- Kebijakan cancel/penundaan

---

## III. Onboarding Proses — Siswa & Guru Pembimbing

### Onboarding Timeline

```
H-14 (2 minggu sebelum)
   → Kickoff meeting dengan sekolah
   → Teknis requirements diklarifikasi
   → Kontrak ditandatangani + deposit 50%
   → Jadwal dikunci

H-7 (1 minggu sebelum)
   → Guru pembimbing kirim surat/pengumuman ke siswa
   → Mentor kirim technical setup guide
   → Siswa: daftar GitHub + install tools

H-3 (3 hari sebelum Sesi 1)
   → Reminder teknis: "Sudah install tools?"
   → Konfirmasi attendance

H-1 (1 hari sebelum)
   → Final reminder via grup sekolah
   → Konfirmasi ruangan + proyektor

SESI 1
   → Opening + setup (15 menit pertama)
   → Jika ada siswa belum install: Zone D priority
```

### Welcome Message untuk Guru Pembimbing

```
Hai [Nama Guru], salam hangat dari Tim Vibe Coding.

Terima kasih sudah menerima program ini di [Nama Sekolah].
Sebelum Sesi 1, saya mau sharing beberapa hal:

APA YANG AKAN DIPELAJARI SISWA:
Dalam [4/8] sesi, siswa akan belajar membangun website/app
menggunakan AI. Hasil: setiap siswa punya website/app yang
live di internet.

HASIL KHUSUS YANG BISA DILAPORKAN KE SEKOLAH:
- Setiap siswa punya website/app live dengan URL pribadi
- Progress tracker per siswa tersedia untuk dilaporkan
- Sertifikat untuk setiap siswa yang menyelesaikan

BAGAIMANA BISA MONITOR:
- Laporan progress setiap 4 sesi saya kirim ke Bapak/Ibu
- Sertifikat diterbitkan di akhir program

PERSIAPAN TEKNIS — tolong di-share ke siswa:
[Siswa perlu punya: laptop, akun GitHub, install GitHub Desktop]

Jika ada pertanyaan, langsung hubungi saya ya.
Sesi 1: [hari/tanggal], [jam].
```

### Technical Setup Guide untuk Siswa

(Sama dengan versi Online, tapi dalam format yang bisa dicetak/dibagikan lewat sekolah)

```
PERSIAPAN TEKNIS — Vibe Coding Ekskul
======================================
BEFORE Sesi 1, pastikan kamu sudah:

1. Akun GitHub (github.com)
   → Daftar dengan email sekolah/gmail
   → Konfirmasi: buka github.com, login berhasil

2. GitHub Desktop (github.com/desktop)
   → Download + install
   → Login dengan akun GitHub

3. Akun Vercel (vercel.com)
   → Klik "Continue with GitHub"
   → Konfirmasi: buka vercel.com, connected

4. Akun Antigravity (atau alternatif AI)
   → [Link pendaftaran]
   → Konfirmasi: bisa buka + buat project baru

5. Laptop dalam kondisi:
   → Chrome atau Edge (bukan Firefox)
   → RAM minimal 8 GB
   → Baterai terisi atau charger siap

JIKA STUCK: tanya di grup atau sebelum Sesi 1 dimulai.
```

---

## IV. SOP Setiap Sesi

### Struktur Sesi 150 Menit (2.5 Jam)

Format Sekolah menggunakan pendekatan **Kelas Fasilitator** — mentor demonstrasi di depan, siswa praktikkan di laptop masing-masing, error klasikal solved bareng.

| Waktu      | Segmen                          | Penjelasan                                                                              |
| ---------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| 0–10 mnt   | **Opening & PR Check**          | 全班一起. Review progress tracker di layar. "Siapa yang sudah push hasil PR kemarin?"   |
| 10–25 mnt  | **Demo di Depan Kelas**         | Mentor demonstrasikan di layar projector. Siswa watch + follow di laptop masing-masing. |
| 25–70 mnt  | **Guided Build Session**        | Siswa praktikkan. Mentor rotate Zone A/B/C/D. Common errors solved secara klasikal.     |
| 70–85 mnt  | **Class Review & Debug Bareng** | Error yang sama dari 3+ siswa → solved bareng di depan kelas.                           |
| 85–150 mnt | **Build Lanjutan & Wrap-up**    | Siswa lanjut build. Mentor rotate. Commit + push. Wrap-up + PR untuk sesi depan.        |

### Zone System — Rotasi Bantuan Mentor

Dengan 15–20 siswa, mentor tidak bisa tangani semua secara 1-on-1. Gunakan zone system:

| Zone       | Kondisi                      | Aksi Mentor                                                           |
| ---------- | ---------------------------- | --------------------------------------------------------------------- |
| **Zone A** | Sudah lancar, ahead of pace  | Beri tantangan tambahan: "Coba tambahkan fitur X."                    |
| **Zone B** | Sesuai pace/timeline         | Cek sesekali, ikut timeline normal                                    |
| **Zone C** | Stuck tapi berusaha          | Prioritas tinggi. Bantu troubleshoot, tapi arahkan siswa ikut proses. |
| **Zone D** | Belum install / belum follow | Prioritas tertinggi. Jika belum install, 15 menit pertama terbuang.   |

**Zone D adalah musuh terbesar.** Jika ada siswa Zone D di awal sesi, mereka tidak akan punya output yangmeaningful. Prevent ini SEBELUM sesi — follow up via guru pembimbing H-1.

### Common Errors — Solusi Klasikal

Aturan praktis: **Jika 3+ siswa mengalami error yang sama, STOP dan selesaikan bareng di depan proyektor.** Jangan bantu 1-on-1 saat ada crowd.

| Error Umum                          | Solusi Klasikal                                                              |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| Vercel deploy failed                | "Pastikan repo sudah di-push ke GitHub dulu. Lalu klik Redeploy."            |
| Antigravity tidak bisa generate     | "Coba refresh page. Jika masih error, gunakan Vite + Claude sebagai escape." |
| Navigasi tidak berfungsi            | "Cek apakah kamu sudah add route yang benar di App.jsx."                     |
| Perubahan tidak muncul di live site | "Cek apakah sudah di-commit + push. Tunggu 1-2 menit untuk Vercel rebuild."  |

### Commit & Wrap-up Ritual

Akhir setiap sesi Wajib:

1. Mentor demo: "Klik GitHub Desktop → perubahan apa yang muncul?"
2. Siswa commit dengan pesan deskriptif
3. Siswa push
4. Mentor konfirmasi: "Buka Vercel, apakah sudah ada?"
5. Tentukan PR untuk sesi depan

---

## V. Komunikasi & Stakeholder Management

### Stakeholder Map — Format Sekolah

Format Sekolah punya stakeholder yang lebih banyak dari Private atau Online:

```
┌─────────────────────────────────────────────────────┐
│                   SEKOLAH                           │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │ Kepsek/     │  │ Guru         │  │ Bagian      │ │
│  │ Waka Kurik. │  │ Pembimbing   │  │ Keuangan    │ │
│  └─────────────┘  └──────────────┘  └────────────┘ │
│        ↑                                    ↑       │
│        │  Laporan progress 4 sesi            │ Bayar  │
│        │  Sertifikat di akhir               │        │
└────────┼────────────────────────────────────┼────────┘
         │                                    │
         ↓                                    ↓
┌─────────────────────────────────────────────────────┐
│                   MENTOR                            │
│                                                      │
│         ↑                    ↑                    ↑ │
│   Progress tracker    Update per sesi          Koordinasi│
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │              15–20 SISWA                       │  │
│  │  Orang tua mereka (stakeholder tidak langsung) │  │
│  └────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Komunikasi dengan Guru Pembimbing

**Prinsip:** Guru pembimbing adalah partner, bukan bos. Mereka punya visibilitas ke kehidupan siswa yang mentor tidak punya.

| Konteks               | Channel           | Timing          |
| --------------------- | ----------------- | --------------- |
| Progress update rutin | Email/lipat       | Setiap 4 sesi   |
| Issue teknis/administ | WhatsApp langsung | Seperlunya      |
| Issue siswa personal  | Telepon/WhatsApp  | Immediately     |
| Schedule change       | WhatsApp + email  | Min. 3 hari     |
| Final report          | Email + hardcopy  | Setelah selesai |

### Komunikasi dengan Orang Tua

Orang tua bukan stakeholder langsung di format Ekskul (beda dengan Private). Tapi mereka kadang ingin tahu progress anak.

**Prinsip:** Komunikasi utama melalui sekolah/guru pembimbing. Jika orang tua menghubungi langsung:

1. Respon sopan dan informatif
2. Jelaskan bahwa progress report dikirim melalui sekolah
3. Jika ada concern spesifik siswa → escalate ke guru pembimbing
4. Jangan berikan judgment personal tentang siswa via komunikasi informal

**Pesan Respon ke Orang Tua:**

```
Terima kasih sudah menghubungi. Untuk laporan progress,
akan kami kirimkan melalui sekolah setiap 4 sesi.
Jika ada concern spesifik tentang [Nama Siswa], saya
akan koordinasi dengan guru pembimbing [Nama Guru].
Terima kasih atas dukungannya.
```

### Handling Issue Siswa

| Issue                        | Escalation                                        |
| ---------------------------- | ------------------------------------------------- |
| Siswa sering absen           | → Guru pembimbing (biasanya ada kebijakan ekskul) |
| Siswa tidak bisa follow pace | → Zona system + PR spesifik + guru pembimbing     |
| Siswa behavior problem       | → Guru pembimbing SEGERA                          |
| Siswa gifted / ahead         | → Tantangan tambahan + info ke guru pembimbing    |
| Siswa ingin drop out         | → Guru pembimbing + refund policy dari kontrak    |

---

## VI. Technical Setup — Panduan Lengkap

### Tool yang Perlu Diinstall Siswa

**Sebelum Sesi 1:**

| Tool               | Purpose                    | Link                       |
| ------------------ | -------------------------- | -------------------------- |
| GitHub             | Version control repository | github.com                 |
| GitHub Desktop     | Visual Git client          | desktop.github.com         |
| Antigravity (atau) | AI coding tool             | (link dari mentor)         |
| Vercel             | Deployment platform        | vercel.com (dengan GitHub) |
| Google Chrome/Edge | Browser utama dev          | chrome.com / edge.com      |

### Escape Plan — Jika Antigravity atau GitHub Tidak Bisa Diakses

**Kondisi:** Antigravity unavailable atau GitHub diblokir sekolah.

**Escape Plan A — Vite + Claude Code:**

1. `npm create vite@latest my-project -- --template react`
2. Buka project di VS Code
3. Gunakan Claude Code (claude.ai/code) untuk generate komponen
4. Deploy ke Vercel: `vercel --prod` (via terminal)

**Escape Plan B — Jika Vercel juga diblokir:**

1. Generate project dengan Vite
2. Export static files
3. Deploy ke Netlify via drag-and-drop (netlify.com/drop)
4. Atau simpan sebagai local project dan deploy saat di rumah

**Escape Plan C — Fully Offline:**

1. VS Code + Live Server extension
2. Siswa kerja lokal, screenshot hasil sebagai portfolio
3. Deploy nanti saat di rumah

> **Kunci:** Tidak ada sesi yang perlu dibatalkan karena masalah tool. Mentor harus know escape plan by heart dan siap switch workflow kapan saja.

### Checklist Setup Hari H

**Sebelum siswa masuk:**

- [ ] Ruangan dikunci, proyektor nyala, HDMI connected
- [ ] Internet di-test: github.com, vercel.com accessible
- [ ] Mentor laptop: browser open di Antigravity, VS Code ready
- [ ] Progress tracker terbuka di layar
- [ ] Demo build siap (backup recording jika perlu)

**Jika proyektor error:**

- Gunakan layar laptop mentor sebagai fallback
- Minta siswa huddle di sekitar layar
- Reschedule jika kondisi tidak memungkinkan

---

## VII. Progress Tracking & Reporting

### Progress Tracker per Siswa

**Format:** Google Sheets yang di-share ke guru pembimbing (view-only)

| Kolom              | Isi                                  |
| ------------------ | ------------------------------------ |
| Nama Siswa         |                                      |
| Project Title      | Judul website/app                    |
| Sesi 1             | Setup ✓/✗ · Repo ✓/✗ · Page 1 ✓/✗    |
| Sesi 2             | Pages ✓/✗ · Nav ✓/✗ · Commit ✓/✗     |
| Sesi 3             | Content ✓/✗ · Mobile test ✓/✗        |
| Sesi 4             | Launch ✓/✗ · Maintenance guide ✓/✗   |
| Sesi 5–8           | (sesuaikan dengan path yang diambil) |
| Milestone Terakhir | M1 / M2 / M3 / M4                    |
| Sertifikat         | [Ya/Belum] · [Tanggal]               |
| Catatan Mentor     | Hambatan atau achievement khusus     |

### Progress Update ke Sekolah (Setiap 4 Sesi)

```
LAPORAN PROGRESS — Vibe Coding Ekskul
[Nama Sekolah] — Periode [Tanggal Mulai]–[Tanggal Selesai]
=============================================

PROGRAM: Vibe Coding [4/8] Sesi
TOTAL PESERTA: [X] siswa
PERIODE LAPORAN: Sesi 1–4 / Sesi 5–8 / Final

OVERALL PROGRESS:
[Visualisasi: X% siswa di milestone M1/M2/M3/M4]

HIGHLIGHT:
- Siswa berprestasi: [Nama] — [Alasan]
- Breakthrough: [Nama] — [Achievement spesifik]
- Project terbaik: [Nama] — [Judul project]

HAMBATAN & SOLUSI:
- [Hambatan] → [Solusi yang dilakukan]
- [Hambatan] → [Solusi yang dilakukan]

REKOMENDASI UNTUK SESI BERIKUTNYA:
1. [Rekomendasi]
2. [Rekomendasi]

LAMPIRAN:
- Screenshot project siswa
- Progress tracker Google Sheets

Hormat kami,
[Nama Mentor]
```

---

## VIII. Sertifikat & Graduation

### Kebijakan Sertifikat

| Program | Sertifikat                           | Syarat                                |
| ------- | ------------------------------------ | ------------------------------------- |
| 4 Sesi  | Certificate of Completion            | Semua checklist kelulusan terpenuhi   |
| 8 Sesi  | Certificate of Completion/Excellence | Bergantung path + kelulusan checklist |

### Checklist Kelulusan 4 Sesi (Website Statis)

- [ ] Website live dan bisa diakses via link Vercel
- [ ] Semua halaman dari PRD ada dan bisa dinavigasi
- [ ] Konten sudah berisi informasi nyata
- [ ] Tampil baik di mobile
- [ ] Repo GitHub ada dengan minimal 4 commit bermakna
- [ ] Commit + push rutin (terbukti di GitHub)
- [ ] Bisa jelaskan cara kerja websitenya ke orang lain

### Checklist Kelulusan 8 Sesi (Web App CRUD)

- [ ] App live dengan URL publik
- [ ] Fitur CRUD (Create, Read, Update, Delete) berfungsi
- [ ] Database menyimpan data secara permanen
- [ ] Empty states, loading states, error states sudah ada
- [ ] Responsive di mobile
- [ ] Repo GitHub dengan minimal 8 commit bermakna
- [ ] Bisa demo app dalam 2-3 menit dengan confidence
- [ ] Personal branding paragraph dan GitHub README lengkap

### Format Sertifikat

**Title:** CERTIFICATE OF COMPLETION / CERTIFICATE OF EXCELLENCE
**Subtitle:** Vibe Coding Ekskul
**Body:** "Ini menyatakan bahwa [Nama] telah menyelesaikan Vibe Coding Ekstrakurikuler di [Nama Sekolah], Periode [Tanggal], dengan project [Judul Project]"
**Competencies:** Prompt Engineering, Version Control, Deploy & Maintenance, Computational Thinking
**School:** [Nama Sekolah]
**Mentor:** [Nama Mentor]
**Verification:** QR code ke link verifikasi (opsional)

**Tool:** Canva (template "Certificate of Completion Modern Dark" atau "School Certificate")

**Pemberian Sertifikat:** Sertifikat diberikan di **Sesi 8** atau **acara graduation** sekolah. Diserahkan ke guru pembimbing untuk ditandatangani/stempel sekolah, atau langsung ke siswa dengan kop sekolah.

---

## IX. Refund & Cancel Policy

### Kebijakan Cancel — Pihak Sekolah

| Situasi                                    | Policy                                                           |
| ------------------------------------------ | ---------------------------------------------------------------- |
| Sekolah cancel sebelum program dimulai     | Pembayaran untuk sesi yang sudah berjalan                        |
| Sekolah cancel mid-program (sesi berjalan) | Pembayaran untuk semua sesi yang sudah berjalan + 1 sesi penalti |
| Minimum quorum tidak tercapai (≤10 siswa)  | Negosiasi ulang harga ATAU refund penuh deposit                  |
| Force majeure (bencana, pandemi)           | Refund proporsional atau freeze program                          |

### Kebijakan Cancel — Siswa Individual

| Situasi                   | Policy                                                                   |
| ------------------------- | ------------------------------------------------------------------------ |
| Siswa drop out individual | Urusan sekolah dan siswa — mentor tidak wajib refund ke siswa individual |
| Siswa drop out, sisa ≥10  | Program tetap berjalan dengan harga yang disepakati                      |
| Siswa drop out, sisa <10  | Negosiasi: adjust harga atau ubah format ke small group                  |

### Kebijakan Ketidakhadiran Mentor

| Situasi                                  | Policy                                                 |
| ---------------------------------------- | ------------------------------------------------------ |
| Mentor tidak bisa hadir (sebab personal) | Replacement dalam 7 hari ATAU sesi pengganti           |
| Mentor sakit (dengan bukti)              | Reschedule dalam 7 hari, tidak ada penalti             |
| Session dibatalkan sekolah (kebijakan)   | Sesi di-skip atau dijadwalkan ulang, tidak ada penalti |

---

## X. Instructor Capacity & Scheduling

### Kapasitas Realistis

| Tipe            | Sesi per Minggu | Total Siswa/Minggu | Effort    |
| --------------- | --------------- | ------------------ | --------- |
| 1 Kelas Ekskul  | 1–2 sesi        | 15–20/kelas        | Medium    |
| 2 Kelas Ekskul  | 2–3 sesi        | 30–40              | High      |
| 3+ Kelas Ekskul | 3–4 sesi        | 45–60              | Very High |

**Kombinasi Realistis:**

- 1 ekskul + 1 bootcamp online simultan ✅
- 2 ekskul + 1 private simultan ✅
- 3 ekskul tanpa partner → risiko burn out ⚠️

**Kapan perlu partner/assistant:**

- Jika >2 kelas simultan
- Jika kelas >20 siswa dan ekspektasi individual attention tinggi
- Jika lokasi berbeda (travel time)

### Scheduling Considerations

| Pertimbangan             | Implikasi                                                        |
| ------------------------ | ---------------------------------------------------------------- |
| Jarak antar sekolah      | Min. 1 jam travel time antar lokasi                              |
| Waktu ekskul biasanyakan | Setelah jam sekolah (14:00–17:00) atau Saturday morning          |
| Holiday sekolah          | Negosiasi jadwal atau freeze program                             |
| Ujian sekolah            | Coordinate: biasanya 2 minggu sebelum ujian → kurangi intensitas |

---

## XI. Zona Bahaya — Apa yang Perlu Dihindari

1. **Jangan biarkan siswa tanpa task di tangan** — kalau menunggu mentor, mereka buka TikTok. Zone system ada karena alasan ini.
2. **Jangan debugging 1-on-1 saat ada 15 orang waiting** — selesaikan common errors secara klasikal di depan proyektor.
3. **Jangan biarkan Zone D menumpuk** — siswa yang belum install tools di Sesi 1 akan terus stuck. Follow up via guru pembimbing.
4. **Jangan ubah scope tanpa konfirmasi sekolah** — ini konteks institusional. Perubahan perlu persetujuan.
5. **Jangan skip the celebration** — siswa ekskul butuh recognition di depan teman sekelas. Rayakan setiap milestone.
6. **Jangan lupa laporan ke sekolah** — ini bukan optional. Guru pembimbing butuh visibilitas untuk melaporkan ke atas.

---

## XII. Checklist Operasional Per Fase

### Fase Pre-Program (H-14 hingga H-1)

- [ ] Kickoff meeting dengan sekolah
- [ ] Teknis requirements diklarifikasi (GitHub/Vercel accessible?)
- [ ] Kontrak ditandatangani + deposit 50% diterima
- [ ] Jadwal 8 sesi dikunci (hari, jam, tanggal)
- [ ] Guru pembimbing diklarifikasi (contact person)
- [ ] Ruangan + proyektor dikonfirmasi
- [ ] Technical setup guide dikirim ke siswa via sekolah
- [ ] Siswa: akun GitHub + tools terinstall (target H-3)
- [ ] H-3: Reminder teknis ke siswa via guru pembimbing
- [ ] H-1: Final reminder + konfirmasi attendance + ruangan

### Fase Per Sesi

**Sebelum:**

- [ ] Konfirmasi ruangan + proyektor berfungsi
- [ ] Progress tracker siap di layar
- [ ] Demo build siap (jika ada)
- [ ] Mentor laptop: tools ready
- [ ] Zona Zone siswa (dari tracker sebelumnya)

**Saat:**

- [ ] Buka tepat waktu
- [ ] Opening + PR check bareng
- [ ] Demo sesuai timeline
- [ ] Rotasi Zone A/B/C/D setiap 15 menit
- [ ] Common errors → solved klasikal
- [ ] Commit ritual di akhir

**Sesudah:**

- [ ] Progress tracker di-update
- [ ] Commit semua siswa terkonfirmasi
- [ ] PR di komunikasikan (via grup/guru pembimbing)
- [ ] Issue siswa dicatat

### Fase Post-Program

- [ ] Progress tracker final di-update
- [ ] Sertifikat di-generate (semua siswa)
- [ ] Laporan final dikirim ke sekolah + guru pembimbing
- [ ] Final report meeting (opsional)
- [ ] Foto kelas (untuk marketing, dengan izin)
- [ ] Referral info ke sekolah (jika ada siswa mau lanjut Private/Bootcamp)
- [ ] Payment mid-program (50%) diterima
- [ ] Internal debrief: apa yang berjalan baik, apa yang perlu diperbaiki

---

## XIII. FAQ — Pertanyaan Umum

**Q: Apakah siswa harus bisa coding dulu?**
A: Tidak. Yang perlu adalah mau mencoba dan mau mengetik. Coding tradisional tidak diajarkan — yang diajarkan adalah cara mengarahkan AI untuk membangun. Itu bedanya.

**Q: Apakah hasil bisa dipakai untuk portfolio?**
A: Bisa. Website/app siswa akan live di internet dengan link yang bisa dimasukkan ke CV dan LinkedIn.

**Q: Bagaimana jika siswa tidak bisa install tools?**
A: Saya bantu di Sesi 1. Biasanya 15 menit sudah cukup. Yang penting siswa usahakan sebelum sesi. Jika sekolah memblokir GitHub/Vercel, ada escape plan (Vite + Netlify).

**Q: Apakah orang tua bisa tahu progress anak?**
A: Progress report dikirim ke sekolah setiap 4 sesi. Guru pembimbing yang meneruskan ke orang tua.

**Q: Bagaimana jika siswa absen?**
A: PR tetap harus dikerjakan. Siswa yangmissed wajib follow up di sesi berikutnya. Saya tidak bisa chase individual siswa — koordinasi via guru pembimbing.

**Q: Apakah sertifikat bisa ditandatangani sekolah?**
A: Bisa. Sertifikat dalam format yang bisa dicetak dan ditandatangani/stempel sekolah.

**Q: Apakah program ini bisa dilaporkan ke dinas pendidikan?**
A: Bisa. Laporan progress per siswa, sertifikat per siswa, dan laporan ke sekolah tersedia dalam format yang bisa dilaporkan.

---

## XIV. Document History

| Versi | Tanggal    | Perubahan                                       |
| ----- | ---------- | ----------------------------------------------- |
| 1.0   | 2026-06-23 | Initial release — adaptasi dari Playbook Online |

---

_Vibe Coding Operations Playbook — Format Sekolah_
_Versi 1.0 · 2026-06-23_
