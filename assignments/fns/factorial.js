function range(from, to, increment) {
  const arr = [];

  for (let iterator = from; iterator <= to; iterator += increment) {
    arr.push(iterator);
  }

  return arr;
}

function fact(num) {
  // console.log(initial);
  // console.log(num);
  
  return num + 1;
}

console.log([10, 20].reduce(fact, 1));