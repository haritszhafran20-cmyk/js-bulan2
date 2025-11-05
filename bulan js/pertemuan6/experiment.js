// Nama File: Experiment.js
// Deskripsi: Aplikasi web interaktif untuk membuat profil karakter game sederhana
// berdasarkan input dari form HTML.
// --- AWAL PROGRAM ---

// Tahap 1: Deklarasi Konstanta Utama
const NAMA_GAME = "Petualangan Kode";
const KELAS_KARAKTER = ["Prajurit", "Pemanah", "Penyihir"];
const POIN_AWAL = 100; // Poin default untuk setiap karakter baru.

// Tahap 2: Menghubungkan Elemen HTML ke JavaScript
// Variabel-variabel ini menyimpan referensi ke elemen-elemen di halaman HTML
// agar kita bisa memanipulasinya dengan mudah.
const gameTitleElement = document.getElementById("game-title");
const classOptionsElement = document.getElementById("class-options");
const charNameInput = document.getElementById("char-name");
const extraPowerCheckbox = document.getElementById("extra-power");
const generateBtn = document.getElementById("generate-btn");
const resultCard = document.getElementById("result-card");
const summaryElement = document.getElementById("character-summary");

/**
 * Fungsi untuk menginisialisasi tampilan antarmuka pengguna (UI).
 * Mengatur judul dan membuat pilihan kelas secara dinamis.
 */
function initializeUI() {
    // Mengatur judul game. `innerText` aman digunakan karena kita hanya memasukkan teks.
    gameTitleElement.innerText = `Generator Karakter: ${NAMA_GAME}`;

    // [PERBAIKAN] Menggunakan document.createElement untuk membuat elemen.
    // Ini lebih aman dan efisien daripada menggunakan `innerHTML +=` di dalam loop,
    // karena tidak memaksa browser untuk mem-parsing ulang HTML setiap kali.
    KELAS_KARAKTER.forEach((kelas, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "char-class";
        input.value = kelas;

        // Membuat pilihan pertama (index 0) sebagai default yang tercentang.
        if (index === 0) {
            input.checked = true;
        }

        // Menambahkan input dan teks ke dalam label, lalu menambahkannya ke halaman.
        label.append(input, ` ${kelas}`);
        classOptionsElement.append(label);
    });
}

/**
 * Fungsi utama yang dijalankan saat tombol "Buat Karakter" diklik.
 */
function generateCharacter() {
    // 1. Mengambil Nilai dari Input Form
    // `.value` mengambil teks dari input, `.trim()` menghapus spasi di awal/akhir.
    let namaKarakter = charNameInput.value.trim();
    if (namaKarakter === "") {
        namaKarakter = "Petualang Tanpa Nama";
    }

    // `querySelector` sangat fleksibel. Sintaks ini berarti:
    // - `input`       : Cari elemen <input>.
    // - `[name="..."]`: Yang memiliki atribut 'name' dengan nilai "char-class".
    // - `:checked`    : Dan dalam keadaan sedang tercentang (checked).
    const kelasPilihan = document.querySelector('input[name="char-class"]:checked').value;

    // `.checked` pada checkbox langsung menghasilkan nilai boolean (true atau false).
    const inginKekuatanEkstra = extraPowerCheckbox.checked;

    // 2. Logika Game (Menentukan Senjata dan Poin)
    let senjataSpesial = "Tangan Kosong";
    if (kelasPilihan === "Prajurit") {
        senjataSpesial = "Pedang Legendaris";
    } else if (kelasPilihan === "Pemanah") {
        senjataSpesial = "Busur Elven";
    } else if (kelasPilihan === "Penyihir") {
        senjataSpesial = "Tongkat Sihir Kuno";
    }

    let sisaPoin = POIN_AWAL;
    if (inginKekuatanEkstra) { // Bisa disingkat, karena `inginKekuatanEkstra` sudah boolean
        sisaPoin = sisaPoin - 20;
    }

    // 3. Menampilkan Hasil ke Halaman Web
    // Operator ternary (`? :`) adalah if-else singkat.
    // `kondisi ? nilai_jika_true : nilai_jika_false`
    const ringkasanKarakter = `Nama Karakter: ${namaKarakter}
Kelas        : ${kelasPilihan}
Senjata      : ${senjataSpesial}
Punya Kekuatan Ekstra: ${inginKekuatanEkstra ? "Ya" : "Tidak"}

Sisa Poin Kekuatan: ${sisaPoin}`;

    // Menggunakan `innerText` karena kita hanya ingin menampilkan teks biasa, ini lebih aman.
    summaryElement.innerText = ringkasanKarakter;

    // Menampilkan kartu hasil yang tadinya tersembunyi
    resultCard.classList.remove("hidden");

    // 4. Logging di console untuk debugging
    console.log("Karakter berhasil dibuat:", {
        nama: namaKarakter,
        kelas: kelasPilihan,
        kekuatanEkstra: inginKekuatanEkstra,
        sisaPoin: sisaPoin
    });
}

// --- ALUR UTAMA PROGRAM ---

// 1. Panggil fungsi untuk menyiapkan tampilan awal saat halaman dimuat.
initializeUI();

// 2. Tambahkan "pendengar acara" ke tombol. Saat tombol diklik,
//    jalankan fungsi `generateCharacter`.
generateBtn.addEventListener("click", generateCharacter);

// --- AKHIR PROGRAM ---
