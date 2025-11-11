// =============================
// DESTRUCTURING    Array
// =============================

let angka = [1,2,3,4,5,6,7,8,9,10];
let [a,b,c,d,e,f,g,h,i,j] = angka ;
console.log(a,b,c,j); // 10

// =============================
// DESTRUCTURING   Object
// =============================

let mobil = {
    merek: "X-Trail",
    tahun: 2010
};
let {merek, tahun} = mobil;
console.log(merek, tahun); // X-Trail 2010  

// =============================
// Spread Operator
// =============================

let MieAyam1 = ["Mie Ayam biasa", "Mie Ayam Bakso"]
let MieAyam2 = ["Bakso", ...MieAyam1];
console.log(MieAyam2); // Bakso, Mie Ayam biasa, Mie Ayam Bakso
let user1 = {nama: "Hapis", umur: 18};
let user2 = {...user1, status: "Mahasiswa"};
console.log(user2); // {nama: "Hapis", umur: 18, status: "Mahasiswa }

// =============================
// Rest Operator
// =============================

function hitung(...angka){
    return angka.reduce((a,b) => a+b);
}
console.log(hitung(1,2,3,4,5)); // 15


