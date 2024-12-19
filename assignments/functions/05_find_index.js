/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(string, find) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === find) {
      return index;
    }
  }

  return -1;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, find, expected, actual) {
  const message = string + " -> " + find;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFindIndex(string, find, expected) {
  const actual = findIndex(string, find);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, find, expected, actual);

  console.log(mark, message);
}

function testAllFindIndex() {
  testFindIndex('hello world', 'o', 4);
  testFindIndex('repeating iiiiiiii', 'i', 6);
  testFindIndex('not found', 'z', -1);
}

testAllFindIndex();