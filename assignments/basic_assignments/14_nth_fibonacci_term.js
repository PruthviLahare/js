// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 2;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let nTerm = n;
let currentTerm = 0;
let nextTerm = 1;
let term = 0;

    for (let i = 1; i < nTerm; i++) {
        term = currentTerm + nextTerm;
        currentTerm = nextTerm;
        nextTerm = term;    
   }

console.log(currentTerm);


