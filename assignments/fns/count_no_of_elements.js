function countChar(previous) {
  return 1 + previous;
}

console.log([...'Pruthvi'].reduce(countChar, 0));
console.log([...'sky'].reduce(countChar, 0));