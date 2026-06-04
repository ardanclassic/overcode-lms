# Script Materi: Pertemuan 7 - 04. Teknik Copy-Paste Error ke AI (Subbab 2.1)

## 📖 Bab 2: Meminta AI Menjadi "Montir" Pribadi

### Subbab 2.1: Teknik Copy-Paste Error Log yang Benar ke dalam Kotak Obrolan AI

Sekarang kita sudah berhasil menemukan teks merah eror di panel Console browser kita. Sebagai Vibe Coder, Anda tidak perlu pusing memikirkan bagaimana cara memperbaiki baris kode JavaScript tersebut sendirian. Anda memiliki asisten AI Antigravity yang bertindak sebagai **Montir Pribadi** Anda yang sangat ahli.

Namun, agar sang montir bisa mendiagnosis kerusakan mobil Anda dengan tepat, Anda harus memberikan laporan kerusakan yang jelas. Mengirim pesan singkat seperti: _"AI, website saya eror, tolong diperbaiki"_ adalah cara berkomunikasi yang sangat buruk. AI tidak bisa melihat layar browser Anda secara langsung, sehingga ia akan bingung dan mulai meraba-raba memberikan solusi acak.

Mari kita pelajari teknik **Copy-Paste Error Log** yang terstruktur agar AI bisa memberikan solusi yang jitu dan cepat.

---

### Langkah 1: Blokir dan Salin (Copy) Teks Merah Eror Selengkapnya

1. Pergilah ke panel Console browser Anda.
2. Arahkan kursor Anda ke teks merah eror yang muncul. Lakukan blokir teks tersebut dari awal baris pesan eror hingga akhir.
3. Klik kanan dan pilih **"Copy"** (Salin) atau tekan tombol **Ctrl + C**.
4. Jika eror tersebut menunjukkan lokasi file (misalnya ada tulisan `App.tsx:24` di ujung kanan), salin juga nama file dan nomor baris tersebut!

---

### Langkah 2: Susun Prompt dengan Konteks File yang Jelas

Saat memberikan pesan eror ke AI, Anda harus menyertakan kode file tempat eror itu terjadi. Buka panel AI Antigravity, lalu susun pesan Anda dengan struktur berikut:

1. **Jelaskan apa yang sedang Anda coba lakukan (Niat Anda)**.
2. **Sebutkan nama file tempat Anda mencurigai kerusakan terjadi**.
3. **Tempelkan (Paste) pesan eror merah dari browser**.
4. **Berikan isi file kode Anda saat ini**.

---

### Contoh Prompt Komunikasi yang Baik dan Benar

Berikut adalah contoh cetak biru prompt penyelidikan eror yang sangat disukai oleh AI:

> \*"Halo asisten AI. Saya sedang mencoba membuat fitur kirim formulir ke database Supabase, namun ketika saya klik tombol kirim, data gagal masuk dan muncul pesan eror merah berikut di Console browser saya:
>
> `POST https://xyzabc.supabase.co/rest/v1/messages 404 (Not Found)`
> `at sendData (App.tsx:28)`
>
> File yang saya gunakan saat ini adalah `src/App.tsx`. Berikut adalah kode lengkap di dalam file tersebut saat ini:
>
> [TEMPELKAN / PASTE SELURUH KODE DARI FILE App.tsx DI SINI]
>
> Tolong analisis di mana letak kesalahannya, jelaskan penyebabnya dengan bahasa sederhana, dan berikan kode perbaikan lengkapnya untuk saya."\*

---

### Mengapa Struktur Prompt Ini Sangat Ampuh?

Dengan memberikan laporan lengkap seperti di atas:

- AI langsung tahu bahwa erornya adalah status **404 (Not Found)**, yang artinya alamat tabel tujuan tidak ditemukan di database Supabase.
- AI melihat bahwa eror terjadi di baris **28** pada file `App.tsx` di dalam fungsi `sendData`.
- AI membaca kode Anda dan menyadari bahwa Anda menuliskan nama tabelnya sebagai `message` (tanpa huruf 's'), padahal tabel asli di Supabase Anda beri nama `messages` (dengan huruf 's' jamak).

AI akan segera membalas: _"Ah, saya menemukan masalahnya! Ada ketidaksesuaian nama tabel di baris 28. Silakan ubah kata 'message' menjadi 'messages'."_

Hanya dalam waktu satu menit, eror terpecahkan! Anda belajar satu hal baru tentang ketelitian nama file, dan website Anda kembali menyala normal tanpa rasa stres.

Di subbab berikutnya, kita akan membahas tantangan tingkat lanjut: bagaimana jika AI kita melakukan kesalahan berulang-ulang (berhalusinasi), dan bagaimana cara memundurkan waktu proyek kita menggunakan Git Commit!
