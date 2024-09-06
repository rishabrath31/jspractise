//Basic Object with Properties

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Engineer",
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["age"]); // Output: 30

//Objects with Methods

const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2020,
  start: function () {
    console.log("The car has started.");
  },
};
car.start();

//Nested Objects
const student = {
  name: "Rishab",
  age: 22,
  marks: {
    math: 85,
    english: 90,
    science: 75,
  },
};

console.log(student.marks.math);

//Object with a Function to Modify Its Properties
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
  readPages: 0,
  read: function (pages) {
    this.readPages += pages;
    if (this.readPages > this.pages) {
      this.readPages = this.pages;
    }
  },
};

book.read(50);
console.log(book.readPages);

//Using this Keyword in an Object Method
const employee = {
  name: "Jane",
  position: "Developer",
  salary: 70000,
  getDetails: function () {
    return `${this.name} is a ${this.position} earning $${this.salary} per year.`;
  },
};

// Using the `this` keyword
console.log(employee.getDetails());
// Output: Jane is a Developer earning $70000 per year.
