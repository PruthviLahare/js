// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array
function dropLast(array, noOfElements) {
  const slicedArray = [];
  const end = array.length - noOfElements;

  for (let index = 0; index < end; index++) {
    slicedArray.push(array[slicedArray.length]);
  }

  return slicedArray;
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

function assembleMessage(array, noOfTerm, expected, actual) {
  const message = 'Drop 👉 ' + noOfTerm + ' element from "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testDropLast(array1, noOfTerm, expected) {
  const actual = dropLast(array1, noOfTerm);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array1, noOfTerm, expected, actual));
}

function testAllDropLast() {
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3], 2, [1]);
  testDropLast([1, 2, 3], 4, []);
}

testAllDropLast();