const arr = [78, 64, 35, 33, 40];
let n = arr.length;

for (let i = 0; i < n; i++) {
  let min_index = i;

  // Find the minimum element in the unsorted part
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min_index]) {
      min_index = j;
    }
  }

  // Swap the found minimum element with the first element of the unsorted part
  let temp = arr[min_index];
  arr[min_index] = arr[i];
  arr[i] = temp;
}

console.log(arr);
