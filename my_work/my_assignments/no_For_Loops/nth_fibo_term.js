const min = function (num1, num2) {
  return num1 <= num2;
};

const max = function (num1, num2) {
  return num1 >= num2;
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

const getFibo = function (fibo, current) {
  if (current > 1) {
    const nextToNextTerm = fibo[0] + fibo[1];
    fibo[0] = fibo[1];
    fibo[1] = nextToNextTerm;
  }

  return fibo;
};

const fibonnaci = function (term) {
  const arrayOfRequiredSize = range(1, term, 1);

  return arrayOfRequiredSize.reduce(getFibo, [0, 1])[0];
};

console.log(fibonnaci(6));