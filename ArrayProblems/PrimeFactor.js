/**
 * Purpose - To extend the Prime Factorization Program to store all the Prime Factors of a number n into an array 
 * and finally display the output.
 * @author - Sreelipta
 */


const prompt = require('prompt-sync')({sigint : true});

 let count = 0;
 let isPrime = 0;
 let result = [];
 let number = prompt("Enter a number: ");
 
 for ( i = 2; i <= number; i++ ) {

     if ( number % i == 0) {
         isPrime = 1;
         
         for ( j = 2; j <= i / 2; j++) {

             if ( i % j == 0) {
                 isPrime = 0;
                 break;
             }
         }
         if ( isPrime == 1 ) {
             result [count] = i;
             count++;
         }
     }
 }
 if ( isPrime == 0 || isPrime == 1 ) {
     console.log(result);
 }

 
 