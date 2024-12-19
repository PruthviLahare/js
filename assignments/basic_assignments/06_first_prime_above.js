// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 1;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let actualRange = a;
let getAbovePrime = 1;

let canBePrime = a < 2? 2 : actualRange + 1;

for (canBePrime; getAbovePrime < 2; canBePrime++) {

    let isPrime = true;
    for (let divisor = 2; divisor < canBePrime; divisor++) {
        if (canBePrime % divisor == 0) {
            isPrime = false;
            break;
        } 
    }
    
    if (isPrime) {

        console.log(canBePrime);
        getAbovePrime++;
  
    }
}