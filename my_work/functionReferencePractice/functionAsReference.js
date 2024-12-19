function operation(f, num1, num2) {
  return f(num1, num2);
}

const add = function(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function userInput() {
  const operations = [add, sub, mul, div];

  const choice = +prompt("Press:\n(0 - add) (1 - sub) (2 - mul) (3 - div) : ");
  const num1 = +prompt("\nEnter 1st Numbre :");
  const num2 = +prompt("Enter 2nd Numbre :");

  console.log(operation(operations[choice], num1, num2));
}

userInput();