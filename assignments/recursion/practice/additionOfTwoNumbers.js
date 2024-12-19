function add(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  
  return add(num1 + 1, num2 - 1);
}