// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 2021;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isLeap = false;
const isDivisibleBy400 = (year % 400 === 0);
const isDivisibleBy4 = (year % 4 === 0);
const isDivisibleBy100 = (year % 100 === 0);

if (isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100)) {
  isLeap = true;
} 

// if ( year % 400 == 0 ) {
//     isLeap = true;
// } else if ( year % 100 !== 0) {
//     if ( year % 4 == 0) {
//       isLeap = true;
//     }
// }

console.log(isLeap);