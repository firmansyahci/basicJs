// if
// jika mobil saya berwarna merah, saya mau motor berwana hijau

const mobil = 'merah';
let motor = 'biru';

if (mobil == 'merah') {
  motor = 'hijau';
}

console.log(motor);

// if .. else
// jika mobil saya berwarna hijau, saya mau motor berwarna kuning
// jika tidak mobil saya berwarna hijau, saya mau motor berwarna biru

const mobilBapak = 'putih';
let motorBapak = 'merah';

if (mobilBapak == 'hijau') {
  motorBapak = 'kuning';
} else {
  motorBapak = 'biru';
}

console.log(motorBapak);

// if .. else if .. else
// Jika ada 1 meja, saya minta 2 kursi
// atau jika ada 3 meja, saya minta 12 kursi
// jika tidak ada 1 meja atau 3 meja, saya minta 100 kursi

const meja = 1;
let kursi = 0;

if (meja == 1) {
  kursi = 2;
} else if (meja == 3) {
  kursi = 12;
} else {
  kursi = 100;
}

console.log(kursi);