const numbers = [-10, 15, -20, 5, -1];

numbers.sort(function (a, b) {
  return Math.abs(a) - Math.abs(b);
});