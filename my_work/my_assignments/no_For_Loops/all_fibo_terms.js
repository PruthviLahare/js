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

const getFibo = function (previous, current) {
  if (current === 1) {
    previous.push(0);
    return previous;
  }

  if (current === 2) {
    previous.push(1);
    return previous;
  }

  previous.push(previous[current - 3] + previous[current - 2]);

  return previous;
};

const fibonnaci = function (term) {
  const sizeOfArray = range(1, term, 1);

  const terms = sizeOfArray.reduce(getFibo, []);
  console.log(terms);

  return terms.at(-1);
};

console.log(fibonnaci(5));