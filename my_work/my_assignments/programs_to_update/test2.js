// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const previousChar = " ";
let noOfWords = (string[0] !== previousChar)? 1 : 0;

for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    const currentChar = string[stringIndex];
     
    if (string[stringIndex + 1] === previousChar && string[stringIndex] !== previousChar) {
        noOfWords += 1;
    }
}       
console.log(noOfWords);
