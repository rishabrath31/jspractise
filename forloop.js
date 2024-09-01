// SUM OF NUMBERS

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Print Even Numbers

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Factorial of a Number

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// Reverse a String

let str = "hello";
let rv = "";
for (let i = str.length - 1; i >= 0; i--) {
  rv += str[i];
}
console.log(rv);

// Print Multiplication Table

let num = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Find the largest Number

let number = [3, 4, 5, 6, 7, 8, 9];
let max = number[0];
for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}
console.log(max);

// Sum of Array elements

let arr = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.log(sum1); // 15

// Count Vowels in Strings

let stri = "Rishab";
let count = 0;
let vow = "aeiou";

for (let i = 0; i <= stri.length; i++) {
  if (vow.includes(stri[i])) {
    count++;
  }
}
console.log(count);

//Print Elements in Reverse Order

let ar = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(ar[i]);
}

//Fibonacci Series

let n1 = 0,
  n2 = 1,
  nextTerm;
console.log(n1);
console.log(n2);
for (let i = 1; i <= 8; i++) {
  nextTerm = n1 + n2;
  console.log(nextTerm);
  n1 = n2;
  n2 = nextTerm;
}
