// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;
const r = 5;
const t = 2;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let principal = p;
let simpleInterest = 0;
let compoundInterest = 0;

for (let year = 0; year < t; year++) {
  simpleInterest = (principal * r) / 100;
  principal = principal + simpleInterest;
  compoundInterest = simpleInterest + compoundInterest;
}

console.log(compoundInterest);