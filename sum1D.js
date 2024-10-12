const a = [1, 2, 3, 4, 5];

// Brute force solution
const ans = new Array(a.length).fill(0);

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j <= i; j++) {
    ans[i] = ans[i] + a[j];
  }
}

console.log(ans);
