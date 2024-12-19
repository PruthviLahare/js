function locateCharacter(string, char, index) {
  if (index >= string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return locateCharacter(string, char, index + 1);
}

function findIndex(string, char) {
  return locateCharacter(string, char, 0);
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

function testFindIndex(string, character, expected) {
  const actual = findIndex(string, character);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, character, expected, actual);

  console.log(mark, message);
}

function testAllFindIndex() {
  testFindIndex('hello', 'h', 0);
  testFindIndex('hello', 'o', 4);
  testFindIndex('hello', 'p', -1);
  testFindIndex('', 'p', -1);
  testFindIndex('', '', -1);
  testFindIndex('opu', '', -1);
}

testAllFindIndex();