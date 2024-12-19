// // Do not rename string, use it as input for your program.
// // While testing we will change it's value.
// const string = '   ';
// // Print the no.of words in given string. Consider multiple spaces.
// // If string = "multiple words" then output should be 2
// // START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// // let stringLength = string.length;
// // let noOfWords = 0;

// // for (let stringIndex = 0;stringIndex < stringLength; stringIndex++) {
// //     if (string[stringIndex] === " ") {
// //         if (string[stringIndex - 1] === " ") {
// //            continue; 
// //         } else if (string[stringIndex + 1] === " ") {
// //             continue;
// //         }
// //         noOfWords += 1;
// //     } 
// //     if (string[stringLength - 1] === " ") {
// //         stringLength--;
// //     }
// // }
// // console.log(noOfWords);

// let newString = '';
// let stringLength = string.length;
// let newStringLength = 0;
// let stringIndex = 0;
// let newStringIndex = 0;
// let noOfWords = 1;

// while (stringIndex < stringLength) {
//     if (string[stringIndex] !== " ") {
//         newStringLength = 1;
//     }

//     if (string[stringLength - 1] === " ") {
//         stringLength--;
//     }

//     if (newStringLength !== 0) {
//         newString = newString + string[stringIndex];
//     }

//     stringIndex++;
// }

// while (newStringIndex < newString.length) {
//     if (newString[newStringIndex + 1] === " ") {
//         noOfWords += 1;
//         noOfWords = (newStringIndex - 1 === 0) ? (noOfWords += 1) : noOfWords;
//         continue;
//     } 
//     newStringIndex += 1;
// }

// console.log(newString);
// console.log(noOfWords);



// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'this  is  cool';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// const SPACE = ' ';
// let stringLength = string.length;
// let noOfWords = (stringLength == 0)? 0 : 1;

// for (let stringIndex = 0; stringIndex < stringLength; stringIndex++) {
//     if (string[stringIndex] === SPACE  && string[stringIndex + 1] !== SPACE) {
//         noOfWords += 1;
//         continue; 
//     } 
//     if (string[stringLength - 1] === " ") {
//         stringLength--;
//     }
// }
// console.log(noOfWords);

const SPACE = ' ';
const newString = ' ' + string;
let noOfWords = 0;

for (let stringIndex = 1; stringIndex < newString.length; stringIndex++) {
    if (newString[stringIndex - 1] === SPACE  && newString[stringIndex] !== SPACE) {
        noOfWords += 1; 
    }    
}

console.log(noOfWords);