const square = function (num) {
  return Math.pow(num, 2);
};

const cube = function (num) {
  return Math.pow(num, 3);
};

const double = function (num) {
  return num + num;
};

const reducer = function (num, func) {
  return func(num);
};

const combine = function (funcs) {
  return function (num) {
    return funcs.reduceRight(reducer, num);
  };
};

const doubleSquareCube = function () {
  const arrayReference = [square, cube, double];
  const squareOfDouble = combine(arrayReference);
  return squareOfDouble(2);
};

console.log(doubleSquareCube());