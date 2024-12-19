// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 0;
const b = 18;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let hcf = 0;

let smallNumber = a < b ? a : b; 
let bigNumber = a > b ? a : b;

if ( smallNumber === 0 ) {
    hcf = bigNumber;
} else {
    for ( let divisor = 1; divisor <= smallNumber; divisor++) {
        if (  bigNumber % divisor === 0 ) {
            if ( smallNumber % divisor === 0 ) {
                hcf = divisor;
            }
        }
    }
}
    
console.log(hcf);