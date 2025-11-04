// ================================
// Variabel Global & Akses di Dalam Fungsi
// ================================
let namaGlobal = "Zhafran";

function sapa() {
  console.log("Halo, " + namaGlobal + "!");
}

sapa();
//  Output:
// Halo, Zhafran!


// ================================
//  Uji Coba Hoisting
// ================================

console.log("=== Uji Hoisting dengan var ===");
console.log(a); // undefined (var di-hoist tapi belum diinisialisasi)
var a = 10;
console.log(a); // 10
//  Output:
// === Uji Hoisting dengan var ===
// undefined
// 10


console.log("=== Uji Hoisting dengan let ===");
try {
  console.log(b); // Error karena belum terdefinisi
} catch (e) {
  console.log("Error:", e.message);
}
let b = 20;
console.log(b); // 20
//  Output:
// === Uji Hoisting dengan let ===
// Error: Cannot access 'b' before initialization
// 20


console.log("=== Uji Hoisting dengan const ===");
try {
  console.log(c); // Error juga
} catch (e) {
  console.log("Error:", e.message);
}
const c = 30;
console.log(c); // 30
// Output:
// === Uji Hoisting dengan const ===
// Error: Cannot access 'c' before initialization
// 30


// ================================
// Fungsi Closure (Menyimpan Saldo)
// ================================
function buatAkun(saldoAwal) {
  let saldo = saldoAwal;

  return function(tambahSaldo) {
    saldo += tambahSaldo;
    return `Saldo sekarang: Rp${saldo}`;
  };
}

// Membuat akun dengan saldo awal Rp1000
const akunZhafran = buatAkun(1000);

console.log(akunZhafran(500));  //  Output: Saldo sekarang: Rp1500
console.log(akunZhafran(200));  //  Output: Saldo sekarang: Rp1700
console.log(akunZhafran(300));  //  Output: Saldo sekarang: Rp2000
