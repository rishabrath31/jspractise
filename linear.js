const t = 60;
const arr = [10, 11, 12, 13, 14];

function linearSearch(t, arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == t) {
      return `Element Found at Index ${i}`;
    }
  }
  return "Element Not Foundt ";
}

const result = linearSearch(t, arr);
console.log("Result:", result);
