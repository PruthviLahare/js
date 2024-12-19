function a(accumulator, currentValue) {
  return accumulator + 1;
}

console.log([10, 20].reduce(a, 1));