// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 2;
const endOfRange = 11;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let actualRange = (startOfRange < 2) ? 2 : startOfRange; 

for (let canBePrime = actualRange; canBePrime <= endOfRange; canBePrime++) {
    let isPrime = true;

    for (let divisor = 2; divisor < canBePrime; divisor++) {
        if (canBePrime % divisor == 0) {
            isPrime = false;
            break;
        } 
    }
    
    if (isPrime) {
        console.log(canBePrime);
    }
}