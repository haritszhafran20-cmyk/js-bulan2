// Nama File: Practice.js
// Deskripsi: Program ini mensimulasikan perhitungan diskon di kasir
// berdasarkan total belanja yang dimasukkan oleh pengguna.

// --- AWAL PROGRAM ---

// Tahap 1: Deklarasi Konstanta
// Di sini kita menggunakan `const` untuk menyimpan nilai-nilai yang bersifat tetap
// dan tidak akan berubah selama program berjalan. Ini adalah praktik terbaik
// untuk menjaga konsistensi data dan mencegah perubahan yang tidak disengaja.

const NAMA_TOKO = "Toko Kode Bahagia"; // Menyimpan nama toko sebagai String.
const DISKON_PERSEN = 15; // Menyimpan nilai diskon dalam bentuk angka (Number).
const MINIMAL_BELANJA_DISKON = 50000; // Menyimpan syarat minimal belanja untuk dapat diskon.

// Tahap 2: Interaksi Awal dengan Pengguna
// `alert()` adalah fungsi bawaan JavaScript untuk menampilkan kotak dialog
// dengan pesan kepada pengguna. Di sini kita menggunakan template literal (backtick `` ` ``)
// untuk menyisipkan variabel `NAMA_TOKO` langsung ke dalam string.
alert(`Selamat datang di ${NAMA_TOKO}!`);

// Tahap 3: Menerima Input dan Deklarasi Variabel `let`
// Kita menggunakan `let` karena nilai `totalBelanja` akan didapatkan dari pengguna
// dan bisa jadi akan diubah (misalnya, dikonversi tipe datanya).
// `prompt()` adalah fungsi untuk menampilkan dialog yang meminta input dari pengguna.
// Input yang diterima dari `prompt()` selalu dalam bentuk String.
let totalBelanja = prompt("Masukkan total belanja Anda:");

// Tahap 4: Konversi Tipe Data (Type Conversion)
// Karena `totalBelanja` masih berupa String, kita perlu mengubahnya menjadi Number
// agar bisa digunakan dalam perhitungan matematika.
// `Number()` adalah fungsi untuk mengkonversi nilai lain menjadi tipe data Number.
totalBelanja = Number(totalBelanja);

// Tahap 5: Logika Kondisional (Pengambilan Keputusan)
// `if-else` adalah struktur kontrol yang memungkinkan program menjalankan blok kode
// yang berbeda berdasarkan kondisi tertentu.

// `if (totalBelanja >= MINIMAL_BELANJA_DISKON)`
// Ini adalah kondisi utama. Kode di dalam blok `{...}` ini hanya akan berjalan
// JIKA nilai `totalBelanja` lebih besar atau sama dengan `MINIMAL_BELANJA_DISKON`.
// `>=` adalah operator perbandingan "lebih besar atau sama dengan".
if (totalBelanja >= MINIMAL_BELANJA_DISKON) {
  // Blok ini dijalankan jika pengguna berhak mendapatkan diskon.

  // Menghitung jumlah diskon yang didapat.
  // Rumus: total belanja * (persen diskon / 100)
  const jumlahDiskon = totalBelanja * (DISKON_PERSEN / 100);

  // Menghitung total yang harus dibayar setelah dipotong diskon.
  const totalBayar = totalBelanja - jumlahDiskon;

  // Menampilkan rincian pembayaran kepada pengguna menggunakan `alert()`.
  // Karakter `\n` digunakan untuk membuat baris baru dalam teks alert.
  alert(
    `Selamat! Anda mendapatkan diskon ${DISKON_PERSEN}%.\n` +
    `Total Belanja: Rp${totalBelanja}\n` +
    `Potongan Harga: Rp${jumlahDiskon}\n` +
    `Total yang harus dibayar: Rp${totalBayar}`
  );
} else {
  // `else`
  // Blok ini akan dijalankan JIKA kondisi `if` di atas tidak terpenuhi (false).
  // Artinya, total belanja pengguna kurang dari minimal untuk dapat diskon.

  // Menghitung berapa banyak lagi belanja yang dibutuhkan untuk dapat diskon.
  const kurangBelanja = MINIMAL_BELANJA_DISKON - totalBelanja;

  // Memberi tahu pengguna bahwa mereka belum dapat diskon dan apa syaratnya.
  alert(
    `Total belanja Anda adalah Rp${totalBelanja}.\n` +
    `Belanja Rp${kurangBelanja} lagi untuk mendapatkan diskon ${DISKON_PERSEN}%.`
  );
}

// Tahap 6: Pesan Penutup
// `alert()` ini akan selalu dijalankan setelah blok `if-else` selesai,
// sebagai pesan penutup untuk pengguna.
alert(`Terima kasih telah berbelanja di ${NAMA_TOKO}!`);

// --- AKHIR PROGRAM ---
