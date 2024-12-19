/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

const FIZZBUZZ = 'fizzbuzz';
const FIZZ = 'fizz';
const BUZZ = 'buzz';

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  const THREE = 3;
  const FIVE = 5;
  const FIFTEEN = 15;

  if (isDivisibleBy(number, FIFTEEN)) {
    return FIZZBUZZ;
  }

  if (isDivisibleBy(number, THREE)) {
    return FIZZ;
  }
  if (isDivisibleBy(number, FIVE)) {
    return BUZZ;
  }

  return number + '';
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(integer, expected, actual) {
  const message = integer;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFizzBuzz(integer, expected) {
  const actual = fizzBuzz(integer);
  const mark = getMark(actual, expected);
  const message = assembleMessage(integer, expected, actual);

  console.log(mark, message);
}

function testsForfizzBuzz() {
  testFizzBuzz(3, FIZZ);
  testFizzBuzz(5, BUZZ);
  testFizzBuzz(15,FIZZBUZZ);
  testFizzBuzz(4, '4');
  testFizzBuzz(-1,'-1');
}

testsForfizzBuzz();