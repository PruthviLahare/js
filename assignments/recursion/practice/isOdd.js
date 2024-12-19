function isOdd(number) {
  return number < 1 ? number < 0 : isOdd(number - 2);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'Number : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testisEven(number, expected) {
  const actual = isOdd(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllisEven() {
  testisEven(2, false);
  testisEven(32, false);
  testisEven(5, true);
  testisEven(0, false);
  // testisEven(-1, false);
  testisEven(4, false);
  testisEven(7, true);
}

testAllisEven();