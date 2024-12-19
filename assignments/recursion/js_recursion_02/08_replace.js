function replaceTarget(text, index, target, replacement) {
  if (index >= text.length) {
    return '';
  }

  if (text[index] === target) {
    return replacement + replaceTarget(text, index + 1, target, replacement);
  }

  return text[index] + replaceTarget(text, index + 1, target, replacement);
}

function replace(text, target, replacement) {
  return replaceTarget(text, 0, target, replacement);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(text, match, replace, expected, actual) {
  const message = 'Replace "' + match + '" -> "' + replace + '" in "' + text + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const mark = getMark(actual, expected);
  const message = assembleMessage(text, target, replacement, expected, actual);

  console.log(mark, message);
}

function testAllReplace() {
  testReplace('lol', 'l', 'p', 'pop');
  testReplace('hello world', 'l', 'n', 'henno wornd');
  testReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testReplace('', '', '', '');
}

testAllReplace();