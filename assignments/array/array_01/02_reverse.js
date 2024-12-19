// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray[reversedArray.length] = array[index];
  }

  return reversedArray;
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

function assembleMessage(array, expected, actual) {
  const message = 'Reverse the array 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testReverse(array, expected) {
  const actual = reverse(array);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllReverse() {
  testReverse([2, 1], [1, 2]);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse([1, 1, 2], [2, 1, 1]);
  testReverse([], []);
}

testAllReverse();