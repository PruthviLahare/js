/*
  Write string function that tells if string string ends with string specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return string value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function endsWith(string, substring) {
  let subIndex = 0;
  let index = string.length - substring.length;

  for (index; index < string.length; index++) {
    if (string[index] !== substring[subIndex]) {
      return false;
    }

    subIndex++;
  }

  return true;
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function message(string, lastDigits, expected, actual, mark) {
  let contextualMsg = " String: " + string + "| subString: " + lastDigits;
  contextualMsg += "| Expected : " + expected + "| Actual: " + actual;

  return contextualMsg;
}

function testEndsWith(string, lastDigits, expected) {
  const actual = endsWith(string, lastDigits);
  const mark = getMark(actual, expected);

  console.log(mark, message(string, lastDigits, expected, actual, mark));
}

function testsForEndsWith() {
  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('hello world', 'zebra', false);
  testEndsWith('jjjjjjjjjj', 'jj', true);
  testEndsWith('jjjjjjjjjj', 'jj', true);
}

testsForEndsWith();