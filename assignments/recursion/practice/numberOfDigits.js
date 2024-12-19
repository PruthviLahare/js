function numberOfDigits(number) {
  return number <= 0 ? 0 : 1 + numberOfDigits((number - (number % 10)) / 10);
}

console.log(numberOfDigits(123));
console.log(numberOfDigits(1239));
console.log(numberOfDigits(10));
console.log(numberOfDigits(0));