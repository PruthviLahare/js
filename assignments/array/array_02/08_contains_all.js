// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementPresent(array, elements[index])) {
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

function assembleMessage(array, elements, expected, actual) {
  const message = 'are elements ' + elements + ' present in "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testContainsAll(array, elements, expected) {
  const actual = containsAll(array, elements);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array, elements, expected, actual));
}

function testAllContainsAll() {
  testContainsAll([1, 2, 3], [2, 1], true);
  testContainsAll([1, 2, 3], [2, 1, 4], false);
  testContainsAll([1, 2, 3], [5], false);
  testContainsAll([1, 2, 3], [], true);
}

testAllContainsAll();