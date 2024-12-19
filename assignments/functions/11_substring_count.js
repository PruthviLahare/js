/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringPresentAt(string, substring, position) {
  for (let index = 0; index < substring.length; index++) {
    if (string[position + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function occurrences(string, substring) {
  let matchCount = 0;

  for (let location = 0; location < string.length; location++) {
    if (isSubStringPresentAt(string, substring, location)) {
      matchCount++;
    }
  }

  return matchCount;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'String : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testOccurrences(string, subString, expected) {
  const actual = occurrences(string, subString);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, expected, actual);

  console.log(mark, message);
}

function testAllOccurrences() {
  testOccurrences('hello world', 'l', 3);
  testOccurrences('hello world', 'll', 1);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hello world', 'zebra', 0);
  testOccurrences('jjjjjjjjjj', 'jj', 9);
}

testAllOccurrences();