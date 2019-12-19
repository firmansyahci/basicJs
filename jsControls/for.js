// saya ingin mengeluarkan ouput dari 1 sampai 10
// saya ingin mengeluarkan ouput dari 10 sampai 1000

console.log('1 2 3 4 5 6 7 8 9 10');

// for (deklarasi variable nilai awal; kondisi variable nilai berakhir; kondisi setiap pengulangan terjadi)
// <= adalah < =
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

let y = '';
for (let x = 10; x <= 100; x = x + 1) {
  y = y + ' ' + x;
}
console.log(y);