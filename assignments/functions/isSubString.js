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

function maximum(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function minimum(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

function slice(text, start, end) {
  let subString = '';
  const startRange = maximum(start, 0);
  const endRange = minimum(end, text.length - 1);

  for (let index = startRange; index <= endRange; index++) {
    subString += text[index];
  }

  return subString;
}

function isSubstring(string, subString) {
  let end = subString.length - 1;
  
  for (let start = 0; start < string.length; start++) {
    const getSliceString = slice(string, start, end);
    if (getSliceString === subString) {
      return true;
    }
    end++;
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
  testIsSubstring('f', 'h', false);
  testIsSubstring('ty', 'h', false);
  testIsSubstring('ty', 'y', true);
  testIsSubstring('hello world', 'ld', true);
  testIsSubstring('hello world', 'hr', false);
  testIsSubstring('hello world', 'hr', false);
}

testAllIsSubstring();