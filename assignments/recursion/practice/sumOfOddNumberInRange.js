function isOdd(number) {
  return number < 1 ? number < 0 : isOdd(number - 2);
}

function sumOfOddNumbers(start, end) {
  if (start > end) {
    return 0;
  }

  return isOdd(start) ? start + sumOfOddNumbers(start + 2, end) : sumOfOddNumbers(start + 1, end);
}

console.log(sumOfOddNumbers(10, 16));
console.log(sumOfOddNumbers(11, 16));