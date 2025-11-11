//nomor1
let nilai = [60,75,80,55,90,45];
let rata = nilai.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(genap);//70

//nomor2
let genap = nilai.filter((el) => {
    return el % 2 == 0;
});
console.log(genap);//[lulus/gagal]

//nomor3
let total = nilai.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);//
