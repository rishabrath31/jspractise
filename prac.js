// Arrow Function

//  Basic Syntax
const greet = () => console.log("Hello Word!");
greet();

// Single Parameter 
const square = n => n*n;
console.log(square(5));

// Multiple Parameters
const add = (a,b) => a+b;
console.log(add(3,7));

// Returning an object
const createUser = (name,age) => ({name,age});
console.log(createUser("Rishab", 25));

// Arrow Function as a Callback
const numbers = [1,2,3,4,5,6];
const doubled = numbers.map(num => num*2);
console.log(doubled);

// Using Default Callback
const greetUser = (name = "Guest") => `Hello, ${name}`;
console.log(greetUser());
console.log(greetUser("Alice"));

// Substraction 

const sub = (x,y) => x-y;
console.log(sub(3,2))

// Write an arrow function that takes an array of numbers as input and returns a new array containing only the even numbers.

const filterEvens = arr => arr.filter(num => num % 2 === 0);

// Example
const input = [1, 2, 3, 4, 5, 6];
console.log(filterEvens(input)); // Output: [2, 4, 6]

