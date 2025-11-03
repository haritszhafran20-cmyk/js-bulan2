// ===== Basic Controls =====
function clearOutput() {
  document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
  const output = document.getElementById("outputBox");
  output.innerText += "\n======================\n";
}

// ===== F1 - F10 =====
function f1() {
  const hasil = 5 + 10;
  document.getElementById("outputBox").innerText += `F1: 5 + 10 = ${hasil}\n`;
}

function f2() {
  const teks = "Belajar JavaScript itu asik!";
  document.getElementById("outputBox").innerText += `F2: ${teks.toUpperCase()}\n`;
}

function f3() {
  const data = ["Aldi", "Budi", "Cici", "Dodi"];
  const output = document.getElementById("outputBox");
  output.innerText += "F3: Daftar Nama:\n";
  for (let i = 0; i < data.length; i++) {
    output.innerText += `${i + 1}. ${data[i]}\n`;
  }
}

function f4() {
  const random = Math.floor(Math.random() * 100);
  document.getElementById("outputBox").innerText += `F4: Angka acak = ${random}\n`;
}

function f5() {
  const waktu = new Date().toLocaleString();
  document.getElementById("outputBox").innerText += `F5: Sekarang waktu menunjukkan ${waktu}\n`;
}

function f6() {
  const kalimat = "paksa terbiasa bisa luar biasa";
  document.getElementById("outputBox").innerText += `F6: Kalimat dibalik = ${kalimat.split("").reverse().join("")}\n`;
}

function f7() {
  let total = 0;
  for (let i = 1; i <= 5; i++) total += i;
  document.getElementById("outputBox").innerText += `F7: Total penjumlahan 1–5 = ${total}\n`;
}

function f8() {
  const nilai = [80, 75, 90, 85];
  const rata = nilai.reduce((a, b) => a + b, 0) / nilai.length;
  document.getElementById("outputBox").innerText += `F8: Rata-rata nilai = ${rata}\n`;
}

function f9() {
  const kata = "Rumah IT";
  document.getElementById("outputBox").innerText += `F9: Panjang kata "${kata}" = ${kata.length} karakter\n`;
}

function f10() {
  document.getElementById("outputBox").innerText += "F10: Terima kasih sudah menjalankan semua fungsi 🎉\n";
  alert("Selesai! Semua fungsi F1–F10 sudah aktif 🚀");
}
