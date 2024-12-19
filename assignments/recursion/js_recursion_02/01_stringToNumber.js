function convertToNumber(string, power, index) {
  if (index >= string.length) {
    return 0;
  }

  const placeValue = +string[index] * (10 ** power);

  return placeValue + convertToNumber(string, power - 1, index + 1);
}

function stringToNumber(string) {
  const index = string[0] === '-' || string[0] === '+' ? 1 : 0;

  if (string[0] === '-') {
    return - + convertToNumber(string, string.length - 1 - index, index);
  }

  return convertToNumber(string, string.length - 1 - index, index);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, expected, actual) {
  const message = ' Convert "' + string + '" to Number';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, expected, actual);

  console.log(mark, message);
}

function testAllStringToNumber() {
  testStringToNumber('121', 121);
  testStringToNumber('4555', 4555);
  testStringToNumber('1', 1);
  testStringToNumber('-100', -100);
  testStringToNumber('+100', +100);
}

testAllStringToNumber();