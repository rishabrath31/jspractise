const a = [1, 2, 3, 4, 5, 6];

// Repeat the array
let j = a.length;
for (let i = 0; i < j; i++) {
  a[j + i] = a[i]; // Copy elements to the second half of the array
}

// Print the result
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
