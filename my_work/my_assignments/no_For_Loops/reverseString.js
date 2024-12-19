function reverse(previousStr, currentStr) {
  return currentStr + previousStr;
}

console.log([...'Pruthvi'].reduce(reverse, ''));