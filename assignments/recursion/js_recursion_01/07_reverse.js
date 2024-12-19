function reverseTheString(string, currenrPos) {
  if (currenrPos < 0) {
    return '';
  }

  return string[currenrPos] + reverseTheString(string, currenrPos - 1);
}

function reverse(string) {
  return reverseTheString(string, string.length - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, expected, actual) {
  const message = 'Reverse this String : ' + string;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, expected, actual);

  console.log(mark, message);
}

function testAllReverse() {
  testReverse('hello', 'olleh');
  testReverse('mom', 'mom');
  testReverse(' sky', 'yks ');
  testReverse('', '');
}

testAllReverse();