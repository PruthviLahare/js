/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function maximum(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

function minimum(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

function slice(text, start, end) {
  let textSlice = '';
  const startRange = maximum(start, 0);
  const endRange = minimum(end, text.length - 1);

  for (let index = startRange; index <= endRange; index++) {
    textSlice += text[index];
  }

  return textSlice;
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
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('hello world', 0, 4, 'hello');
  testSlice('', 0, 10, '');
}

testAllSlice();