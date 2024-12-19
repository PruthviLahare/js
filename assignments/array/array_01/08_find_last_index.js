// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(array1, element, expected, actual) {
  let message = 'first index of element in array :- "' + array1 + '" 👉 "';
  message += element + '" is ' + expected;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testFindLastIndex(array1, element, expected) {
  const actual = findLastIndex(array1, element);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array1, element, expected, actual));
}

function testAllFindLastIndex() {
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindLastIndex(["apple", "cake", "coffee", "tea"], "tea", 3);
  testFindLastIndex(["apple", "cake", "coffee", "tea"], "sky", -1);
  testFindLastIndex([], "sky", -1);
  testFindLastIndex(['sky'], "sky", 0);
  testFindLastIndex([1, 1, 1, 1, 1], 1, 4);
}

testAllFindLastIndex();