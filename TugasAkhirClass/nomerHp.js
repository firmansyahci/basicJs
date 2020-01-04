function formatNomerHp(nomerHp){
    let noHp = nomerHp;
    let result = "+62 " + noHp.substr(1, 3) + " " + noHp.substr(4, 4) + " " + noHp.substr(8, 4);
    console.log(result);
}
formatNomerHp('082113187890');