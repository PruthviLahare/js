function logarithm(base, log, mul) {
  return mul > log ? 0 : 1 + logarithm(base, log, base * mul);
}

console.log(logarithm(10, 57, 10));
console.log(logarithm(10, 100, 10));
console.log(logarithm(10, 102, 10));
console.log(logarithm(10, 1000, 10));
console.log(logarithm(2, 16, 2));
console.log(logarithm(3, 81, 3));