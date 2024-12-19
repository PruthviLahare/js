function repeat(string, noOfTimes) {
  return noOfTimes === 0 ? '' : string + repeat(string, noOfTimes - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(string, noOfTimes, expected, actual) {
  let message = 'Repeat String "' + string + '" ' + noOfTimes + ' times';
  message += "\n" + expectationSegment(actual, expected) + "\n";
  return message;
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testRepeat(string, noOfTimes, expected) {
  const actual = repeat(string, noOfTimes);
  const mark = getMark(actual, expected);
  const message = assembleMessage(string, noOfTimes, expected, actual);

  console.log(mark, message);
}

function testAllRepeat() {
  testRepeat('hello', 2, 'hellohello');
  testRepeat('hello', 1, 'hello');
  testRepeat('hello', 0, '');
  testRepeat('hello', 3, 'hellohellohello');
}

testAllRepeat();