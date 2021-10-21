/**
 * Purpose - To write a program 
    a. Roll a die and find the number between 1 to 6
    b. Repeat the Die roll and find the result each time
    c. Store the result in a dictionary
    d. Repeat till any one of the number has reached 10 times
    e. Find the number that reached maximum times and the one that was for minimum times
 * @author - Sreelipta
 */


let dieNumber
let myMap = new Map(); 
let count1 = 0 , count2 = 0 , count3 = 0 ,count4 = 0 ,count5 = 0 ,count6 = 0;

for (let i= 0 ; ; i++){
    dieNumber = Math.floor(Math.random()*6)+1;
    if(dieNumber == 1){
        count1++
        myMap.set(dieNumber,count1)
        if(count1 == 11){
            break;
        }
    }
    else if(dieNumber == 2){
        count2++
        myMap.set(dieNumber,count2)

        if(count2 == 11){
            break;
        }
    }
    else if(dieNumber == 3){

        count3++
        myMap.set(dieNumber,count3)

        if(count3 == 11){
            break;
        }
    }
    else if(dieNumber == 4){
        count4++
        myMap.set(dieNumber,count4)

        if(count4 == 11){
            break;
        }
    }
    else if(dieNumber == 5){

        count5++
        myMap.set(dieNumber,count5)
        if(count5 == 11){
            break;
        }
    }
    else if(dieNumber == 6){
        count6++
        myMap.set(dieNumber,count6)

        if(count6 == 11){
            break;
        }
    }

}
console.log(myMap);

let maxValueKey ;
let minValueKey;
let minValue = 11;
for (let [key, value] of myMap.entries() ){
    if (value == 11){
        maxValueKey = key;
    }
    if(minValue > value){
        minValue = value;
        minValueKey = key;
    }
}
console.log("The number that repeated max times is = "+maxValueKey);
console.log("The number that repeated  min times is = "+minValueKey);


