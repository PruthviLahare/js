function isCharacterSame(string, front, back) {
  if (front >= back) {
    return true;
  }

  if (string[front] === string[back]) {
    return isCharacterSame(string, front + 1, back - 1);
  }

  return false;
}

function isPalindrome(palindromeCandidate) {
  const end = palindromeCandidate.length - 1;

  return isCharacterSame(palindromeCandidate, 0, end);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'is Number Palindrome : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testIsPalindrome(number, expected) {
  const actual = isPalindrome(number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllIsPalindrome() {
  testIsPalindrome('121', true);
  testIsPalindrome('mom', true);
  testIsPalindrome('sky', false);
  testIsPalindrome('-1', false);
  testIsPalindrome('', true);
}

testAllIsPalindrome();