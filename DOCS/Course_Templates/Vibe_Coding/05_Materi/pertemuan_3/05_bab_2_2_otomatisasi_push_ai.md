# Script Materi: Pertemuan 3 - 05. Otomatisasi Push dengan AI (Subbab 2.2)

## ðŸ“– Bab 2: Sinkronisasi ke Cloud (GitHub)

### Subbab 2.2: Cara Menyuruh AI Melakukan Commit dan Push ke GitHub secara Otomatis

Bagi programmer tradisional, melakukan Git Commit dan Push adalah ritual yang melelahkan. Mereka harus membuka layar hitam terminal (*Command Prompt / PowerShell*), lalu mengetikkan baris perintah alien seperti:
- `git add .`
- `git commit -m "update navbar"`
- `git push origin main`

Jika ada salah ketik satu huruf saja, terminal akan menampilkan pesan merah panjang yang membingungkan. 

Sebagai seorang Vibe Coder di OverCode Academy, Anda memiliki keistimewaan. Anda **tidak perlu menyentuh atau mengetik perintah terminal alien tersebut sama sekali!** 

Tugas mengetik perintah rumit itu akan didelegasikan sepenuhnya kepada asisten AI pintar kita di Antigravity IDE. Kita cukup memerintahkan AI menggunakan bahasa sehari-hari.

Mari ikuti panduan praktiknya:

---

#### Langkah 1: Memastikan Hasil Kerja Sudah Berfungsi
Sebelum meminta AI mengambil "foto penyelamatan" (Commit), pastikan dulu bahwa perubahan terakhir pada website Anda sudah berjalan dengan baik di browser lokal (`http://localhost:5173/`). Jangan pernah menyimpan titik aman saat website Anda sedang rusak parah, kecuali Anda sengaja ingin menyimpan riwayat kerusakannya.

---

#### Langkah 2: Mengirimkan Instruksi ke Kotak Obrolan AI
Buka kolom chat di Antigravity IDE. Kita akan mengetikkan perintah untuk menyuruh AI melakukan proses penyimpanan aman. Gunakan instruksi yang jelas:

> *"Asisten AI, saya baru saja selesai merapikan bagian kartu profil dan menambahkan tombol sosial media di file `App.tsx`. Tolong buatkan titik aman (Commit) dengan pesan 'Pembaruan kartu profil Budi selesai', lalu dorong (Push) kodenya ke repositori GitHub saya sekarang."*

---

#### Langkah 3: Mengamati AI Bekerja di Terminal
Setelah Anda menekan enter, perhatikan baik-baik sisi bawah layar Antigravity Anda:
1. Anda akan melihat jendela terminal kecil terbuka secara otomatis.
2. AI akan mengetikkan perintah-perintah Git (`git add`, `git commit`, `git push`) dengan sangat cepat seperti kilat di terminal tersebut.
3. Begitu proses selesai, AI akan membalas pesan Anda di kolom chat: *"Selesai! Saya telah membuat commit lokal dan berhasil mengunggah kode terbaru Anda ke GitHub. Anda bisa memeriksa riwayatnya di akun GitHub Anda."*

---

#### Langkah 4: Memverifikasi di Website GitHub
Ayo kita buktikan apakah kiriman AI kita benar-benar sampai di awan:
1. Buka browser Anda, akses `github.com`, lalu masuk ke halaman repositori proyek Anda.
2. Anda akan melihat tulisan pesan commit Anda: *"Pembaruan kartu profil Budi selesai"* terpampang di sana, lengkap dengan keterangan waktu (misalnya: *1 minute ago*).

Selamat! Anda baru saja berhasil mengamankan proyek Anda ke brankas internet GitHub tanpa perlu menulis baris perintah command line satu huruf pun. Di pertemuan berikutnya, kita akan menggunakan jembatan GitHub ini untuk membuat website kita hidup online di internet secara otomatis!
