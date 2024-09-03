//Function to Calculate the Sum of Two Numbers
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 10));

//Function to Check if a Number is Even or Odd

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));

//Function to Find the Factorial of a Number
function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

//Function to Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Function to Find the Maximum Number in an Array

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([10, 8, 19, 3, 4, 5]));
