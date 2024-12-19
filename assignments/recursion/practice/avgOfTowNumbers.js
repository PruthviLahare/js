function avrage(num1, num2) {
  return num1 === num2 ? num1 : avrage(num1 + 0.5, num2 - 0.5);
}

console.log(avrage(5, 6));
console.log(avrage(6, 8));
console.log(avrage(3, 7));
console.log(avrage(7, 12));