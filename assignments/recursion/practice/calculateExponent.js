function isEven(number, exponent) {
  return exponent === 0 ? 1 : number * isEven(number, exponent - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, power, expected, actual) {
  const message = 'Number : ' + number + ', power : ' + power;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testisEven(number, exponent, expected) {
  const actual = isEven(number, exponent);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, isEven, expected, actual);

  console.log(mark, message);
}

function testAllisEven() {
  testisEven(2, 5, 32);
  testisEven(32, 2, 1024);
  testisEven(32, 0, 1);
}

testAllisEven();