// //1. Odd or even 

// const check = num => num % 2 === 0? "Even":"Odd";

// console.log(check(4));
// console.log(check(7));
// console.log(check(0));

//2. Result Evaluator
// function evaluateResult(num) {
//     if (num < 0 || num > 100){
//         console.log("Invalid Marks");
//         return null;
//     }
    
//     return num >= 50? "Pass":"Fail";
// }


// console.log(evaluateResult(75));
// console.log(evaluateResult(47));
// console.log(evaluateResult(120));
// console.log(evaluateResult(-5));



//3.Maximum finder

// const findmax = (a,b,c) =>{
    
//     if (a >= b && a >= c){
//         return a;
//     }

//     else if (b >= a && b >= c){
//         return b;
//     }

//     else if (c >= a && c >= b){
//         return c;
//     }
// }

// console.log(findmax(19,22,13));
// console.log(findmax(10, 25, 15));
// console.log(findmax(5, 3, 8));
// console.log(findmax(9, 9, 2));

//4.Accumulator
// function sumtoN(n) {
    
//     let sum = 0;

//     for (let i = 1; i <= n; i = i+1){
//          sum = sum + i;
//     }
//         return sum;
//     }

// console.log(sumtoN(5));
// console.log(sumtoN(10));

//5.Multiplication Table generator

// function printTable(num){
    
//     for(let i = 1; i <= 10; i++){
//         console.log(num + "x" + i + "=" + (num*i));
        
//     }
// }

// console.log(printTable(3));

//6.Digital Counter

// function countDigits(num){
     
//     if (num == 0){
//         return 1
//     }

//     let count = 0;

//     while (num > 0){

//         num = (num -(num % 10)) / 10

//         count++;

//     }

//     return count;
// }


// console.log(countDigits(19));


// function reversedNumber(num){

//     let reversed = 0;

//     while(num > 0){

//         let digit = num % 10;

//         reversed = reversed * 10 + digit;

//         num = (num - digit)/10;

//     }

//     return reversed
// }

// console.log(reversedNumber(1234));
// console.log(reversedNumber(500));
// console.log(reversedNumber(91));


//7. Factorial

// function factorial(num){

//     let result = 1;

//     for(let i = 1; i <= num; i++){
//         result = result * i;

//     }

//     return result;

// }

// console.log(factorial(10));

//9.Prime validator
// function isPrime(num){

//     if(num <= 1){
//         return false;
//     }

//     for(let i = 2; i < num; i++){

//         if(num % i === 0){
//             return false;
//         }

//     }

//     return true;
// }

// console.log(isPrime(7))
// console.log(isPrime(10))
// console.log(isPrime(25))

//10.pattern builder
// function printPattern(num){

//     for(let i = 1; i <= num; i++){

//         let stars = "";

//         for(let j = 1; j <= i; j++){
//             stars += "*";
//         }

//         console.log(stars);
//     }

// }

// console.log(printPattern(19));
// console.log(printPattern(10));
