// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 124 ;
// Print true if a is isPrime otherwise print false
// Printing more than one output or printing anything other than isPrime or not isPrime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isPrime = false;
let checkNumber = a;
let divisor = 2;

while (!isPrime && checkNumber > 1) {
   if (checkNumber % divisor === 0) {
      if (divisor == a) {
         isPrime = true;  
      } 
   }
   divisor++;
}

console.log(isPrime);







