function add(a, b) {
  return a + b;

}

function message(a, b, expectedOutput, actualOutput, isOutputValid) {
  let mess = "Indicator: " + isOutputValid + "| Number1: " + a + "| Number2: " + b;
  mess += "| Expected Output: " + expectedOutput + "| ActualOutput: " + actualOutput;
  return mess;

}

function test(a, b, expectedOutput) {
  let actualOutput = add(a, b);
  let isOutputValid = expectedOutput === actualOutput ? '✅' :'❌';
  
  console.log(message(a, b, expectedOutput, actualOutput, isOutputValid));
}

function testAll() {
  test(3, 2, 5);
  test(3, 2, 5);
  test(3, 2, 5);
  test(3, 2, 5);
  test(3, 2, 5);
  // test(3, 2, 5);
  // test(3, 2, 5);
  // test(3, 2, 5);
  // test(3, 2, 5);
}

testAll();