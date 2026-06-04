# Script Materi: Pertemuan 4 - 04. Menghubungkan GitHub ke Vercel (Subbab 2.1)

## 🛠️ Bab 2: Proses Eksekusi Deployment

### Subbab 2.1: Cara Menghubungkan Repositori GitHub ke Vercel / Netlify

Saatnya kita melakukan praktik eksekusi peluncuran! 

Sebelum memulai, pastikan Anda sudah melakukan satu hal wajib: **Kode terbaru website Anda di laptop sudah ter-Push dengan aman ke akun GitHub Anda** (sesuai praktik Pertemuan 3 lalu). 

Sekarang, mari ikuti panduan langkah demi langkah untuk mendaftar dan menyambungkan GitHub Anda ke Vercel:

---

#### Langkah 1: Membuka Halaman Vercel & Mendaftar
1. Buka browser peramban di laptop Anda, lalu akses website `vercel.com`.
2. Klik tombol **"Sign Up"** (Daftar) di pojok kanan atas layar.
3. Anda akan disuguhi beberapa opsi pendaftaran. Pilihlah opsi **"Continue with GitHub"** (Lanjut dengan GitHub). 
   *Kenapa kita memilih ini?* Agar kita tidak perlu mengetik biodata baru, membuat password baru, atau melakukan verifikasi email yang panjang. Vercel akan langsung menggunakan akun GitHub Anda sebagai identitas tepercaya.
4. Jendela pop-up persetujuan dari GitHub akan muncul. Klik tombol hijau **"Authorize Vercel"** (Izinkan Vercel) untuk menyetujui jembatan kerja sama antara kedua aplikasi ini.
5. Selesaikan survei singkat (pilih tipe akun "Personal / Hobby" dan isi kolom dengan nama Anda). Anda tidak akan dimintai informasi kartu kredit sama sekali.

---

#### Langkah 2: Mengimpor Repositori Proyek
Setelah berhasil masuk ke dalam halaman utama (*Dashboard*) Vercel, mari kita impor proyek kita:
1. Klik tombol **"Add New"** (Tambah Baru) berwarna biru di pojok kanan atas, lalu pilih opsi **"Project"** (Proyek).
2. Anda akan diarahkan ke halaman daftar repositori GitHub Anda. Di bagian ini, Vercel akan menampilkan daftar proyek yang tersimpan di dalam akun GitHub Anda.
3. Cari nama repositori proyek Anda (misalnya: `proyek-portofolio`), lalu tekan tombol **"Import"** (Impor) di sebelah kanan nama proyek tersebut.

---

#### Langkah 3: Pengaturan Konfigurasi Proyek (Project Settings)
Setelah menekan tombol impor, Anda akan melihat halaman pengaturan proyek. 
- *Kabar baiknya:* Vercel adalah sistem yang sangat cerdas. Dia akan mendeteksi secara otomatis bahwa proyek Anda dibangun menggunakan **Vite** dan **React**.
- Semua kolom konfigurasi (seperti *Framework Preset*, *Root Directory*, dan *Build Commands*) akan terisi secara otomatis dengan nilai yang benar. 
- Anda **tidak perlu mengubah satu pun kolom pengaturan** tersebut. Biarkan nilainya sesuai dengan bawaan pabrik.

Tugas Anda di halaman ini hanyalah satu: menekan tombol biru besar di bagian paling bawah yang bertuliskan **"Deploy"** (Luncurkan!). 

Mari kita bersiap menyaksikan proses keajaiban deployment otomatis di subbab berikutnya!
