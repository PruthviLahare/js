// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'pru the';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// input output
// abcba abcba
//  12    21
//  qq    qq
//  ''    ''
//pru the -> eht urp

const stringLength = string.length;
let reverseString = '';

for (let stringIndex = stringLength - 1; stringIndex >= 0; stringIndex--) {
    reverseString = reverseString + string[stringIndex];
}
console.log(reverseString);