// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
      oddNumbers[oddNumbers.length] = numbers[index];
    }
  }

  return oddNumbers;
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
  const message = 'Odd Elements of the array 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testSelectOdds(array, expected) {
  const actual = selectOdds(array);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllSelectOdds() {
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds([2, 4, 6], []);
  testSelectOdds([2, 4, 1], [1]);
  testSelectOdds([0], []);
  testSelectOdds([1, 1, 1], [1, 1, 1]);
}

testAllSelectOdds();