
function findSame(params){
    let data = params;
    let asc = [];

    data.forEach(a => {
        asc.push(a.split('').sort().join(''));
    });

    for(let i = 0; i < asc.length; i++){
        let item = asc[i];
    }
}
console.log(findSame(["cat", "listen", "code", "act", "silent", "tac"]));

// Find duplicates using for loop
//let item_list = [1,2,3,4,5,5,5,7,8,2,3,4,4,4,4,4];