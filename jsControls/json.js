// json.parse to meparsekan json || string dijadikan json
// json.stringify to men-unparserkan json || json dijadikank string

const data = '{ "motor": "biru", "mobil": "kuning", "pesawat": 10 }'

const dataJSON = JSON.parse(data);

console.log(dataJSON)

const dataString = JSON.stringify(dataJSON);

console.log(dataString)