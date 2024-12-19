function numberOfDigits(number) {
  if (number === 0) {
    return 0;
  }
  
  return number % 10 + numberOfDigits((number - (number % 10)) / 10);
}

console.log(numberOfDigits(123));
console.log(numberOfDigits(1239));
console.log(numberOfDigits(10));
console.log(numberOfDigits(0));