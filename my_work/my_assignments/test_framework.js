const add = function (num1, num2) {
  return num1 + num2;
};

const test = function ([func, values, expected]) {
  const actual = func(...values);
  return actual !== expected;
};

function testFramework() {
  const testCases = [[add, [2, 3], 5], [add, [10, 1], 11]];
  const failed = testCases.filter(test);
  console.table(failed);
}

testFramework();