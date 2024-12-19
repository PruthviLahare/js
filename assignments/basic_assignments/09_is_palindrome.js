// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let palindromeCandidate = a;
let remainder = 0;
let reverse = 0;

while ( palindromeCandidate > 0 ) {

     remainder = palindromeCandidate % 10;
     reverse = ( reverse * 10 ) + remainder;
     palindromeCandidate = ( palindromeCandidate - remainder ) / 10 ;

    
}

let isPalindrome = a === reverse;

console.log(isPalindrome);

