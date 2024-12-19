function slice(string, start, end) {
  if (start >= end) {
    return '';
  }

  return string[start] + slice(string, start + 1, end);
}

function isSubStringPresent(string, otherString, index) {
  const start = index;
  const end = index + otherString.length;

  if (index > string.length) {
    return false;
  }

  if (slice(string, start, end) === otherString) {
    return true;
  }

  return isSubStringPresent(string, otherString, index + 1);
}

function isSubString(string, otherString) {
  if (otherString.length === 0) {
    return false;
  }
  return isSubStringPresent(string, otherString, 0);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, subString, expected, actual) {
  const message = 'String : ' + string + ' \nsubString : ' + subString;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFindIndex(string, subString, expected) {
  const actual = isSubString(string, subString);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, subString, expected, actual);

  console.log(mark, message);
}

function testAllFindIndex() {
  testFindIndex('hello', 'ho', false);
  testFindIndex('hello', 'lo', true);
  testFindIndex('hello', 'llo', true);
  testFindIndex('hello', 'p', false);
  testFindIndex('hello', '', false);
  testFindIndex('', '', false);
  testFindIndex('hello', 'hello', true);
  testFindIndex('hello', 'hello world', false);
  testFindIndex('hello world', 'hello', true);
  testFindIndex('hello world', 'worlds', false);
}

testAllFindIndex();