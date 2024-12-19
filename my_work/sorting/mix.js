const numbers = [10, 1, 2, 6, 3, 5, 8, 4, 9, 7];
console.log("Before sorting :- ", numbers);

const ascendDecend = function (ascendTill) {
  return numbers.sort(function (a, b) {
    if (a <= ascendTill || b <= ascendTill) {
      return a - b;
    }
    return b - a;
  });
};

console.log("afetr sorting :- ", ascendDecend(1));