// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
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

function testFindIndex(array1, element, expected) {
  const actual = findIndex(array1, element);
  const mark = getMark(actual, expected);

  console.log(mark, assembleMessage(array1, element, expected, actual));
}

function testAllFindIndex() {
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
  testFindIndex(["apple", "cake", "coffee", "tea"], "tea", 3);
  testFindIndex(["apple", "cake", "coffee", "tea"], "sky", -1);
  testFindIndex([], "sky", -1);
  testFindIndex(['sky'], "sky", 0);
}

testAllFindIndex();