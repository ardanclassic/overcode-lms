# Script Materi: Pertemuan 2 - 06. Membuat Kerangka UI Vite & React (Subbab 2.2)

## ðŸ› ï¸ Bab 2: Seni Berbicara dengan AI (Prompt Engineering Dasar)

### Subbab 2.2: Meminta AI Membuat Kerangka UI Awal Menggunakan Vite & React

Sekarang, mari kita buka laptop kita, jalankan aplikasi **Antigravity IDE**, dan bersiap melakukan praktik perdana kita! 

Pada sesi praktik ini, kita akan meminta asisten AI di Antigravity untuk membangun fondasi awal proyek kita. Kita akan menggunakan sebuah alat bernama **Vite** (dibaca: *Wit*) untuk meluncurkan proyek React kita dengan sangat cepat dan ringan.

Ibarat ingin membangun gedung pencakar langit, langkah pertama kita hari ini adalah **mendirikan tiang pancang baja pertama** dan meratakan tanahnya.

Mari ikuti panduan praktiknya:

---

#### Langkah 1: Membuka Folder Kosong
1. Buat sebuah folder baru di komputer Anda dengan nama `proyek-portofolio`.
2. Buka Antigravity IDE, klik menu **File -> Open Folder**, lalu pilih folder `proyek-portofolio` yang baru Anda buat tadi. 
3. Sekarang, Anda akan melihat sidebar Antigravity masih kosong melompong. Ini adalah kanvas kosong (*blank*) Anda yang siap dinyalakan (*ON*).

---

#### Langkah 2: Mengirimkan Perintah Inisialisasi ke Chat Box
Arahkan pandangan Anda ke kotak obrolan AI di samping layar Antigravity. Ketiklah perintah inisialisasi menggunakan **Formula OverCode Prompt** yang sudah kita pelajari:

> *"Saya ingin membuat proyek website portofolio pribadi. Tolong buatkan inisialisasi kerangka proyek menggunakan Vite, React, dan TypeScript. Hapus semua file template bawaan Vite yang tidak kita perlukan (seperti logo bawaan, file css bawaan yang berantakan, dll) agar struktur foldernya bersih dan rapi. Siapkan satu file utama `App.tsx` yang bersih sebagai tempat kita bekerja."*

Kirim pesan tersebut dengan menekan tombol enter.

---

#### Langkah 3: Menyaksikan AI Bekerja di Latar Belakang
Setelah Anda menekan enter, perhatikan baik-baik sidebar folder Anda dan layar lembar kerja utama. Anda akan melihat keajaiban teknologi bekerja:
1. AI akan secara otomatis menjalankan perintah instalasi di terminal latar belakang.
2. Di sidebar, tiba-tiba akan bermunculan file-file konfigurasi seperti `package.json`, `tsconfig.json`, dan folder `src/`.
3. AI akan membuat file bernama `src/App.tsx`. Jika Anda membukanya, Anda akan melihat file tersebut berisi kode minimalis yang siap ditulis ulang.
4. AI akan membalas chat Anda dengan ramah: *"Halo! Kerangka proyek portofolio Anda menggunakan Vite, React, dan TypeScript telah berhasil saya siapkan secara bersih. File `App.tsx` sudah siap digunakan."*

---

#### Langkah 4: Menjalankan Server Lokal (Melihat Hasilnya)
Sekarang, kita ingin melihat bagaimana bentuk website kita saat dibuka di browser. Tulis perintah berikut ke AI di kotak chat:

> *"Tolong jalankan server lokal untuk proyek ini agar saya bisa melihat tampilannya di browser."*

AI akan otomatis membuka terminal di bagian bawah Antigravity, mengetikkan perintah `npm run dev`, dan menyalakan server lokal komputer Anda. AI kemudian akan memberikan link seperti `http://localhost:5173/`. 

Klik link tersebut! Browser Chrome Anda akan terbuka dan menampilkan halaman kosong bersih yang bertuliskan sapaan awal. 

Selamat! Tiang pancang pertama proyek Anda telah berhasil didirikan oleh asisten AI Anda tanpa Anda harus mengetik perintah hitam terminal satu baris pun!
