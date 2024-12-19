let multipleOne = 999;
let multipleTwo = 100;
let palindrome = 0;

while(multipleOne > multipleTwo) {
for (let multiplier = multipleTwo; multiplier <= multipleOne; multiplier++) {

    const Result = multipleOne * multiplier;
    let mayBePalindrome = Result;
    let reverse = 0;

    while (mayBePalindrome > 0) {
        const rem = mayBePalindrome % 10;
        reverse = (reverse * 10) + rem;
        mayBePalindrome = (mayBePalindrome - rem) / 10;
    }
    
    if (Result === reverse) {
        if (reverse > palindrome) {
            palindrome = reverse;
        }
         
    }
}
multipleOne--;
}
console.log(palindrome);
