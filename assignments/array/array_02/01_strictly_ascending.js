// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(array, expected, actual) {
  const message = 'is Array in acending order 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsStrictlyDescending(array, expected) {
  const actual = isStrictlyAscending(array);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllIsStrictlyDescending() {
  testIsStrictlyDescending([], true);
  testIsStrictlyDescending([1], true);
  testIsStrictlyDescending([1, 2], true);
  testIsStrictlyDescending([-10, 2], true);
  testIsStrictlyDescending([1, 3, 4, 5, 16], true);
  testIsStrictlyDescending([1, 3, 2, 4], false);
  testIsStrictlyDescending([1, 3, 3, 4], false);
}

testAllIsStrictlyDescending();