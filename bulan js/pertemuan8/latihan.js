//array
let angka = [1,2,3,4,5,6,7,8,9,10]
angka.forEach((el) => {
    console.log(el);
});

//map
let kaliDua = angka.map((el) => {
    return el * 2;
});
console.log(kaliDua); // [2, 4, 6]

//filter
let genap = angka.filter((el) => {
    return el % 2 == 0;
});
console.log(genap); // [2]

//reduce()
let total = angka.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total); // 6

//find()
let lebihDariSatu = angka.find((el) => {
    return el > 1;
});
console.log(lebihDariSatu); // 2