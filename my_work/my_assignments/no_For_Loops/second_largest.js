const min = function (num1, num2) {
  return num1 < num2;
};

const max = function (num1, num2) {
  return num1 > num2;
};

function range(from, to, increment) {
  if (increment === 0) {
    return [];
  }

  const arr = [];
  const condition = from > to ? max : min;

  for (from; condition(from, to); from += increment) {
    arr.push(from);
  }

  return arr;
}

const secondLargest = function (previous, current) {
  if (current > previous[0]) {
    previous[1] = previous[0];
    previous[0] = current;
    return previous;
  }

  if (current > previous[1]) {
    previous[1] = current;
  }

  return previous;
};

console.log([20, 30, 10, 60, 10, 50, 0].reduce(secondLargest, [0, -Infinity]));