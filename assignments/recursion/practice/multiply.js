function multiply(num1, num2) {
  if (num2 === 0) {
    return 0;
  }

  return  num1 + multiply(num1, num2 - 1);
}

console.log(multiply(4, 2));
console.log(multiply(8, 2));
console.log(multiply(5, 2));
console.log(multiply(7, 2));
console.log(multiply(2, 2));
console.log(multiply(0, 2));
console.log(multiply(1, 2));