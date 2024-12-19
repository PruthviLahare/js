function reverseOfString(string, currenrPos) {
  if (currenrPos < 0) {
    return '';
  }

  return string[currenrPos] + reverseOfString(string, currenrPos - 1);
}

console.log(reverseOfString('Hello', 4));
console.log(reverseOfString('Hello World', 10));
// console.log(reverseOfString("", 0));