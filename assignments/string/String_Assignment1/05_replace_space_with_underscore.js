// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "statement with spaces";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// input                      output
//statement with spaces      statement_with_spaces
// "a b c"                   "a_b_c"
// "ab "                     "ab_"
// "as -b"                   "as_-b"

let stringWithUnderscore = '';
const SPACE = ' ';
const UNDERSCORE = '_';

for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    let nextChar = string[stringIndex] === SPACE ? UNDERSCORE : string[stringIndex];

    stringWithUnderscore = stringWithUnderscore + nextChar;
}
console.log(stringWithUnderscore);

