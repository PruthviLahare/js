const counter = function () {
  let x = 0;

  return function () {
    return x += 1;
  };
};

const fillArray = function (arr) {
  const elements = counter();
  const array = arr.map(elements);

  return array;
};

const createArray = function (size) {
  const arr = Array(size).fill(0);

  return fillArray(arr);
};


const power = function (num) {
  const exponent = counter();

  return function () {
    return Math.pow(num, exponent());
  };
};

const allPowers = function (num, pow) {
  const arr = createArray(pow);

  return arr.map(power(num));
};

console.log(allPowers(2, 5));
console.log(allPowers(2, 6));
console.log(allPowers(2, 7));
console.log(allPowers(3, 3));