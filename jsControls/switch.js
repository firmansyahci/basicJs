// Jika ada 1 meja, saya minta 2 kursi
// atau jika ada 2 meja, saya minta 4 kursi
// atau jika ada 3 meja, saya minta 6 kursi
// jika tidak ada 1 meja atau 3 meja, saya minta 100 kursi

const meja = 1;
let kursi = 1;

switch (meja) {
  case 1:
    kursi = 2;
    break;
  case 2:
    kursi = 4;
    break;
  case 3:
    kursi = 6;
    break;
  default:
    kursi = 100;
    break;
}

console.log(kursi);
