const numbersSort = function (numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
};

const sort = function () {
  const numbers = [[2, 4, 1], [10, 0, 1]];

  return numbers.map(numbersSort);
};

console.log(sort());