//menambahkan Elemen
nama.push("agus"); ["narji", "jarjit", "upin", "ipin"]
nama.unshift("agus"); ["agus", "narji", "jarjit", "upin", "ipin"]

//menghapus Elemen
nama.pop(); ["narji", "jarjit", "upin"]
nama.shift(); ["narji", "jarjit", "upin", "ipin"]

//mengakses panjang array
console.log(nama.length) // 3

//Menyisipkan/Menghapus Elemen di Tengah
nama.splice(1, 0, "ipin"); // menghapus "ipin" di index ke-1
console.log(nama); 
