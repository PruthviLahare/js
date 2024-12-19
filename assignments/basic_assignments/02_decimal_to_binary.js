// Do not rename a, use it as input for your program.
// a will be a natural numberber.
// While testing we will change its value.
const a = 2;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = a;
let remainder = 1;

while (number >= 2) {
  remainder = number % 2;
  console.log(remainder);
  number = (number - remainder) / 2;
}

console.log(number);