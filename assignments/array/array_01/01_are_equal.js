// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

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
  const message =
    'are given array same ❓ "' + array1 + '" 👉 "' + array2 + '"';

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? "✅" : "❌";
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array1, array2, expected, actual));
}

function testAllAreEqual() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([], [], true);
  testAreEqual([1, 1, 1], [1, 1, 1], true);
  testAreEqual([[1]], [[1]], true); // getting wrong
  testAreEqual([[1], [1, 2]], [[1], [1, 2]], true); // getting wrong
}

testAllAreEqual();
