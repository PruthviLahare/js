// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const nonIdenticalElements = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementPresent(array1[index], array2)) {
      nonIdenticalElements.push(array1[index]);
    }
  }

  return nonIdenticalElements;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
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

function assembleMessage(array1, array2, expected, actual) {
  const message = 'Difference 👉 "' + array1 + '" & "' + array2 + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array1, array2, expected, actual));
}

function testAllDifference() {
  testDifference([1, 2, 3], [4, 2, 3], [1]);
  testDifference([4, 2, 3], [4, 2, 3], []);
  testDifference([4, 2, 3, 5, 6], [4, 2, 3], [5, 6]);
}

testAllDifference();