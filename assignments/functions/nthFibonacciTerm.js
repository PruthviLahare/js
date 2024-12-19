function nthFibonacciTerm(currentTerm, nextTerm, n) {
  if (n === 0) {
    return currentTerm;
  }
  const nextToNextTerm = currentTerm + nextTerm;

  return nthFibonacciTerm(nextTerm, nextToNextTerm, n--);
}

console.log(nthFibonacciTerm(0, 1, 2));
