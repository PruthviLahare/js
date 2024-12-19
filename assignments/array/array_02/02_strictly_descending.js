function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] <= numbers[index + 1]) {
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
  const message = 'is Array in descending order 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testIsStrictlyDescending(array, expected) {
  const actual = isStrictlyDescending(array);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllIsStrictlyDescending() {
  testIsStrictlyDescending([], true);
  testIsStrictlyDescending([2, 1], true);
  testIsStrictlyDescending([2, 1, -10], true);
  testIsStrictlyDescending([5, 4, 2, 1], true);
  testIsStrictlyDescending([5, 4, 6, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);
}

testAllIsStrictlyDescending();