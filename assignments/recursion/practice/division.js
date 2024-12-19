function divide(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return  1 + divide(dividend - divisor, divisor);
}

console.log(divide(4, 2));
console.log(divide(8, 2));
console.log(divide(5, 2));
console.log(divide(7, 2));
console.log(divide(2, 2));
console.log(divide(0, 2));
console.log(divide(1, 2));