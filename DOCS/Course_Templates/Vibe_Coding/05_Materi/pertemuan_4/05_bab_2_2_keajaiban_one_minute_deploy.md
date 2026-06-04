# Script Materi: Pertemuan 4 - 05. Keajaiban Deployment dalam 1 Menit (Subbab 2.2)

## 🛠️ Bab 2: Proses Eksekusi Deployment

### Subbab 2.2: Menikmati "Keajaiban" Deployment dalam 1 Menit

Setelah Anda menekan tombol biru **"Deploy"** di Vercel pada subbab sebelumnya, Anda akan disuguhi layar hitam kecil yang menampilkan baris-baris proses perakitan. 

Proses ini bekerja di dalam superkomputer Vercel di awan. Mari kita amami keajaiban apa yang terjadi selama 60 detik ini:

---

#### 1. Apa yang Dilakukan Vercel Selama 60 Detik?
- **Mengunduh Kode:** Vercel mengambil salinan kode React dan Tailwind Anda dari GitHub.
- **Menginstal Bahan:** Vercel memasang semua modul (*library*) pendukung proyek Anda.
- **Merakit Menjadi Website Jadi (Build):** Vercel mengompilasi kode TypeScript dan React yang rumit menjadi berkas-berkas HTML, CSS, dan JavaScript murni yang super ringan dan siap dibaca oleh browser HP pengunjung.
- **Menyebarkan ke Internet:** Vercel menaruh berkas jadi tersebut ke ratusan server mereka di seluruh dunia.

---

#### 2. Layar Kelulusan & Hujan Konfeti
Setelah proses perakitan selesai (biasanya berkisar antara 45 hingga 60 detik), layar Vercel Anda akan berubah total. 
- Anda akan melihat tampilan mini dari website Anda.
- Layar Anda akan dibanjiri animasi hujan kertas warna-warni (*Confetti*) yang meriah, bertuliskan pesan: **"Congratulations! You just deployed a new project to Vercel."**
- Selamat! Ini adalah momen kelulusan pertama Anda sebagai pembuat software. Website Anda kini sudah resmi mengudara di jagat internet publik!

---

#### 3. Mendapatkan Alamat URL Resmi Anda
Di layar tersebut, Vercel akan memberikan sebuah tautan alamat resmi gratis yang bisa langsung diklik, contohnya: `budi-portofolio.vercel.app`.
- Anda bisa menguji mengeklik tautan tersebut. 
- Website Anda akan terbuka dengan cepat di tab baru. 
- Sekarang, cobalah ambil handphone Anda, buka browser di HP, lalu ketikkan alamat tautan tersebut. Ajaib! Website portofolio buatan Anda tampil dengan sangat indah di layar HP Anda!

---

#### 4. Kehebatan Pembaruan Otomatis (Continuous Deployment)
Inilah bagian terbaik dari integrasi Git, GitHub, dan Vercel. 

Bayangkan besok Anda ingin mengubah teks biodata Anda karena ada kesalahan ejaan. 
- Anda tidak perlu membuka website Vercel lagi. 
- Anda cukup mengedit kodenya di Antigravity IDE, lalu menyuruh AI melakukan **Commit & Push** ke GitHub seperti pertemuan kemarin.
- Begitu kode terkirim ke GitHub, sistem Vercel akan langsung mendeteksi perubahan tersebut. Vercel akan secara otomatis membangun ulang proyek Anda dalam waktu 30 detik tanpa campur tangan Anda. 
- Begitu Anda me-*refresh* halaman browser HP Anda, perubahan teks biodata baru tersebut akan langsung muncul secara instan! 

Sistem otomatisasi inilah yang digunakan oleh raksasa teknologi untuk merilis fitur baru setiap harinya dengan aman dan tanpa hambatan. Dan Anda baru saja berhasil memasangnya sendiri!
