// [] ini si array
// [ value, value, value ]

// {} ini si object
// { key: value, key: value }

const dataArray = [1, 2, 'tiga', 'empat']
console.log(dataArray);
console.log(dataArray[0]);

const dataObject = { mobil: 'merah', motor: 'kuning', pesawat: 1 }
console.log(dataObject);
console.log(dataObject.motor);

// start: > = , end: <
console.log(dataArray.slice(1, 3))

// push: untuk menambahkan nilai array
dataArray.push('lima');
console.log(dataArray);

// length
console.log(dataArray.length)

// i++ || i = i + 1
// i-- || i = i - 1

// for
for (let i = 0; i < dataArray.length; i++) {
  console.log(dataArray[i])
}

console.log('\n' + 'PISAH' + '\n')

dataArray.forEach(value => console.log(value))

console.log('\n' + 'PISAH MAP' + '\n');

dataArray.map((value, index) => console.log(index, value))