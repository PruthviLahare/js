/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getNextChar(currentCharacter, match, replacement) {
  return currentCharacter === match ? replacement : currentCharacter;
}

function replace(text, match, replacement) {
  let replaceText = '';

  for (let index = 0; index < text.length; index++) {
    replaceText += getNextChar(text[index], match, replacement);
  }

  return replaceText;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(text, match, replace, expected, actual) {
  const message = '"' + match + '" -> "' + replace + '" in "' + text + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual, expected);
  const message = assembleMessage(text, match, replacement, expected, actual);

  console.log(mark, message);
}

function testAllReplace() {
  testReplace('lol', 'l', 'p', 'pop');
  testReplace('hello world', 'l', 'n', 'henno wornd');
  testReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
}

testAllReplace();