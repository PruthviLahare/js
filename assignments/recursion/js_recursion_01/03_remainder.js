function remainder(dividend, divisor) {
  return dividend < divisor ? dividend : remainder(dividend - divisor, divisor);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(dividend, divisor, expected, actual) {
  const message = 'dividend : ' + dividend + ' & divisor : ' + divisor;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testRemainder(dividend, divisor, expected) {
  const actual = remainder(dividend, divisor);
  const mark = getMark(actual, expected);
  const message = assembleMessage(dividend, divisor, expected, actual);

  console.log(mark, message);
}

function testAllRemainder() {
  testRemainder(9, 3, 0);
  testRemainder(14, 2, 0);
  testRemainder(2, 2, 0);
  testRemainder(2, 3, 2);
  testRemainder(19, 3, 1);
  testRemainder(0, 3, 0);
}

testAllRemainder();