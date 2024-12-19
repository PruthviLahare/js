const isAny = function (predicate, numbers) {
  for (const element of numbers) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
};

const areAll = function (predicate, elements) {
  for (const element of elements) {
    if (predicate(element)) {
      return false;
    }
  }

  return true;
};

function isOdd(element) {
  return element & 1 === 1;
}

const containsOdd = function (...element) {
  return isAny(isOdd, element);
};

const isPositive = function (element) {
  return element < 0;
};

const areAllPositive = function (...element) {
  return areAll(isPositive, element);
};

console.log(areAllPositive(1, 2, 3));
console.log(areAllPositive(1, 2, -3));


const isGreaterThan100 = function (element) {
  return element > 100;
};

const isAnyNumberGreaterThan100 = function (...element) {
  return isAny(isGreaterThan100, element);
};

console.log(isAnyNumberGreaterThan100(1, 20, 1000));


const isLenGreaterThan3 = function (element) {
  return element.length < 4;
};

const areAllElementsGreaterThan3 = function (...element) {
  return areAll(isLenGreaterThan3, element);
};

const isPresent = function (element, currentElement) {
  return element === currentElement;
};

const isElementPresent = function (array, element) {
  return isAny(isPresent, array, element);
};

console.log("hi", isElementPresent([1, 2, 3], 2));

// console.log(areAllElementsGreaterThan3('pruthvi', 'ones'));

const arr = [1, 2, 3];
arr.some();