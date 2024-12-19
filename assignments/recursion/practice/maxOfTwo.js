function maxOfTwo(num1, num2) {
  const a = 10;
  const b = 12;

  if (num1 === 0) {
    return b;
  }
  if (num2 === 0) {
    return a;
  }

  return maxOfTwo(num1 - 1, num2 - 1);
} 