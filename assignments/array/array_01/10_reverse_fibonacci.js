// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function reverseOfFibonacci(nthTerm) {
  let currentTerm = 0;
  let nextTerm = 1;
  const fibonacciTerms = [];

  for (let term = nthTerm - 1; term >= 0; term--) {
    // const termFromLast = nthTerm - 1 - term;

    fibonacciTerms[termFromLast] = currentTerm;
    currentTerm = nextTerm;
    nextTerm = fibonacciTerms[termFromLast] + nextTerm;
  }

  return fibonacciTerms;
}

function reverseFibonacci(nthTerm) {
  return reverseOfFibonacci(nthTerm);
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(term, expected, actual) {
  const message = 'first ' + term + ' elements of fibonacci in Reverse 👉';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testReverseFibonacci(term, expected) {
  const actual = reverseFibonacci(term);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(term, expected, actual));
}

function testAllReverseFibonacci() {
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
}

testAllReverseFibonacci();