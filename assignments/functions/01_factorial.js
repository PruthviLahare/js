/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let currentProduct = 1; //=>product only

  for (let iterator = 1; iterator <= number; iterator++) {
    currentProduct = currentProduct * iterator;
  }

  return currentProduct;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'factorial of ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllFactorial() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
}

testAllFactorial();