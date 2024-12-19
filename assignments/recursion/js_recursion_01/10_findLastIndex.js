function locateCharacter(string, char, index) {
  if (index < 0) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return locateCharacter(string, char, index - 1);
}

function findLastIndex(string, char) {
  return locateCharacter(string, char, string.length - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, subString, expected, actual) {
  const message = 'String : ' + string + ' \ncharacter : ' + subString;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFindLastIndex(string, character, expected) {
  const actual = findLastIndex(string, character);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, character, expected, actual);

  console.log(mark, message);
}

function testAllFindLastIndex() {
  testFindLastIndex('hello', 'h', 0);
  testFindLastIndex('hello', 'l', 3);
  testFindLastIndex('hello', 'p', -1);
  testFindLastIndex('', 'p', -1);
  testFindLastIndex('', '', -1);
  testFindLastIndex('opu', '', -1);
}

testAllFindLastIndex();