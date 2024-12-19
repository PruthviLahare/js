function fibonacci(current, next, term) {
  return term === 1 ? current : fibonacci(next, current + next, term - 1);
}

function nthFibonacciTerm(n) {
  if (n < 1) {
    return -1;
  }

  return fibonacci(0, 1, n);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'Fibo term of : "' + number + '" is';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testNthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllNthFibonacciTerm() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(0, -1);
  testNthFibonacciTerm(5, 3);
}

testAllNthFibonacciTerm();