//nomor1
let siswa = {
    nama: "Rina",
    usia: "17",
    kelas: "XII",
    jurusan: "IPA"
};
let {nama, usia, kelas, jurusan} = siswa;
console.log(nama, usia, kelas, jurusan); // Rina 17 XII IPA 

//nomor2
let siswa1 = {
    nama: "Rina",
    usia: "17",
    kelas: "XII",
    jurusan: "IPA"
};
let siswa2 = {...siswa1, nilai: 90};
console.log(siswa2); // {nama: "Rina", usia: "17",

//nomor3
function hitungRataRata(...angka){
    let total = nilai.reduce((acc, curr) => acc + curr, 0);
    return total / angka.length;
}
let rata = hitungRataRata(80,75,90,95);
console.log(rata); // 85