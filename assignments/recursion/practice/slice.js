function slice(string, start, end) {
  if (start >= end) {
    return string[start];
  }

  return string[start] + slice(string, start + 1, end);
}

function maximum(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function minimum(value1, value2) {
  return value1 < value2 ? value1 : value2;
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
  start = maximum(start, 0);
  end = minimum(end, string.length - 1);

  const actual = slice(string, start, end);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, expected, actual);

  console.log(mark, message);
}

function testAllSlice() {
  testSlice('hello', 1, 2, 'el');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('hello world', 0, 4, 'hello');
  testSlice('', 0, 10, '');
}

testAllSlice();