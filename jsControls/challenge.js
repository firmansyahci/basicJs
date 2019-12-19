// decrement
// for (let awal;let kondisi akhir; let perulangan)
// awal : 7
// akhir baris > 0 == 1
// hasil: 7, 6, 5, ..., 1

// inrement
// for (let awal; let kondisi akhir; let perulanganlan)
// awal: 1
// akhir kolom < baris = 6 sd 1
// hasil: sebanyak 6 baris

for (let baris = 7; baris > 0; baris--) {
  let hasil = '';
  for (let kolom = 1; kolom < baris; kolom++) {
    hasil += kolom
  }
  console.log(hasil)
}