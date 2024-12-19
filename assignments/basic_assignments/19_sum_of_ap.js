// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 2;
const d = 3;
const n = 4;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let term = a;
let sum = 0;

for (let i = 0; i < n; i++) {
  sum = sum + term;
  term = term + d;
}

console.log(sum);