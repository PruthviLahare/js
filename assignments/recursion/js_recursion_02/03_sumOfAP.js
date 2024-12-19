function sumOfAP(firstTerm, difference, nthTerm) {
  if (nthTerm < 1) {
    return 0;
  }

  return firstTerm + sumOfAP(firstTerm + difference, difference, nthTerm - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(nthTerm, expected, actual) {
  const message = 'find sum of A.P till term -: "' + nthTerm + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testSumOfAP(firstTerm, difference, nthTerm, expected) {
  const actual = sumOfAP(firstTerm, difference, nthTerm);
  const mark = getMark(actual, expected);
  const message = assembleMessage(nthTerm, expected, actual);

  console.log(mark, message);
}

function testAllSumOfAP() {
  testSumOfAP(2, 3, 4, 26);
  testSumOfAP(0, 3, 4, 18);
  testSumOfAP(0, 0, 4, 0);
  testSumOfAP(1, 0, 4, 4);
  testSumOfAP(10, 0, 4, 40);
  testSumOfAP(0, 0, 0, 0);
}

testAllSumOfAP();