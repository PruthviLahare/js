// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = ' ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let stringLength = string.length;
let noOfWords = (stringLength == 0)? 0 : 1;

for (let stringIndex = 1;stringIndex < stringLength; stringIndex++) {
    if (string[stringIndex] === " "  && string[stringIndex + 1] !== " ") {

        noOfWords += 1;
        continue; 
    } 
    if (string[stringLength - 1] === " ") {
        stringLength--;
    }
}
console.log(noOfWords);