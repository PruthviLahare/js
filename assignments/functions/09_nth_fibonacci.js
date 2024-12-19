/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(number) {
  let currentTerm = 0;
  let nextTerm = 1;
  let nextToNextTerm = 0;

  for (let noOfTerms = number; noOfTerms > 1; noOfTerms--) {
    nextToNextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = nextToNextTerm;
  }

  return currentTerm;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'Number : ' + number;

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
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
}

testAllNthFibonacciTerm();