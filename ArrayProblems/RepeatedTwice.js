/**
 * Purpose - Take a range from 0 – 100, find the digits that are repeated twice
 * @author - Sreelipta
 */

let repeatArr = new Array();
for(i=1;i<100;i++){
    if (i%11 == 0) {
        repeatArr.push(i);
        repeatArr.sort();
    }
}
console.log("Repeated Twice Values are " +repeatArr);

