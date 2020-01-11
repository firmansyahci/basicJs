function randomize(num){
    const result = [];
    let sum = 0;
    if (num > 0 && num < 6){
        for(let i = 0; i < num; i++){
            let numAcak = Math.floor(Math.random() * 10);
            let ganjil = numAcak % 2 == 0 ? numAcak + 1 : numAcak;
            result.push(ganjil);
            sum += ganjil;
        }
    }
    console.log("array : ", result);
    console.log("sum : ", sum);
}
randomize(5);