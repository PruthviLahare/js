function isEven(number) {
  return number < 1 ? number === 0 : isEven(number - 2);
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
  const actual = isEven(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllisEven() {
  testisEven(2, true);
  testisEven(32, true);
  testisEven(5, false);
  testisEven(0, true);
  // testisEven(-1, false);
  // testisEven(-2, true);
}

testAllisEven();