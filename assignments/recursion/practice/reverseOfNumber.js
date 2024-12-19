function reverseOfNumber(digits, number) {
  if (number === 0) {
    return 0;
  }

  const modulos = number % 10;
  
  return modulos * (10 ** digits) + reverseOfNumber(digits - 1, (number - modulos) / 10);
}

console.log(reverseOfNumber(2, 123));
console.log(reverseOfNumber(3, 1000));
console.log(reverseOfNumber(1, 98));
console.log(reverseOfNumber(1, 92));
console.log(reverseOfNumber(1, 32));