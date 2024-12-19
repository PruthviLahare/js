// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(12.3) => [1, 2, 3]

function extractDigits(number) {
  if (number === 0) {
    return [0];
  }

  const numberArray = [];
  let numericValue = Math.abs(number);

  while (numericValue > 0) {
    numberArray.unshift(numericValue % 10);
    numericValue = Math.floor(numericValue / 10);
  }

  return numberArray;
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
  const message = 'is Array in descending order 👉 "' + array + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testIsExtractDigits(array, expected) {
  const actual = extractDigits(array);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array, expected, actual));
}

function testAllExtractDigits() {
  testIsExtractDigits(123, [1, 2, 3]);
  testIsExtractDigits(-123, [1, 2, 3]);
  testIsExtractDigits(0, [0]);
  testIsExtractDigits(100, [1, 0, 0]);
  testIsExtractDigits(109, [1, 0, 9]);
}

testAllExtractDigits();