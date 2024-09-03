//Write a program that takes a number (1-7) and prints the corresponding day of the week using a switch case.

let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thrusday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//Question: Write a program that takes a character grade (A, B, C, D, F) and prints a message based on the grade.

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Below Avg");
    break;
  case "E":
    console.log("Fail");
    break;
  case "F":
    console.log("Pathetic");
    break;
  default:
    console.log("Invalid Input");
}

//Write a program that takes two numbers and an operator (+, -, *, /) and performs the corresponding operation using a switch case.

let n1 = 10;
let n2 = 5;

let op = "+";

switch (op) {
  case "+":
    console.log("Addition:", n1 + n2);
    break;
  case "+":
    console.log("Subtraction:", n1 - n2);
    break;
  case "+":
    console.log("Multiplication:", n1 * n2);
    break;
  case "+":
    console.log("Division:", n1 / n2);
    break;
  case "+":
    console.log("Modulos:", n1 % n2);
    break;
  default:
    console.log("Invalid");
}

//Write a program that takes a number (1-12) and prints the corresponding month name using a switch case.

let num = 8;
switch (num) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("invalid");
}

//Write a program that takes a traffic light color (Red, Yellow, Green) and prints the corresponding action (Stop, Get Ready, Go) using a switch case.

let light = "Red";
switch (light) {
  case "Red":
    console.log("STOP");
    break;
  case "Yellow":
    console.log("WAIT FOR THE GREEN ");
    break;
  case "Green":
    console.log("GO GO GO");
  default:
    console.log("Invalid");
}
