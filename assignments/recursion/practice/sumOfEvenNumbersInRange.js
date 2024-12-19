function isEven(number) {
  return number < 1 ? number === 0 : isEven(number - 2);
}

function sumOfEvenNumbers(start, end) {
  if (start > end) {
    return 0;
  }

  return isEven(start) ? start + sumOfEvenNumbers(start + 2, end) : sumOfEvenNumbers(start + 1, end);
}

console.log(sumOfEvenNumbers(10, 16));
console.log(sumOfEvenNumbers(11, 16));