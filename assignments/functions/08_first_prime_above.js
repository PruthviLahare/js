/*
Write a function that returns the first prime number above given number

Examples:
firstPrimeAbove(3) => 5
firstPrimeAbove(0) => 2
firstPrimeAbove(15) => 17

**Your function must return a value**

It's not necessary to print the result on screen, 
however to test your function you are free to print the result
*/

function isPrime(number) {
  for (let divisor = 2; divisor <= number / 2; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return number >= 2;
}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate = primeCandidate + 1;
  }

  return primeCandidate;
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
  const actual = firstPrimeAbove(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllFirstPrimeAbove() {
  testNthFibonacciTerm(0, 2);
  testNthFibonacciTerm(1, 2);
  testNthFibonacciTerm(2, 3);
  testNthFibonacciTerm(3, 5);
}

testAllFirstPrimeAbove();