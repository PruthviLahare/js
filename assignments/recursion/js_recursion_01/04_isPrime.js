function isNumberPrime(primeCandidate, divisor) {
  if (divisor === primeCandidate) {
    return true;
  }

  // if (primeCandidate <= divisor) {
  //   return primeCandidate >= 2;
  // }

  if (primeCandidate % divisor === 0) {
    return false;
  }

  return isNumberPrime(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isNumberPrime(primeCandidate, 2);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'isPrime : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testIsPrime(number, expected) {
  const actual = isPrime(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllIsPrime() {
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(5, true);
  testIsPrime(7, true);
  testIsPrime(8, false);
  testIsPrime(10, false);
}

testAllIsPrime();