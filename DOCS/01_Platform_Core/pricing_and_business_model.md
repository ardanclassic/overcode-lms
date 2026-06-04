# Pricing Strategy & Business Model (OverCode)

Sebagai sebuah platform **B2B2C Educational Marketplace & Tutor Companion**, OverCode bertindak sebagai infrastruktur perantara antara Guru (Tutor independen) dan Murid. Oleh karena itu, strategi monetisasi platform difokuskan pada nilai (value) yang diberikan kepada Guru sebagai penyewa _Basecamp_.

Mengingat platform **belum menggunakan Payment Gateway otomatis**, maka kita perlu merancang model bisnis yang memenuhi tiga syarat:

1. **Daya Tarik Kuat:** Mudah memikat guru baru tanpa risiko.
2. **Adil bagi Guru:** Potongan komisi fleksibel agar guru kecil tidak tercekik.
3. **Mengunci Guru Besar & Mengontrol Beban Server:** Memberikan diskon kuantitas, namun memberikan tarif "Overage" jika beban server (skala murid) sudah terlalu raksasa.

Oleh karena itu, strategi paling mutakhir yang akan digunakan adalah **Model Pertumbuhan Berjenjang (Tiered Scale-Up Model)** yang diadaptasi dari sistem _Backend-as-a-Service_ (BaaS) modern seperti Supabase.

---

## Model: Tiered Scale-Up (Bagi Hasil & Tarif Overage)

Sistem ini membagi biaya (token fee) berdasarkan pencapaian jumlah murid dalam satu _Basecamp_, dengan batasan (_threshold_) yang masuk akal untuk kelas bimbingan belajar.

### Mengapa Threshold 50 Murid?

Dalam dunia nyata, satu kelas bimbingan belajar (_live class_) biasanya berisi 10-30 murid. Jika seorang guru memiliki lebih dari 50 murid di dalam satu _Basecamp_, itu berarti mereka menjalankan operasi skala besar (Webinar/Mass-Market). Di skala ini, fitur platform (seperti sinkronisasi _Realtime Attendance_ untuk 50+ orang secara bersamaan) mulai memakan daya _server_ yang lebih tinggi.

### Skema Tarif per Murid (Per Basecamp):

1. **Tier 1: Starter (Murid ke 1 - 5) ➡️ 100% GRATIS**
   - **Tujuan:** _Hook_ (Kail). Menghilangkan keraguan. Guru bebas menguji platform.

2. **Tier 2: Growth (Murid ke 6 - 20) ➡️ Bagi Hasil 10%**
   - **Tujuan:** Adil bagi guru yang baru berkembang.
   - **Mekanisme:** Potongan 10% dari Harga Resmi (Minimal Rp 5.000). Didukung dengan _Transparansi Harga di Layar Murid_ agar guru tidak berbohong soal harga asli kelas.

3. **Tier 3: Pro (Murid ke 21 ke atas) ➡️ Tarif Flat Rp 10.000**
   - **Tujuan:** _Reward_ diskon volume. Platform menghadiahi guru yang sukses membawa banyak murid (bahkan jika itu kelas besar seperti webinar) dengan memangkas biaya dari persentase menjadi tarif flat yang sangat murah (Rp 10.000). - Jika guru B jual kelas seharga Rp 1.000.000, dia hanya perlu bayar Rp 10.000 ke OverCode untuk setiap murid tambahannya! Guru akan merasa sangat diuntungkan dan loyal.

---

## Mekanisme Eksekusi: "Sistem Saldo Prabayar"

Agar Admin tidak repot mengejar-ngejar hutang bulanan:

1. Guru wajib mengisi "Saldo Rupiah" (Deposit Prabayar) ke rekening Admin OverCode.
2. Ketika murid mendaftar menggunakan _Enrollment Code_, sistem secara otomatis membaca murid tersebut berada di urutan/Tier ke berapa, lalu memotong saldo guru sesuai algoritma di atas.
3. Jika saldo guru tidak mencukupi untuk membayar tarif tiket murid tersebut, _Enrollment Code_ terkunci otomatis hingga guru melakukan _Top-Up_.

---

## Strategi Diskon & Voucher (Promo Event)

Mengingat platform OverCode **tidak memegang uang murid secara langsung**, maka pemberian Voucher Diskon **WAJIB DITUJUKAN KEPADA GURU**, bukan kepada murid.

### Mengapa bukan untuk murid?

Jika platform memberi kode promo `DISKON50` kepada murid, murid akan menuntut potongan harga 50% ke guru saat transfer BCA. Ini akan membuat guru marah karena platform mengintervensi pendapatan mereka.

### Bagaimana Voucher Guru Bekerja?

Karena Guru adalah _Customer_ sesungguhnya dari platform (B2B), OverCode bisa merilis kode Voucher untuk diskon **Top-Up Saldo/Token**.

- **Contoh Kasus:** Promo Hari Guru Nasional. Admin merilis kode `HARIGURU24`.
- **Keuntungan Guru:** Saat Guru melakukan _Top-Up_ saldo Rp 100.000 di aplikasi dan memasukkan kode tersebut, sistem akan memberikan **Bonus Saldo 50%**. Jadi saldo yang masuk ke akun Guru adalah Rp 150.000!
- **Efek Domino:** Karena biaya operasional guru menjadi sangat murah berkat subsidi saldo dari platform, guru tersebut akan dengan senang hati mengadakan promo diskon mandiri untuk murid-muridnya.

### Kesimpulan

Model _Tiered Scale-Up_ ini menjawab semua masalah. Ia bertindak sebagai magnet bagi guru pemula (Tier 1), adil bagi guru menengah (Tier 2), dan sangat memanjakan guru/bimbel skala besar yang menggelar webinar massal karena mematok batas harga flat (Tier 3). Dipadukan dengan sistem **Voucher Top-Up**, Anda memiliki senjata _marketing_ yang sangat mematikan.
