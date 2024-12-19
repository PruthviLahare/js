// range(0, 5, 1);
// // [0, 1, 2, 3, 4];

// range(5, 0, -1);
// // [5, 4, 3, 2, 1];

// range(5, 0, 0);
// // [];

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

console.log(range(0, 5, 1));
console.log(range(5, 0, -1));
console.log(range(5, 0, 0));