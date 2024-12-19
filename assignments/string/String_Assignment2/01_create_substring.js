// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "";
const start = 0;
const end = 0;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// input         start     end       output
// ' bhb'         0         3         ' bhb'
// '  io '        4         4         ' '
// 'pruthvi'      -5       100        'pruthvi'

let substring = '';
const index = start < 0 ? 0 : start;
const actualEnd = end >= string.length ? string.length - 1 : end;

for (let stringIndex = index; stringIndex <= actualEnd; stringIndex++) {
    substring = substring + string[stringIndex];
}

console.log(substring);