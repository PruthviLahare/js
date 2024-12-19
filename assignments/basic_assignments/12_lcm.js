// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 0;
const b = 0;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let smallerNumber = a;
let biggerNumber =   b;
let hcf =   0;
let lcm =   0;

if ( b < smallerNumber ) {
    smallerNumber = b;
    biggerNumber = a;
}

if ( smallerNumber === 0 ) { 
    hcf = biggerNumber;
    lcm = 0;
} else {
    for ( let divisor = 1; divisor <= smallerNumber; divisor++ ) {
        if ( a % divisor === 0 ) {
            if ( b % divisor === 0 ) {
                hcf = divisor;
            }
        }
    }
    lcm = ( a * b ) / hcf;
}
console.log(lcm);