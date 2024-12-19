function getSlicedString(text, start, end) {
  return start > end ? '' : text[start] + getSlicedString(text, start + 1, end);
}

function maximum(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function minimum(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

function slice(text, start, end) {
  const startIndex = maximum(start, 0);
  const endIndex = minimum(end, text.length - 1);

  return getSlicedString(text, startIndex, endIndex);
}


function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, expected, actual) {
  let message = 'String is "' + string + '"';
  message += "\n" + expectationSegment(actual, expected) + "\n";
  return message;
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, expected, actual);

  console.log(mark, message);
}

function testAllSlice() {
  testSlice('hello', 1, 2, 'el');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('hello world', 0, 4, 'hello');
  testSlice('hello world', 20, 24, '');
  testSlice('', 0, 10, '');
}

testAllSlice();