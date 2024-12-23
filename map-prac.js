const numbers = [1,2,3,4,5,6]
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const celsius = [0,20,30]
const fahrenheit = celsius.map(temp => (temp *9/5)+32);
console.log(fahrenheit);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = users.map(user => user.name);
console.log(names);

const scores = [40,50,60]
const newScore = scores.map(score => score+10);
console.log(newScore);

const words = ["hello", "world", "javascript"];
const newWord = words.map(words=>words.toUpperCase());
console.log(newWord);
