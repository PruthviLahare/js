// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'AjBBC';
const charToFind = 'c';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let foundChar = -1;
let stringIndex = 0;

while ((stringIndex < string.length) && (foundChar === -1)) {
    if (string[stringIndex] === charToFind) {
        foundChar = stringIndex;
    }
    stringIndex++;
}

console.log(foundChar);

// abccdef , p -> -1
// abccdef , c -> 2
// '' , '' -> -1
//