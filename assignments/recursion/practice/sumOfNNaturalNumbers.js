function sumOfNNaturalNumber(sum) {
  return  sum === 0 ? sum : sum + sumOfNNaturalNumber(--sum);
}

console.log(sumOfNNaturalNumber(3));