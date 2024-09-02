//Print Numbers from 1 to 10:
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//Sum of First 10 Natural Numbers:

let x = 1;
let sum2 = 0;
while (x <= 10) {
  sum2 += x;
  x++;
}
console.log("Sum:", sum2);

//Reverse a Number:

let num = 12345;
let r = 0;
while (num > 0) {
  r = r * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("Reversed Number:", r);

//Print Even Numbers from 1 to 20:
let n = 1;
while (n <= 20) {
  if (n % 2 == 0) {
    console.log(n);
  }
  n++;
}

//Factorial of a Number:

let Number = 5;
let factorial = 1;
let i1 = Number;
while (i1 > 0) {
  factorial *= i1;
  i1--;
}
console.log("Factorial:", factorial);

//Check if a Number is Prime:

let numb = 34;
let isPrime = true;
let c = 2;
while (c <= Math.sqrt(numb)) {
  if (numb % c === 0) {
    isPrime = false;
    break;
  }
  c++;
}
console.log(numb + " is prime:", isPrime);

//Generate Multiplication Table:

let nu = 5;
let j = 1;
while (j <= 10) {
  console.log(nu + " x " + j + " = " + nu * j);
  j++;
}

//Count Digits in a Number:

let no = 12345;
let cn = 0;
while (no > 0) {
  cn++;
  no = Math.floor(no / 10);
}
console.log("Number of Digits: ".cn);

//Sum of Digits in a Number:

let n1 = 12345;
let s2 = 0;
while (n1 > 0) {
  s2 += n1 % 10;
  n1 = Math.floor(n1 / 10);
}
console.log("Sum of digits:", s2);

//Print Fibonacci Series up to a Given Number:

let limit = 10;
let a = 0,
  b = 1;
let next;
console.log(a);
while (b <= limit) {
  console.log(b);
  next = a + b;
  a = b;
  b = next;
}
