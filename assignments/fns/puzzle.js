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

function countOdd(noOfOdd, element) {
  if (isOdd(element)) {
    return noOfOdd += 1;
  }

  return noOfOdd;
}

// ****************************  **********************************

function testMap() {
  console.log([4, 6].map(Math.sqrt));
  console.log([4, 6].map(divideBy2));
  console.log(['impossible'].map(convertToUpperCase));
}

function testFilter() {
  console.log([4, 6].filter(isOdd));
  console.log([4, 6, 7].filter(isOdd));
  console.log(["impossible", "possible", "no"].filter(isGreaterThan5));
}

function testReduce() {
  console.log(["this", "amazing", "assignment", "rocks"].reduce(longestString, ''));
  console.log([].reduce(longestString, ''));
  console.log(["ab", "so", "lu", "te"].reduce(concat, ''));
  console.log([1, 2, 3].reduce(mul, 1));
  console.log([].reduce(countOdd, 0));
  console.log([1, 2, 5].reduce(countOdd, 0));
  console.log([1, 2, 3].reduce(countOdd, 0));
}


function testAll() {
  testMap();
  testFilter();
  testReduce();
}

testAll();