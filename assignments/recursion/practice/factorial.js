//Required to send two Arguments..

// function productOfNNaturalNumber(product, n) {
//   return  n === 1 ? product : productOfNNaturalNumber(product * n, --n);
// }

function factorial(number) {
  return  number <= 1 ? number : number * factorial(--number);
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(0));