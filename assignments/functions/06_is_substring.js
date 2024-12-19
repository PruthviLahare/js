/*
  Implement the below function that tells if a string is substring of 
  another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

//test cases
// 'h'       'h'     => true
// ''        ''      => false
// 'abc'     ''      => false

function isSubStringPresentAt(string, subString, position) {
  for (let index = 0; index < subString.length; index++) {
    if (string[position + index] !== subString[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (subString === '') {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (isSubStringPresentAt(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, find, expected, actual) {
  const message = '"' + string + '" -> "' + find + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testIsSubstring(string, subString, expected) {
  const actual = isSubstring(string, subString);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(string, subString, expected, actual));
}

function testAllIsSubstring() {
  testIsSubstring('h', 'h', true);
  testIsSubstring('', '', false);
  testIsSubstring('ad', 'a', true);
  testIsSubstring('ad', '', false);
  testIsSubstring('aiiib', 'iib', true);
  testIsSubstring('z', 'c', false);
  testIsSubstring('hello world', 'worn', false);
  testIsSubstring('repeating iiiiiiii', 'iii', true);
}

testAllIsSubstring();