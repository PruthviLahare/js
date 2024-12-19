function quotient(dividend, divisor) {
  return dividend < divisor ? 0 : 1 + quotient(dividend - divisor, divisor);
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

function testQuotient(dividend, divisor, expected) {
  const actual = quotient(dividend, divisor);
  const mark = getMark(actual, expected);
  const message = assembleMessage(dividend, divisor, expected, actual);

  console.log(mark, message);
}

function testAllQuotient() {
  testQuotient(9, 3, 3);
  testQuotient(20, 5, 4);
  testQuotient(21, 5, 4);
  testQuotient(2, 5, 0);
  testQuotient(2, 2, 1);
}

testAllQuotient();