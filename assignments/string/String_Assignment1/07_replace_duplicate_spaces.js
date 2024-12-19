// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "     p   b      c   ";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// Input            output
//" p  j"              "p j"
//" p   b  c"             "p b c"
//"b "              "b"
//" -"              "-"

let newString = '';
let stringIndex = 0;
let newStringIndex = 0;
const SPACE = ' ';

while (stringIndex < string.length) {
    if (newString[newStringIndex - 1] === SPACE && string[stringIndex] === SPACE) {
        stringIndex++;
        continue;
    }
    newString = newString + string[stringIndex];
    newStringIndex += 1;
    stringIndex++;
}

console.log(newString);