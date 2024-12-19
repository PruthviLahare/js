const numbers = [20, 1, 23, 50, 90, 0];

numbers.sort(function (a, b) {
  console.log(a, b);

  if (a < b) {
    return 1;
  }

  if (a === b) {
    return 0;
  }

  return -1;
});

numbers.sort(function (a, b) {
  console.log(a, b);

  return a - b;
});

//---------------------------------------------------------------------

const strings = ['football', 'kho-kho', 'hockey', 'badminton'];
const strings1 = ['Football', 'Kho-kho', 'Hockey', 'Badminton'];
const strings_with_symbols = ['*abc', '-acc', '-ac', '+ab'];

strings1.sort(function (a, b) {
  return a < b ? 1 : -1;
});

//---------------------------------------------------------------------

const truthy = [true, false, true, true, false];

truthy.sort(function (a, b) {
  if (a === b) {
    return 0;
  }

  return a ? 1 : -1;
});

truthy.sort(function () {
  return Math.random() - 0.5;
});