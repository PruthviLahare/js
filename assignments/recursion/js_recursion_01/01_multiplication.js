function multiply(multiplier, multiplicand) {
  if (multiplicand === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(multiplier, multiplicand, expected, actual) {
  const message = 'Num1 : ' + multiplier + ' & Num2 : ' + multiplicand;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testMultiply(multiplier, multiplicand, expected) {
  const actual = multiply(multiplier, multiplicand);
  const mark = getMark(actual, expected);
  const message = assembleMessage(multiplier, multiplicand, expected, actual);

  console.log(mark, message);
}

function testAllMultiply() {
  testMultiply(2, 3, 6);
  testMultiply(3, 3, 9);
  testMultiply(0, 0, 0);
  testMultiply(4, 3, 12);
  testMultiply(0, 1, 0);
}

testAllMultiply();
