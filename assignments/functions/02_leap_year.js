/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isLeapYear(year) {
  const isDivisibleBy400 = year % 400 === 0;
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(year, expected, actual) {
  const message = 'Is "' + year + '" a leap year';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testIsLeapYear(year, expected) {
  const actual = isLeapYear(year);
  const mark = getMark(actual, expected);
  const message = assembleMessage(year, expected, actual);

  console.log(mark, message);
}

function testAllIsLeapYear() {
  testIsLeapYear(400, true);
  testIsLeapYear(4, true);
  testIsLeapYear(2024, true);
  testIsLeapYear(2021, false);
}

testAllIsLeapYear();