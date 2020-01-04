function countLobang(x){
    let str = x;
    let arr = x.split("");
    let result =0;

    for(let i=0; i<arr.length; i++)
    if (arr[i] == 0 || arr[i] == 4 || arr[i] == 6 || arr[i] == 8 || arr[i] == 9){
        result += 1;
    }
    console.log(result);
}
countLobang('81102');