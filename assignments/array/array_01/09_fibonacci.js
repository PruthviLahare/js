// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function fibonacci(nthTerm) {
  const fibo = [0, 1];
  const fibonacciTerms = [];

  for (let term = 0; term < nthTerm; term++) {
    fibonacciTerms[term] = fibo[term];
    fibo[term + 2] = fibo[term] + fibo[term + 1];
  }

  return fibonacciTerms;
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
  const message = 'first ' + term + ' elements of fibonacci 👉';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testFibonacci(term, expected) {
  const actual = fibonacci(term);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(term, expected, actual));
}

function testAllFibonacci() {
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(0, []);
}

testAllFibonacci();