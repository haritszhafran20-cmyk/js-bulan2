//nomor1
let pemograman = {
    judul: "clean code",
    penulis: "Robert C. Mrtiin",
    tahun: "2008"
}
console.log(pemograman); //

//nomor2
let pemograman1 = {
    judul: "clean code",
    penulis: "Robert C. Mrtiin",
    tahun: "2010"
}
console.log(pemograman1); //

//nomor3
let pemograman2 = {
    judul: "clean code",
    tahun: "2010"
}
console.log(pemograman2); //

//nomor4
for (let key in pemograman2) {
    console.log(key + " : " +pemograman2[key]);
}