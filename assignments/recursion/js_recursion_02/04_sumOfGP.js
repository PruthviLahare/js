function sumOfGP(firstTerm, rate, nthTerm) {
  if (nthTerm < 1) {
    return 0;
  }

  return firstTerm + sumOfGP(firstTerm * rate, rate, nthTerm - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(nthTerm, expected, actual) {
  const message = 'find sum of G.P till term -: "' + nthTerm + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testSumOfGP(firstTerm, rate, nthTerm, expected) {
  const actual = sumOfGP(firstTerm, rate, nthTerm);
  const mark = getMark(actual, expected);
  const message = assembleMessage(nthTerm, expected, actual);

  console.log(mark, message);
}

// a(1 - rn) / (1 - r),

function testAllSumOfGP() {
  testSumOfGP(2, 3, 4, (2 * (1 - (3 ** 4)) / (1 - 3)));
  testSumOfGP(0, 3, 4, (0 * (1 - (3 ** 4)) / (1 - 3)));
  testSumOfGP(0, 0, 4, (0 * (1 - (0 ** 4)) / (1 - 0)));
  testSumOfGP(1, 0, 4, (1 * (1 - (0 ** 4)) / (1 - 0)));
  testSumOfGP(10, 0, 4, (10 * (1 - (0 ** 4)) / (1 - 0)));
  testSumOfGP(0, 0, 0, 0);
};

testAllSumOfGP();