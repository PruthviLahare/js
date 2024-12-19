// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 100;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let factors = 2;
let number  = a;

if ( number < 2 ) {

    console.log(0);

}

while ( number > 1 ) {

    if ( number % factors == 0 ) {

        console.log( factors );
        number = ( number / factors );
        continue;
    }

    factors++;
}