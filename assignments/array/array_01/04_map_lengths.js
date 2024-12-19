// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const lengthofWords = [];

  for (let index = 0; index < words.length; index++) {
    lengthofWords[index] = words[index].length;
  }

  return lengthofWords;
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
  const message = 'length of the words 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testMapLengths(array, expected) {
  const actual = mapLengths(array);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllMapLengths() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["app"], [3]);
  testMapLengths([], []);
  testMapLengths(['', '', ''], [0, 0, 0]);
}

testAllMapLengths();