# Kurikulum Vibe Coding | Overcode — Format Sekolah

> **Brand:** Overcode

### Panduan untuk Mentor: Ekstrakurikuler Kelas 15–20 Siswa

**Target:** Kelas ekstrakurikuler, 15–20 siswa per sesi
**Durasi per sesi:** 90 menit, Tatap Muka (di sekolah)
**Pricing:** Rp 2.000.000 / 8 sesi / kelas · Negotiable untuk 2 kelas+

---

## Overview

Kurikulum ini diadaptasi dari Kurikulum Private untuk konteks **kelas dengan banyak siswa**. Pendekatan berubah dari "mentor sebagai guide 1-on-1" menjadi "mentor sebagai fasilitator dan demonstrator di depan kelas" — dengan cara yang tetap menjaga hands-on experience untuk setiap siswa.

Kunci sukses format ini: **mentor demonstrasikan, siswa ikut praktikkan, review bareng**. Tidak semua siswa bisa 1-on-1 debugging setiap sesi — tapi setiap siswa tetap harus memegang keyboard.

---

## I. Filosofi & Prinsip Dasar

Sama dengan Private — perbedaannya ada di **cara menyampaikan**, bukan **apa yang diajarkan**.

| Prinsip             | Penjelasan                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Problem-First**   | Project harus nyata dan relevan untuk kehidupan siswa — bukan studi kasus buatan.                           |
| **Everyone Builds** | Setiap siswa harus punya keyboard di tangan di setiap sesi. Mentor demonstrasi, tapi siswa yang praktikkan. |
| **Ship Early**      | Versi pertama bisa jalan. Tidak perlu sempurna. Deploy cepat membangun percaya diri.                        |
| **Peer Learning**   | Siswa yang lebih cepat membantu yang stuck — ini bagian dari belajar.                                       |

### Perbedaan Utama dengan Format Private

| Aspek              | Private            | Sekolah                        |
| ------------------ | ------------------ | ------------------------------ |
| Rasio mentor:siswa | 1:1 atau 1:3–5     | ~1:15–20                       |
| Pendekatan         | Guide per-individu | Fasilitator di depan + rotate  |
| Debugging          | 1-on-1 real-time   | "Common error" → solved bareng |
| Intake             | Personal per siswa | Class-wide di sesi pertama     |
| Progress tracking  | Personal           | Per-kelas + per-siswa          |
| Assessment         | Rubric personal    | Rubric + laporan ke sekolah    |

---

## II. Target Kompetensi Akhir

Sama dengan Private. Setiap siswa diharapkan:

| Kompetensi                 | Cakupan                                           |
| -------------------------- | ------------------------------------------------- |
| **Computational Thinking** | Mampu memecah masalah kompleks jadi langkah kecil |
| **Prompt Engineering**     | Menulis prompt yang presisi dan kontekstual       |
| **Product Thinking**       | Wireframe, scope, user testing                    |
| **Technical Literacy**     | Memahami konsep web tanpa harus jadi developer    |
| **Version Control**        | Commit bermakna, push rutin via GitHub Desktop    |

---

## III. Struktur Sesi Sekolah (90 Menit)

Berbeda dari Private karena harus mengakomodasi banyak siswa dengan kecepatan berbeda.

| Waktu     | Segmen                          | Adaptasi untuk Kelas                                                                              |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| 0–10 mnt  | **Opening & Progress Check**    | 全班一起. Mentor buka progress tracker di layar. "Siapa yang sudah push hasil PR kemarin?"        |
| 10–25 mnt | **Demo di Depan Kelas**         | Mentor demonstrasikan di layar projector. Siswa watch + follow di laptop masing-masing.           |
| 25–65 mnt | **Guided Build Session**        | Siswa praktikkan. Mentor rotate: bantu kelompok yang stuck. Common errors solved secara klasikal. |
| 65–80 mnt | **Class Review & Debug Bareng** | Error yang sama dari beberapa siswa → solved bareng di depan kelas. "Siapa mengalami ini juga?"   |
| 80–90 mnt | **Wrap-up & PR**                | Commit bareng (siswa yang klik). Tentukan PR. Arahkan siswa install tools jika belum.             |

### Rotasi Bantuan Mentor

Dengan 15–20 siswa, tidak semua bisa ditangani 1-on-1 secara merata. Gunakan pendekatan rotasi:

**Zone A (Sudah Lancar):** Tidak perlu perhatian khusus. Beri tantangan tambahan: "Coba tambahkan fitur X."

**Zone B (Sesuai Pace):** Ikut timeline normal. Cek sesekali.

**Zone C (Stuck):** Prioritas perhatian. Bantu troubleshoot, tapi arahkan siswa untuk ikut serta dalam proses debug — jangan langsung kasih solusi.

**Zone D (Belum Install / Belum Follow):** Prioritas tertinggi di awal sesi. Jika belum install tools, 15 menit pertama sesi akan terbuang.

### common Errors — Solusi Klasikal

Ketika 3+ siswa mengalami error yang sama, **stop dan selesaikan bareng di depan kelas.** Ini lebih efisien dan membantu semua orang belajar.

---

## IV. Persiapan Teknis Sebelum Program Dimulai

### Checklist Sekolah (Harus Selesai Sebelum Sesi 1)

**Yang perlu disediakan sekolah:**

- [ ] Ruang kelas dengan proyektor/layar
- [ ] Koneksi internet stabil (minimal 10 Mbps)
- [ ] Colokan listrik cukup untuk semua laptop

**Yang harus dilakukan siswa SEBELUM Sesi 1:**

- [ ] Akun GitHub (daftar di github.com)
- [ ] GitHub Desktop terinstall
- [ ] Akun Antigravity terdaftar
- [ ] Akun Vercel (pakai GitHub)
- [ ] Laptop: Chrome/Edge terbaru, RAM 8 GB, SSD
- [ ] Gemini Advanced aktif (atau alternatif yang disepakati)

> **Berikan checklist ini 1 minggu sebelum Sesi 1.** Jika ada siswa yang tidak bisa install sebelum sesi, siapkan 15 menit di Sesi 1 untuk membantu setup — tapi ini mengorbankan waktu build.

---

## V. Alur Intake Kelas (Sesi 0 — Opsional / 30 Menit)

Jika sekolah meminta sesi perkenalan sebelum program dimulai:

| Waktu     | Kegiatan                                                          |
| --------- | ----------------------------------------------------------------- |
| 0–5 mnt   | Perkenalan mentor + overview program                              |
| 5–15 mnt  | Demo: "Saya akan bangun sesuatu dari nol dalam 10 menit"          |
| 15–22 mnt | Ceritakan apa yang akan dipelajari dan hasil yang akan dihasilkan |
| 22–28 mnt | Tekankan: tidak perlu bisa coding, yang perlu adalah mau mencoba  |
| 28–30 mnt | Briefing persiapan teknis + kirimkan checklist                    |

Jika tidak ada sesi intake, masukkan versi ringkas ini di **15 menit pertama Sesi 1.**

---

## VI. Jalur 8 Sesi -- Website Statis (Ekstrakurikuler)

**Target output:** Website statis / portfolio personal yang live di internet
**Stack:** React/Vite + Tailwind + Vercel
**Durasi:** 2-2.5 jam per sesi
**Asumsi:** Siswa awam total, belum pernah coding

---

### Sesi 1 -- Mindset & First Build (2-2.5 Jam)

**Tujuan:** *Semua siswa punya repo GitHub, halaman pertama, dan link live di internet.*

**Sub-Topics (klasikal):**

- **1.1 Demo AI-First di Depan Kelas (20 menit):** Mentor bangun landing page dari prompt dalam 5 menit. Siswa hanya menonton. Reframe: "Saya tidak ketik satu baris kode pun."
- **1.2 Setup Teknis (25 menit):** Checklist alat: GitHub, GitHub Desktop, Antigravity, Vercel. Yang belum terinstall -> install sekarang. Zone D jadi prioritas. Mentor demo di layar, siswa follow.
- **1.3 Problem Brief & PRD Mini (25 menit):** Siswa tulis ide website di kertas. Mentor scope down yang terlalu luas. PRD Mini: nama website, untuk siapa, 3 fitur utama, stack. Wireframe 5 menit.
- **1.4 Guided Build Session (60 menit):** Siswa prompt halaman pertama. Commit setiap selesai. Mentor rotate Zone A/B/C/D. Common errors -> stop dan solved bareng.
- **1.5 GitHub Setup + Deploy (25 menit):** Buat repo, commit pertama, deploy ke Vercel. Semua buka link live. Momen celebration.
- **1.6 Wrap-up & PR (15 menit):** Commit + push. PR: "Tambahkan 1 section baru, commit & push sebelum sesi depan."

---

### Sesi 2 -- Core Pages & Navigation (2-2.5 Jam)

**Tujuan:** *Semua halaman dari PRD ada dan bisa dinavigasi dengan hyperlink.*

**Sub-Topics (klasikal):**

- **2.1 Check-in PR (10 menit):** Siapa yang sudah push? Error apa yang muncul? Common errors solved bareng.
- **2.2 Micro-lesson: Prompt Iterasi (20 menit):** "Sisanya jangan diubah, hanya bagian X." Demo konkret di layar: minta AI ubah satu komponen tanpa mengubah sisanya.
- **2.3 Build Sisa Halaman (75 menit):** Siswa prompt halaman berikutnya. Prioritas: halaman paling penting dulu. Commit setiap selesai. Mentor rotate bantu yang stuck. Jika 3+ siswa stuck di error yang sama -> stop, solved bareng di projector.
- **2.4 Navigation & Routing (20 menit):** Prompt: "Tambahkan navigasi di bagian atas: Home, About, Contact." Siswa tambahkan link antar halaman.
- **2.5 Test Bareng (15 menit):** Klik semua navigasi bersama. Chrome DevTools -> toggle device toolbar (mobile view). Catat yang perlu diperbaiki.
- **2.6 Commit + Wrap-up (10 menit):** Commit + push. PR: "Isi konten nyata di 2 halaman. Push commit."

---

### Sesi 3 -- Polish, Modifikasi Visual & Content (2-2.5 Jam)

**Tujuan:** *Konten nyata, tampilan profesional, siswa memahami cara memodifikasi output AI.*

**Sub-Topics (klasikal):**

- **3.1 Check-in (10 menit):** Review content progress. Catat yang belum terisi.
- **3.2 Micro-lesson: Modifikasi Visual via Prompt (20 menit):** Kenalkan DevTools Inspect. Demo: ubah warna/ukuran font langsung di browser preview. "Prompt ini mirip -- kamu minta AI ubah bagian tertentu."
- **3.3 Polish Session (70 menit):** Prioritas: (1) konten nyata, (2) warna & tipografi, (3) spacing. Siswa prompt perbaikan. Commit setiap selesai. Mentor rotate Zone A/B/C/D.
- **3.4 Mobile Test: HP Nyata (20 menit):** Siswa buka link Vercel di HP sendiri. Bandingkan dengan DevTools mobile view. Catat 3 hal mengganggu.
- **3.5 Final Polish + Commit (15 menit):** Selesaikan catatan mobile. Commit + push.
- **3.6 Wrap-up & PR (5 menit):** PR: "Buka websitemu di HP, catat 3 hal yang masih mengganggu. Perbaiki 1 hal sebelum sesi depan."

---

### Sesi 4 -- Final Polish + Maintenance + Demo (2-2.5 Jam)

**Tujuan:** *Website final selesai, siswa bisa jelaskan cara update website ke orang lain.*

**Sub-Topics (klasikal):**

- **4.1 Demo oleh 2-3 Siswa (20 menit):** Siswa demo websitenya ke kelas: "Ini halaman utama, fungsinya untuk..." Mentor tanya: "Ceritakan apa yang kamu bangun." Bukan formal -- obrolan membangun percaya diri.
- **4.2 Final Fix Session (40 menit):** Selesaikan semua catatan dari sesi lalu. Prioritas: error kritis -> konten -> visual.
- **4.3 Skenario Maintenance: Test Kemandirian (25 menit):** Mentor minta perubahan kecil: "Coba ubah warna header." Siswa kerjakan: prompt -> commit -> push -> cek live. Ini tes kemerdekaan -- kalau siswa bisa, kursus berhasil.
- **4.4 Panduan Maintenance Bareng (25 menit):** Tulis bareng "Panduan Update Website" di Google Docs: (1) Buka repo di GitHub Desktop, (2) Prompt perubahan, (3) Commit, (4) Push, (5) Cek Vercel.
- **4.5 Wrap-up & Graduation (20 menit):** Commit final. Rayakan pencapaian. Foto kelas. Diskusikan next step (CRUD app, Builder Bootcamp, Private mentoring).

---

## VII. Jalur 8 Sesi — Web App CRUD (Ekstrakurikuler)

**Target output:** Web app fungsional dengan database — pencatat keuangan, form pendaftaran OSIS, dll.
**Stack:** React + Supabase + Vercel

> Jika ekskul hanya 8 sesi total dan siswa belum punya website statis, prioritaskan Jalur Website Statis dulu. CRUD bisa jadi kelanjutan jika ada sesi tambahan.

### Sesi 1 — Mindset & Project Scoping (2–2.5 Jam)

**Tujuan:** *Memahami AI-first development dan memvalidasi ide aplikasi dengan database.*

**Sub-Topics (klasikal):**

- **1.1 Demo AI-First (20 menit):** Mentor demonstrasikan bangun landing page + tabel database dari prompt. Siswa hanya menonton. Reframe: "Saya tidak ketik kode."
- **1.2 Ideation Workshop (25 menit):** Siswa tulis ide aplikasi di kertas. Mentor scope down bersama. Tentukan 1 aplikasi kelas yang akan dibangun bersama (atau bagi per kelompok kecil).
- **1.3 Database Design (40 menit):** Demo Supabase Table Editor. Siswa desain tabel di kertas: kolom apa? Tipe data apa? Buat tabel pertama di Supabase bersama.
- **1.4 PRD Mini (20 menit):** Tulis PRD 5 baris: nama app, masalah, user, fitur Must Have, stack. Repo GitHub dibuat.
- **1.5 Wrap-up (5 menit):** Commit pertama. PR: "Desain tabel di Supabase, push screenshot tabel."

### Sesi 2 — Prompt Engineering for App Dev (2–2.5 Jam)

**Tujuan:** *Menguasai prompt multi-step untuk membangun fitur aplikasi.*

**Sub-Topics (klasikal):**

- **2.1 Anatomi Prompt untuk App (20 menit):** Template [KONTEKS] → [YANG DIINGINKAN] → [SPESIFIKASI] → [CONSTRAINT]. Demo konkret di layar.
- **2.2 Prompt Chaining (30 menit):** Fitur kompleks = langkah-langkah kecil. Demo: "Generate form → validasi → connect Supabase" dalam 3 prompt berurutan.
- **2.3 Connect Antigravity ke Project (25 menit):** Siswa generate komponen pertama dari PRD. Mentor demonstrasikan, siswa ikut di laptop masing-masing.
- **2.4 Supabase Integration via AI (30 menit):** Prompt untuk INSERT, SELECT, UPDATE, DELETE. Siswa implement fitur pertama.
- **2.5 Wrap-up (5 menit):** Commit. PR: "Generate 1 fitur CRUD dari tabel yang sudah dibuat."

### Sesi 3 — Build Landing Page & App Foundation (2–2.5 Jam)

**Tujuan:** *Membangun landing page yang mengarahkan ke fitur utama aplikasi.*

**Sub-Topics (klasikal):**

- **3.1 Struktur Landing Page App (20 menit):** Hero + Problem-Solution + Features Overview + CTA. Demo mentor di layar.
- **3.2 Generate UI dengan AI (35 menit):** Siswa prompt landing page menggunakan Antigravity. Commit setiap selesai.
- **3.3 Navigation & Routing (20 menit):** Tambahkan navigasi: Landing → Fitur. Prompt: "Tambahkan React Router."
- **3.4 First Deploy (25 menit):** Deploy MVP shell ke Vercel bersama. Semua buka link live.
- **3.5 Wrap-up (10 menit):** Momen celebration. PR: "Lengkapi landing page, push commit."

### Sesi 4 — Web App Structure & Core CRUD (2–2.5 Jam)

**Tujuan:** *Mengimplementasikan Create, Read, Update, Delete untuk fitur utama.*

**Sub-Topics (klasikal):**

- **4.1 Create — Form Input (25 menit):** Prompt untuk build form CRUD. Demo mentor, siswa ikut.
- **4.2 Read — Tampilkan Data (25 menit):** Prompt untuk fetch dan display data dari Supabase. Empty state harus ada.
- **4.3 Update & Delete (25 menit):** Prompt untuk edit dan hapus. Konfirmasi sebelum hapus.
- **4.4 Common Errors Review (20 menit):** Error yang sama dari 3+ siswa → solved di depan projector.
- **4.5 Wrap-up (15 menit):** Commit + push. Semua fitur CRUD berjalan. PR: "Test alur lengkap: tambah → tampil → edit → hapus."

### Sesi 5 — Database & Backend Integration (2–2.5 Jam)

**Tujuan:** *Mengintegrasikan database: multi-table, relasi, dan real-time.*

**Sub-Topics (klasikal):**

- **5.1 Multi-Table Design (30 menit):** Jika aplikasi butuh tabel tambahan (categories, tags): desain bareng di kertas, buat di Supabase.
- **5.2 Relasi & Fetch (30 menit):** Demo: one-to-many relationship. Fetch data dengan JOIN.
- **5.3 Mid-Program Check (15 menit):** Cek progress tracker. Siswa yang lagging → perhatian extra.
- **5.4 AI Integration Intro (20 menit):** Pengenalan AI features: auto-categorize, smart suggestions. Demo mentor.
- **5.5 Wrap-up (15 menit):** Commit + push. PR: "Tambahkan 1 AI feature."

### Sesi 6 — Enhancement & Feature Development (2–2.5 Jam)

**Tujuan:** *Meningkatkan kualitas: UX polish, error handling, mobile-first.*

**Sub-Topics (klasikal):**

- **6.1 Mobile-First Testing (25 menit):** Siswa buka link Vercel di HP sendiri. Catat 3 hal mengganggu.
- **6.2 UX Polish (30 menit):** Loading states, empty states, error states. Prompt: "Tambahkan loading spinner saat fetch data."
- **6.3 Feature Completion Push (30 menit):** Semua selesaikan fitur Must Have dari PRD. Mentor rotate Zone A/B/C/D.
- **6.4 Wrap-up (25 menit):** Commit + push. PR: "Final polish: mobile test, error handling, push."

### Sesi 7 — Deployment & Publishing (2–2.5 Jam)

**Tujuan:** *Mempublikasikan aplikasi agar bisa diakses publik.*

**Sub-Topics (klasikal):**

- **7.1 Final Deployment Checklist (25 menit):** Environment variables, GitHub up-to-date, Vercel auto-deploy. Semua buka URL live.
- **7.2 Testing & Validation (25 menit):** Test semua fitur di URL live. Bug fixing bareng.
- **7.3 Demo Prep (25 menit):** Siswa prepare demo 3 menit. Mentor bantu script singkat: "Nama, app ini untuk..., fitur utamanya..."
- **7.4 Persiapan Sertifikat (15 menit):** Progress tracker final. Siswa yang belum finish milestone: offered bantuan extra.
- **7.5 Wrap-up (10 menit):** Commit final. Persiapan Sesi 8: demo.

### Sesi 8 — Project Showcase & Graduation (2–2.5 Jam)

**Tujuan:** *Mempresentasikan project dan merayakan pencapaian.*

**Sub-Topics (klasikal):**

- **8.1 Project Demo (60 menit):** Setiap siswa / kelompok demo 3 menit. Struktur: Nama app → Target user → Fitur utama → Demo live. Teman sekelas tanya. Mentor feedback.
- **8.2 Best Project Vote (15 menit):** Kelas vote project terbaik (tanpa voting diri sendiri). Bukan kompetisi berat — celebration.
- **8.3 Graduation & Sertifikat (20 menit):** Bagi sertifikat. Rayakan pencapaian. Foto kelas.
- **8.4 Next Steps (15 menit):** "Kalian sekarang bisa bangun aplikasi yang menyimpan data. Mau lanjut? Tersedia Builder Bootcamp online / Private mentoring.

---

## VIII. Progress Tracker Kelas

Untuk konteks sekolah, **progress tracker harus bisa dilaporkan ke pihak sekolah.** Gunakan Google Sheets yang bisa di-share:

### Template Kolom:

| Kolom              | Isi                               |
| ------------------ | --------------------------------- |
| Nama Siswa         |                                   |
| Project            | Judul website/app                 |
| Sesi 1             | Setup ✓/✗, Page 1 ✓/✗             |
| Sesi 2             | Pages ✓/✗, Commit ✓/✗             |
| Sesi 3             | Content ✓/✗, Mobile ✓/✗           |
| Sesi 4             | Launch ✓/✗, Maintenance guide ✓/✗ |
| Milestone Terakhir | M1 / M2 / M3 / M4                 |
| Catatan            | Hambatan atau achievement khusus  |

> Update tracker setiap akhir sesi. Ini menjadi dasar **laporan bulanan ke sekolah.**

---

## IX. Assessment Rubric — Versi Sekolah

| Komponen                  | Belum Cukup                     | Memenuhi                      | Melebihi                         |
| ------------------------- | ------------------------------- | ----------------------------- | -------------------------------- |
| **Milestone Deliverable** | Error kritis atau belum selesai | Berfungsi sesuai spec         | Berfungsi + polish + edge case   |
| **Prompt Engineering**    | Prompt ambigu                   | Prompt spesifik, hasil sesuai | Prompt efisien + iterasi optimal |
| **Debugging**             | Butuh mentor selesaikan         | Bisa debug dengan AI          | Bantu debug teman sekelas        |
| **Version Control**       | Belum konsisten                 | Commit bermakna, push rutin   | Commit deskriptif, history rapi  |
| **Kemandirian**           | Butuh instruksi terus           | Bisa lanjut antar sesi        | Mulai fitur baru tanpa panduan   |

### Laporan ke Sekolah

**Format laporan bulanan (setiap 4 sesi):**

1. Progress keseluruhan kelas (% siswa per milestone)
2. Highlight: siswa yang berprestasi / breakthrough
3. Hambatan yang dihadapi dan solusinya
4. Rekomendasi untuk sesi berikutnya
5. Rubric assessment per siswa

---

## X. Dropout & Kehadiran Policy

**Minimum komitmen:** 1 semester (atau 8 sesi yang disepakati)

**Kehadiran:**

- Ekskul dianggap kegiatan resmi sekolah — kehadiran mengikuti aturan sekolah
- Jika siswa absen: PR tetap harus dikerjakan. Siswa yangmissed wajib follow up di sesi berikutnya.

**Jika siswa drop out mid-program:**

- Tidak ada refund ke siswa (ini urusan sekolah)
- Mentor tetap menjalankan sesi untuk siswa yang tersisa
- Jika sisa < 5 siswa: pertimbangkan ubah format ke small group

**Jika sekolah membatalkan di tengah:**

- Pembayaran tetap untuk sesi yang sudah berjalan -剩下 sesi tidak wajib dibayar jika sekolah yang batalkan mid-program

---

## XI. Zona Bahaya — Apa yang Perlu Dihindari di Format Sekolah

1. **Jangan biarkan siswa tanpa task di tangan** — kalau menunggu bantuan mentor, mereka akan buka TikTok
2. **Jangan debugging 1-on-1 saat ada 15 orang waiting** — selesaikan common errors secara klasikal
3. **Jangan biarkan technical debt menumpuk** — jika tools belum terinstall di sesi 1, itu akan mengganggu seluruh sesi
4. **Jangan skip the celebration** — siswa perlu merasa bangga dengan hasil mereka, terutama di depan teman sekelas
5. **Jangan ubah scope tanpa konfirmasi** — jika siswa minta fitur baru, gunakan MoSCoW dan tulis di wish list

---

## XII. Komunikasi dengan Sekolah

**Sebelum program dimulai:**

- Kirimkan proposal (已有的 Proposal)
- Koordinasikan jadwal (hari, jam, durasi)
- Pastikan infrastruktur siap (ruangan, proyektor, internet)

**Setiap 4 sesi:**

- Kirim laporan progress ke pembimbing ekskul / bagian kurikulum
- Include: milestone tracker, foto/gambar project siswa, highlight achievement

**Jika ada masalah:**

- Komunikasikan segera ke pembimbing ekskul
- Jangan tunggu masalah membesar

---

_— Kurikulum Vibe Coding, Format Sekolah —_
_Versi 1.1 · 2026-06-23_
