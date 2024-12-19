// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "10";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// const stringLength = string.length;
// let endPosition = stringLength;
// let isPalindrome = true;

// for (let stringIndex = 0; stringIndex < stringLength / 2; stringIndex++) {
//     if (string[stringIndex] !== string[endPosition - 1]) {
//         isPalindrome = false;
//     }

//     endPosition--;
// }

// console.log(isPalindrome);

let startPosition = -1;
let endPosition = string.length;
let isPalindrome = true;
let checkPosition = startPosition <= endPosition;

while (string[endPosition] === string[startPosition] && checkPosition) {
    startPosition++;
    endPosition--;
    checkPosition = startPosition <= endPosition;
}

console.log(startPosition >= endPosition);