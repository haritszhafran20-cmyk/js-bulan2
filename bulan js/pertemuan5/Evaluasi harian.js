function pencatatanPengeluaran() {
  let total = 0;

  return function(tambahPengeluaran) {
    total += tambahPengeluaran;
    console.log("Total pengeluaran saat ini:", total);
    return total;
  };
}

// Contoh penggunaan:
const catat = pencatatanPengeluaran();
catat(10000); // 10000
catat(5000);  // 15000
catat(2000);  // 17000
