// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = " this   is cool  ";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reverseSentence = '';
let reverseWord = '';
let end = sentence.length - 1;

for (let index = end; index >= 0; index--) {

    if (sentence[index] !== ' ') {
        reverseSentence += sentence[index];
    } 

    if (sentence[index] === ' ' || index === 0) {
        let revWordLength = (reverseSentence.length - 1);

        for (let revIndex = revWordLength; revIndex >= 0; revIndex--) {
            reverseWord += reverseSentence[revIndex];
        }  

        if (index !== 0 || sentence[0] === ' ') {
            reverseWord += ' ';
        }

        reverseSentence = '';
    }
}

console.log(reverseWord);