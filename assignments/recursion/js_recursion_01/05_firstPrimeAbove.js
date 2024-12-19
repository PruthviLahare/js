function isPrime(primeCandidate, divisor) {
  if (divisor === primeCandidate) {
    return true;
  }

  if (primeCandidate % divisor === 0) {
    return false;
  }

  return isPrime(primeCandidate, divisor + 1);
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  return isPrime(number + 1, 2) ? number + 1 : firstPrimeAbove(number + 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'first Prime Number above : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllfirstPrimeAbove() {
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(-2, 2);
}

testAllfirstPrimeAbove();