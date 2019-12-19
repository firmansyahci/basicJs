const kendaraan = '{"motor" : ["kuning", "merah"], "mobil" : {"ban" : 2,"jok" : "hitam"}}';

const dataJSON = JSON.parse(kendaraan);
console.log(dataJSON);

const dataString = JSON.stringify(dataJSON);
console.log(dataString);