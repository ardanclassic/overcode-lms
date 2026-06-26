# Vibe Coding | Overcode — Problem Register & Rekomendasi Solusi

> **Brand:** Overcode

Dokumen ini memuat semua masalah yang ditemukan di seluruh dokumen program Vibe Coding (Proposal Sekolah, Kurikulum & Panduan Mentor, Online Concept), dikategorikan berdasarkan urgensi, beserta rekomendasi solusi untuk masing-masing masalah.

---

## Status Update — 2026-06-22

Dokumen ini adalah living document. Update terakhir menandai progres setelah seluruh dokumen kurikulum dan operations playbook selesai dibuat.

**Key:**
- `✅ RESOLVED` — Masalah sudah solved di dokumen yang relevan
- `🔄 ONGOING` — Masih dalam progress, solusi parsial ada
- `⚠️ PENDING` — Belum solved, perlu action

---

## Kategori 1 — Masalah Kritis (Harus Sebelum Launch)

---

### 1.1 Format Delivery Tidak Konsisten antara Proposal dan Kurikulum

**Status:** `✅ RESOLVED`
**Format:** `[P]`, `[K]`, `[XD]`
**Solusi yang diterapkan:**
- Kurikulum Sekolah → menggunakan pendekatan **"Kelas Fasilitator"** (Zone A/B/C/D rotation)
- Mentor sebagai demonstrator di depan kelas + rotate bantuan
- Common errors solved secara klasikal
- Districts: 1 sesi intake opsional (Sesi 0)
- Laporan progress per-kelas ke sekolah

**Dokumen:** `Vibe Coding - Kurikulum Sekolah.md` (Section I, III, X)

---

### 1.2 Tidak Ada Assessment Rubric

**Status:** `✅ RESOLVED`
**Format:** `[P]`, `[K]`, `[O]`
**Solusi yang diterapkan:**
- Rubric 3-level (Belum Cukup / Memenuhi / Melebihi) dibuat untuk setiap format
- Komponen: Milestone Deliverable, Prompt Engineering, Debugging, Version Control, Kemandirian
- Versi Private: self-assessment + mentor assessment
- Versi Sekolah: + laporan bulanan ke sekolah
- Versi Online: milestone-based assessment per tier

**Dokumen:** `Vibe Coding - Kurikulum Private.md` (Section X) · `Kurikulum Sekolah.md` (Section IX) · `Kurikulum Online.md`

---

### 1.3 Antigravity Dependency Tanpa Contingency Plan

**Status:** `🔄 ONGOING`
**Format:** `[K]`, `[O]`
**Solusi parsial:**
- Technical Setup Guide di Kirikulum Online mencakup panduan Antigravity setup
- Playbook tidak mencakup secara eksplisit "escape plan" jika Antigravity unavailable

**Yang masih perlu:**
- Escape plan eksplisit: jika Antigravity down, workflow alternatif dengan Vite + Claude + GitHub + Vercel
- Troubleshooting section eksplisit di Kurikulum

**Dokumen terkait:** `Vibe Coding - Kurikulum Online.md`

---

### 1.4 Tidak Ada Protokol Handling Siswa Drop-Out

**Status:** `✅ RESOLVED`
**Format:** `[P]`, `[K]`, `[O]`
**Solusi yang diterapkan:**
- Dropout & Refund Policy lengkap untuk setiap format di Operations Playbook (Section X-D)
- Private: reschedule 1x, 24hr policy, no refund mid-program
- Sekolah: minimum commitment, payment terms, late-cancel penalty
- Online Bootcamp: tiered refund based on session attended (100%→75%→0%)
- Recording policy untuk absen

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section X-D)

---

### 1.5 Tidak Ada Alur Onboarding Teknis untuk Format Online

**Status:** `✅ RESOLVED`
**Format:** `[O]`
**Solusi yang diterapkan:**
- Onboarding Journey Map lengkap (H+0 → Sesi 1 → Sesi N → H+7)
- Technical Pre-Flight Checklist via Google Form (H-3)
- H-1 Final Reminder template
- Welcome message + Technical Setup Guide
- Respons handling terstruktur (TA DM + group support)

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section X-C)

---

### 1.6 Tidak Ada Acquisition Strategy untuk Format Online

**Status:** `✅ RESOLVED`
**Format:** `[O]`
**Solusi yang diterapkan:**
- Marketing strategy lengkap (Section IV Playbook)
- Channel prioritas: Instagram Reels/TikTok (demo speed build, before/after)
- Community posting (Facebook Groups, Reddit r/indonesia)
- Paid ads funnel (top/mid/bottom)
- 5 hook patterns
- Positioning: "Bikin Website dari Nol dalam 4 Sesi. Tanpa Jago Coding."
- Diferensiasi: 95% kursus AI ajarkan teori; Vibe Coding ajarkan BUILDING
- Launch sequence 30 hari sebelum batch

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section IV)

---

## Kategori 2 — Masalah Penting (Sebaiknya Sebelum Launch)

---

### 2.1 Tidak Ada Pricing Anchor yang Jelas

**Status:** `✅ RESOLVED`
**Format:** `[P]`, `[XD]`
**Solusi yang diterapkan:**
- Semua harga sudah ditetapkan dengan rationale berdasarkan market comparison, cost-to-value ratio, dan price elasticity
- Builder Bootcamp: Rp 600.000 / 8 sesi
- Pro Bootcamp: Rp 900.000 / 12 sesi
- Pricing Guide komprehensif mencakup semua format + discount structure + payment terms + break-even numbers

**Dokumen:** `Vibe Coding - Pricing Guide.md`

---

### 2.2 Kurikulum Tidak Ada untuk Jalur CRUD dan App Kompleks

**Status:** `🔄 ONGOING`
**Format:** `[K]`
**Yang sudah solved:**
- Kurikulum Private: outline Jalur 6 Sesi (CRUD) dan Jalur 8 Sesi (Auth) sudah ada
- Kurikulum Sekolah: outline Jalur 8 Sesi (CRUD) sudah ada

**Yang belum:** Breakout detail per-sesi untuk Jalur CRUD (6 sesi) dan Auth (8 sesi) — belum sekomprehensif Jalur 4 Sesi.

**Catatan:** Ini adalah upgrade yang realistic dilakukan setelah program berjalan pertama kali.

---

### 2.3 Tidak Ada Referensi/Verifikasi untuk Klaim Kurikulum

**Status:** `⚠️ PENDING`
**Format:** `[K]`
**Rekomendasi:** Verifikasi apakah Stanford course benar ada; jika tidak, hapus klaim.

---

### 2.4 Tidak Ada Pathway Map yang Menghubungkan Tiga Format

**Status:** `⚠️ PENDING`
**Format:** `[XD]`
**Solusi belum diimplementasikan.** Perlu dibuat visual/diagram yang menghubungkan Private, Sekolah, dan Online. Bisa ditambahkan sebagai appendix di Pricing Guide atau satu-page ecosystem map.

---

### 2.5 Cohort Model untuk Online Bootcamp Belum Diputuskan

**Status:** `✅ RESOLVED`
**Format:** `[O]`
**Solusi yang diterapkan:** Cohort model dipilih. Alasan: completion rate cohort vs self-paced (40–60% vs 13–15%), community building, word-of-mouth. Detail: batch berjalan per bulan, maks 15 siswa/cohort, quorum 5 siswa.

**Dokumen:** `Vibe Coding - Kurikulum Online.md` · `Vibe Coding - Operations Playbook.md`

---

### 2.6 Tidak Ada Konten Detail untuk Online Bootcamp Tiers

**Status:** `✅ RESOLVED`
**Format:** `[O]`, `[K]`
**Solusi yang diterapkan:**

- **Struktur Online disederhanakan:** Crash Course (1 sesi) + Builder Bootcamp (8 sesi). Starter (4 sesi) dan Pro (12 sesi) dihapus.
- **Builder Bootcamp:** Full detail curriculum 8 sesi, semua sub-topics per sesi, prompt templates, milestone mapping, graduation criteria.
- **Crash Course:** Sudah lengkap dengan breakdown per-menit dan learning objectives.

**Catatan:**
- Builder Bootcamp curriculum terpisah di file `Vibe Coding - Kurikulum Builder Bootcamp.md`
- Starter Bootcamp tetap jadi bagian dari Kurikulum Online (referensi untuk peserta yang belum siap Builder)

**Dokumen:** `Vibe Coding - Kurikulum Builder Bootcamp.md` · `Vibe Coding - Kurikulum Online.md`

---

## Kategori 3 — Masalah Minor / Nice-to-Have

---

### 3.1 Tidak Ada Case Study atau Testimoni

**Status:** `⚠️ PENDING`
**Format:** `[P]`, `[O]`
**Rekomendasi:** Dokumentasikan siswa ekskul pertama sebagai case study. Minta izin screenshot/project link dari siswa.

---

### 3.2 Tidak Ada Kalkulasi Instructor Load

**Status:** `✅ RESOLVED`
**Format:** `[K]`, `[O]`
**Solusi yang diterapkan:** Instructor capacity table di Operations Playbook (Section XI) — mencakup Crash Course, Starter, Builder, Pro, Private, dan Ekskul.

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section XI)

---

### 3.3 Tidak Ada Recording Policy

**Status:** `✅ RESOLVED`
**Format:** `[O]`
**Solusi yang diterapkan:** Recording policy di Playbook (Section X-D) mencakup: who gets recordings, timing (max 48 jam), duration (program + 30 hari), exceptions.

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section X-D)

---

### 3.4 Tidak Ada Diferensiasi dari AI Coding Courses Lain

**Status:** `✅ RESOLVED`
**Format:** `[O]`, `[P]`
**Solusi yang diterapkan:**
- Diferensiasi: "Hasil nyata: website live di internet"
- Tagline: "Bikin Website dari Nol dalam 4 Sesi. Tanpa Jago Coding."
- Sub-tagline: "95% kursus AI ajarkan teori. Vibe Coding ajarkan BUILDING."

**Dokumen:** `Vibe Coding - Operations Playbook.md` (Section IV)

---

## Ringkasan Status

| #   | Masalah | Kategori | Status |
| --- | ------- | -------- | ------ |
| 1.1 | Format delivery tidak konsisten | Kritis | ✅ RESOLVED |
| 1.2 | Tidak ada assessment rubric | Kritis | ✅ RESOLVED |
| 1.3 | Antigravity dependency tanpa contingency | Kritis | 🔄 ONGOING |
| 1.4 | Tidak ada dropout/refund policy | Kritis | ✅ RESOLVED |
| 1.5 | Tidak ada teknis onboarding online | Kritis | ✅ RESOLVED |
| 1.6 | Tidak ada acquisition strategy online | Kritis | ✅ RESOLVED |
| 2.1 | Pricing tidak ada anchor | Penting | ✅ RESOLVED |
| 2.2 | Kurikulum hanya jalur 4 sesi | Penting | 🔄 ONGOING (partial) |
| 2.3 | Klaim validasi kurikulum tidak terverifikasi | Penting | ⚠️ PENDING |
| 2.4 | Tidak ada pathway map antar-format | Penting | ⚠️ PENDING |
| 2.5 | Cohort vs self-paced belum diputuskan | Penting | ✅ RESOLVED |
| 2.6 | Tidak ada detail untuk Bootcamp tiers | Penting | ✅ RESOLVED |
| 3.1 | Tidak ada case study / testimoni | Minor | ⚠️ PENDING |
| 3.2 | Tidak ada instructor load kalkulasi | Minor | ✅ RESOLVED |
| 3.3 | Tidak ada recording policy | Minor | ✅ RESOLVED |
| 3.4 | Tidak ada diferensiasi | Penting | ✅ RESOLVED |

**Summary:**
- ✅ **RESOLVED: 19 items** (R6 baru — Sekolah Playbook)
- 🔄 **ONGOING: 1 item** (Antigravity escape plan → perlu disalin ke Playbook Online)
- ⚠️ **PENDING: 3 items** (Stanford references, pathway map, case study)
- ⚠️ **PENDING: 3 items** (Stanford references, pathway map, case study)

---

## Items Baru yang Ditemukan (2026-06-22)

Durante pembuatan Operations Playbook, gap berikut diidentifikasi dan sudah resolved:

| #   | Gap Baru | Severity | Status | Solusi |
| --- | -------- | -------- | ------ | ------ |
| N1  | Backup communication channel | Kritis | ✅ RESOLVED | Section X-A Playbook |
| N2  | Zoom failure contingency | Kritis | ✅ RESOLVED | Section X-A Playbook (3-tier response) |
| N3  | Affiliate/partnership program | Penting | ✅ RESOLVED | Section X-B Playbook |
| N4  | Detailed student onboarding journey | Penting | ✅ RESOLVED | Section X-C Playbook |
| N5  | Payment tracking & invoicing | Penting | ✅ RESOLVED | Section X-E Playbook |
| N6  | Mid-program survey | Medium | ✅ RESOLVED | Section X-F Playbook |
| N7  | Continuous improvement loop | Medium | ✅ RESOLVED | Section X-F Playbook |

---

## Items Baru dari Analisa Codepolitan Reference (2026-06-22)

Dari review silabus Codepolitan (online coding academy), gap dan improvement berikut teridentifikasi:

| #   | Gap / Improvement | Severity | Status | Solusi |
| --- | ----------------- | -------- | ------ | ------ |
| C1  | Builder Bootcamp (8 sesi) tanpa detail curriculum | Kritis | ✅ RESOLVED | File `Kurikulum Builder Bootcamp.md` terpisah dengan 8 sesi lengkap |
| C2  | Kurikulum Sekolah (CRUD/8 sesi) tanpa breakdown detail | Penting | ✅ RESOLVED | Section VII.C Kurikulum Sekolah dengan sub-topics per sesi |
| C3  | Online course masih ada Starter (4 sesi) & Pro (12 sesi) | Penting | ✅ RESOLVED | Disederhanakan: Crash Course + Builder (8 sesi) saja |
| C4  | Private curriculum durasi tidak konsisten (90 menit vs 2–2.5 jam) | Penting | ✅ RESOLVED | Private = 1.5 jam/sesi; School & Online = 2–2.5 jam/sesi |
| C5  | Tidak ada AI Integration session di curriculum | Penting | ✅ RESOLVED | Builder Bootcamp Sesi 6 + Codepolitan session structure |
| C6  | Tidak ada Deployment & Monetization session | Minor | ✅ RESOLVED | Builder Bootcamp Sesi 7–8 |
| C7  | Tidak ada Project Showcase / Demo session | Minor | ✅ RESOLVED | Builder Bootcamp Sesi 8 + Kurikulum Sekolah Sesi 8 |
| C8  | Kurikulum tidak punya learning objectives per sesi | Penting | ✅ RESOLVED | Semua sesi sekarang memiliki "Tujuan Pembelajaran" |
| C9  | Sub-topics per sesi tidak terdefinisi jelas | Penting | ✅ RESOLVED | Codepolitan sub-topics model diterapkan ke semua kurikulum |

---

## Items Baru dari Review 2026-06-23

Dari review menyeluruh, gap dan improvement berikut diidentifikasi dan sudah resolved:

| #   | Gap / Improvement | Severity | Status | Solusi |
| --- | ----------------- | -------- | ------ | ------ |
| R1  | Jalur 6 Sesi masih ada di Kurikulum Private | Penting | ✅ RESOLVED | Jalur 6 Sesi dihapus. Private sekarang hanya 4 sesi dan 8 sesi. |
| R2  | Jalur 8 Sesi Private belum Codepolitan-style | Penting | ✅ RESOLVED | Section VII (Jalur 8 Sesi) ditulis ulang dengan learning objectives + sub-topics per sesi |
| R3  | Jalur Website Statis Sekolah belum Codepolitan-style | Penting | ✅ RESOLVED | Section VI Sekolah ditulis ulang dengan sub-topics + timing per sesi |
| R4  | Pricing Guide masih ada referensi Starter/Pro | Minor | ✅ RESOLVED | Starter Bootcamp & Pro Bootcamp dihapus dari tabel diskon, payment terms, dan rationale |
| R5  | Operations Playbook Private tidak ada | Kritis | ✅ RESOLVED | File baru dibuat: `Vibe Coding - Operations Playbook (Private).md` |
| R6  | Operations Playbook Sekolah tidak ada | Kritis | ✅ RESOLVED | File baru dibuat: `Vibe Coding - Operations Playbook (Sekolah).md` |

---

## Next Action Items

1. **`🔄 ONGOING`** — Escape plan Antigravity sudah ada di Playbook Private Section VI, perlu disalin juga ke Playbook Online
2. **`⚠️ PENDING`** — Verifikasi klaim Stanford reference di Kurikulum
3. **`⚠️ PENDING`** — Buat visual pathway map 3-format
4. **`⚠️ PENDING`** — Kumpulkan case study/testimoni dari batch pertama

---

_Catatan: Dokumen ini adalah living document — akan ada masalah baru yang muncul saat program dijalankan. Update secara berkala (setiap selesai 1 batch/siklus) dengan format: Resolved, New, Ongoing._

_Terakhir diupdate: 2026-06-23_
