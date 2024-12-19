// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentTerm = 0;
let nextTerm = 1;
let fibonacciTerm = 0;

for (let series = 0; series < n; series++) {
  console.log(currentTerm);

  fibonacciTerm = currentTerm + nextTerm;
  currentTerm = nextTerm;
  nextTerm = fibonacciTerm;
}

let firstNumber = -1;
let secondNumber = 1;
let noOfTerms = 20;

for (let i = 0; i < noOfTerms; i++) {
  let addFirstSecond = firstNumber + secondNumber;

  firstNumber = secondNumber;
  secondNumber = addFirstSecond;

  console.log(addFirstSecond);
}