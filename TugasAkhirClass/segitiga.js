function buatSegitiga(x){
   for (let i = 0; i < x; i++){
      let hasil = "";
      for (let j = 0; j < x - i; j++){
         hasil += " ";
      }
      for (let k = 0; k<=i; k++){
            if(k == 0 || i== x-1){
               hasil += "*";
            } else {
               hasil += " ";
            }
      }
      for (let l = 0; l<i; l++){
            if (l == i-1 || i== x-1){
               hasil += "*";
            } else {
               hasil += " ";
            }
      }
      console.log(hasil);
   }
}

buatSegitiga(3);