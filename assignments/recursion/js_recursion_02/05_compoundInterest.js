function compoundInterest(principal, rate, time) {
  if (time < 1) {
    return 0;
  }

  const simpleInterest = (principal * rate) / 100;
  const updatedPrincipal = principal + simpleInterest;

  return simpleInterest + compoundInterest(updatedPrincipal, rate, time - 1);
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(principal, rate, time, actual, expected) {
  let message = 'principal:' + principal + '  rate:' + rate;
  message += '  time:' + time;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testCompoundInterest(principal, rate, time, expected) {
  const actual = compoundInterest(principal, rate, time);
  const mark = getMark(actual, expected);
  const message = assembleMessage(principal, rate, time, actual, expected);

  console.log(mark, message);
}

function testAllCompoundInterest() {
  testCompoundInterest(100, 5, 2, (100 * (1 + (5 / 100)) ** 2) - 100);
  testCompoundInterest(1, 1, 1, (1 * (1 + (1 / 100)) ** 1) - 1);
  testCompoundInterest(0, 1, 1, (0 * (1 + (1 / 100)) ** 1) - 0);
}

testAllCompoundInterest();