function fibonnacci(current, next, n) {
  return n === 1 ? current : fibonnacci(next, current + next, --n);
}

// function fibonnacci(n) {
//   if (n === 1) {
//     return 0;
//   }
//   if (n === 2) {
//     return 1;
//   }

//   return fibonnacci(n - 1) + fibonnacci(n - 2);
// }

// console.log(fibonnacci(5));
// console.log(fibonnacci(4));


function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(number, expected, actual) {
  const message = 'Number : ' + number;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testnthFibonacciTerm(currentTerm, nextTerm, number, expected) {
  const actual = fibonnaci(currentTerm, nextTerm, number);
  const mark = getMark(actual, expected);
  const message = assembleMessage(number, expected, actual);

  console.log(mark, message);
}

function testAllnthFibonacciTerm() {
  testnthFibonacciTerm(0, 1, 1, 0);
  testnthFibonacciTerm(0, 1, 2, 1);
}

testAllnthFibonacciTerm();