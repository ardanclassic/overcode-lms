# Panduan Deployment OverCode ke Cloudflare Pages (OpenNext)

Mendeploy aplikasi Next.js (App Router) ke ekosistem Cloudflare sangat menguntungkan karena cepat, terdistribusi secara global (Edge Network), dan sangat hemat biaya.

Mulai versi Next.js 14/15+, Cloudflare secara resmi merekomendasikan **OpenNext** (`@opennextjs/cloudflare`) sebagai _adapter_ utama untuk menjalankan Next.js di infrastruktur Cloudflare Workers/Pages, menggantikan `@cloudflare/next-on-pages` yang sudah usang (_deprecated_).

OpenNext jauh lebih tangguh karena mendukung lebih banyak fitur bawaan Next.js (seperti _Middleware_, _Image Optimization_, ISR, dan _Global Cache_).

---

## Tahap 1: Setup OpenNext di Local Project

Pastikan Anda sudah menginstal dependensi OpenNext dan menghapus _adapter_ versi lama.

1. **Hapus adapter usang (jika ada):**

   ```bash
   npm uninstall @cloudflare/next-on-pages
   ```

2. **Inisialisasi OpenNext secara otomatis:**
   Jalankan perintah berikut di terminal root project Anda. Perintah ini akan mengatur _config_ dan paket yang dibutuhkan (seperti `wrangler.toml`).

   ```bash
   npx @opennextjs/cloudflare@latest migrate
   ```

3. **Pastikan Script Build di `package.json` sudah benar:**
   Cek bagian `"scripts"` di `package.json`. Harusnya sudah ditambahkan (atau Anda bisa menyesuaikannya):
   ```json
   "scripts": {
     "pages:build": "npx @opennextjs/cloudflare"
   }
   ```

> [!NOTE]
> **Catatan mengenai File System (`fs`) pada SSG:**
> Kode kita di modul `Partner Overview` (`DOCS/v2`) membaca file Markdown menggunakan `fs` (file system lokal). Dalam arsitektur Serverless/Edge Cloudflare, proses pembacaan file dinamis (_runtime_) tidak dimungkinkan.
>
> Namun, karena kita menggunakan metode **Static Site Generation (SSG)** (`generateStaticParams`), modul `fs` tersebut hanya dijalankan secara otomatis saat proses _build time_ (sebelum website mengudara). Setelah sukses _deploy_, halaman `/overview` sudah berbentuk HTML statis yang super ringan. **Ini 100% aman.**

---

## Tahap 2: Metode Deployment (Via Cloudflare Dashboard)

Metode ini sangat direkomendasikan karena terhubung langsung ke GitHub. Setiap kali Anda melakukan `git push` ke repositori `ardanclassic/overcode-lms`, Cloudflare akan otomatis membangun ulang situs Anda.

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Di panel navigasi sebelah kiri, pilih **Workers & Pages**.
3. Klik tombol **Create application**, lalu pilih tab **Pages**.
4. Pilih **Connect to Git** dan hubungkan akun GitHub Anda.
5. Pilih repositori `overcode-lms`.
6. Di halaman konfirmasi **Set up builds and deployments**, konfigurasikan hal berikut:
   - **Framework preset:** `None` atau biarkan kosong (karena kita akan pakai command spesifik OpenNext).
   - **Build command:** `npm run pages:build` (atau `npx @opennextjs/cloudflare`).
   - **Build output directory:** `.worker-next/assets` (Ini adalah direktori hasil _build_ standar dari OpenNext Cloudflare. Harap perhatikan output saat Anda men-jalankan build lokal jika direktorinya berbeda, misal `.open-next/assets`).
7. Buka menu akordeon **Environment variables (advanced)**, masukkan variabel lingkungan rahasia dari `.env` Anda (contohnya Supabase):
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://[PROJECT_ID].supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[YOUR_ANON_KEY]`
8. Klik **Save and Deploy**.

Cloudflare akan mulai mengkloning project Anda dan menjalankan proses _build_. Setelah selesai, Anda akan mendapatkan URL sementara seperti `https://overcode-lms.pages.dev`.

---

## Tahap 3: Custom Domain (Opsional tapi Direkomendasikan)

Setelah project berhasil mengudara di `*.pages.dev`, Anda dapat mengarahkan domain profesional perusahaan Anda secara cuma-cuma:

1. Di dalam Dashboard Pages project Anda, masuk ke tab **Custom Domains**.
2. Klik **Set up a custom domain**.
3. Masukkan domain Anda (misal: `lms.overcode.id`). Cloudflare akan secara otomatis mengatur DNS dan menerbitkan sertifikat SSL (_https_) gratis untuk Anda.

Selamat! Project OverCode Anda sekarang telah beroperasi secara global dengan performa maksimal di Cloudflare Network.
