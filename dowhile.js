//Write a program to print numbers from 1 to 10 using a do-while loop.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Sum of First 5 Natural NUmbers

let a = 1;
let sum = 0;
do {
  sum += a;
  a++;
} while (a <= 5);
console.log("Sum:", sum);

//Print Even Numbers Between 1 and 20

let e = 2;
do {
  console.log(e);
  e += 2;
} while (e <= 20);

//Question: Write a program to reverse a number (e.g., 12345 becomes 54321) using a do-while loop.

let num = 12345;
let rv = 0;
do {
  let digit = num % 10;
  rv = rv * 10 + digit;
  num = Math.floor(num / 10);
} while (num > 0);
console.log("Reversed Number: ", rv);

//Question: Write a program to find the factorial of a number using a do-while loop.

let n = 5;
let fact = 1;
do {
  fact *= n;
  n--;
} while (n > 0);
console.log("Factorial:", fact);

//Print the Multiplication Table of 7
let x = 1;
let m = 7;
do {
  console.log(`${m} x ${x} = ${m * x}`);
  x++;
} while (x <= 10);

//Count the Digits in a Number

let n1 = 12345;
let c = 0;
do {
  n1 = Math.floor(n1 / 10);
  c++;
} while (n1 > 0);
console.log("Number of Digits:", c);
