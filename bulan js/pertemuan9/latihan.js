//object
let buku = {
    judul: "Harry Potter",
    pengarang: "J.K. Rowling",
    tahunterbit: "1997"
}
console.log(buku); //   

//menambah properti
penerbit = "Gramedia";
console.log(buku); //   

//menghapus properti
delete buku.tahunterbit;
console.log(buku); //

//looping pada object
for (let key in buku) {
    console.log(key, buku[key]);
} 