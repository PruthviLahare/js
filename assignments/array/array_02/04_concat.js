function concat(array1, array2) {
  const concatinated = [];

  for (let index = 0; index < array1.length; index++) {
    concatinated.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatinated.push(array2[index]);
  }

  return concatinated;
}


function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(array1, array2, expected, actual) {
  const message = 'Concatinate 👉 "' + array1 + '" & "' + array2 + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const areArrayEqual = areEqual(actual, expected);
  const mark = getMark(areArrayEqual);

  console.log(mark, assembleMessage(array1, array2, expected, actual));
}

function testAllConcat() {
  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
  testConcat([1], [4, 5, 6], [1, 4, 5, 6]);
  testConcat([], [], []);
  testConcat([], [1], [1]);
}

testAllConcat();