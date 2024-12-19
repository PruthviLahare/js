function divideBy2(num) {
  return num / 2;
}

function convertToUpperCase(string) {
  return string.toUpperCase(string);
}

function isOdd(numbers) {
  return numbers & 1;
}

function isGreaterThan5(element) {
  return element.length > 5;
}

function concat(str, element) {
  return str + element;
}

function mul(product, element) {
  return product * element;
}

function longestString(max, element) {
  if (element.length > max.length) {
    return max = element;
  }

  return max;
}

function countOdd(element, noOfOdd) {
  if (isOdd(element)) {
    noOfOdd += 1;
  }

  return noOfOdd;
}

// ****************************  **********************************

function reduce(func, list, type) {
  let valueType = type;

  for (const element of list) {
    valueType = func(valueType, element);
  }

  return valueType;
}

function map(mapper, array) {
  const mappedList = [];

  for (const index in array) {
    mappedList.push(mapper(array[index], index, array));
  }

  return mappedList;
}

function filter(func, array) {
  const filteredList = [];

  for (const element of array) {
    if (func(element)) {
      filteredList.push(element);
    }
  }

  return filteredList;
}

// ****************************  **********************************

function testMap() {
  console.log(mapper(Math.sqrt, ([5, 6])));
  console.log(mapper(divideBy2, ([5, 6])));
  console.log(mapper(convertToUpperCase, (['impossible'])));
}

function testFilter() {
  console.log(filter(isOdd, ([5, 6])));
  console.log(filter(isOdd, ([5, 7])));

  console.log(filter(isGreaterThan5, ["impossible", "possible", "no"]));
}

function testReduce() {
  console.log(reduce(longestString, ["this", "amazing", "assignment", "rocks"], ''));
  console.log(reduce(longestString, ["sky", "if"], ''));
  console.log(reduce(longestString, [], ''));
  console.log(reduce(concat, ["ab", "so", "lu", "te"], ''));
  console.log(reduce(mul, [1, 2, 3], 1));
  console.log(reduce(countOdd, [1, 2, 3], 0));
  console.log(reduce(countOdd, [1], 0));
}


function testAll() {
  testMap();
  testFilter();
  testReduce();
}

testAll();  