//soal bintang no 1
for (let i = 8; i > 0; i--) {
    let hasil = '';
    for (let j = 1; j < i; j++) {
      hasil += '*';
    }
    console.log(hasil)
}

//soal bintang no 2
for (let i = 0; i < 5; i++)
{
    let hasil = "";
    for (let j = 0; j < 5 - i; j++)
    {
        hasil += " ";
    }
    for (let k = 0; k<=i; k++)
    {
        hasil += "*";
    }
    for (let l = 0; l<i; l++)
    {
        hasil += "*";
    }
    console.log(hasil);
}