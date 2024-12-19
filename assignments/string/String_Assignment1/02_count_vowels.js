// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'pruthvi ii';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfVowels = 0;
const vowels = 'aeiouAEIOU';

for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        if (string[stringIndex] === vowels[vowelIndex]) {
            noOfVowels += 1;
        }
    }
}

console.log(noOfVowels);