const simpleInterest = function (principal, rate, time) {
  let amount = principal;
  let compoundInterest = 0;

  const CI = function () {
    const SI = (amount * rate) / 100;
    amount = amount + SI;
    return compoundInterest += SI;
  };

  const range = Array.from({ length: time }, (element, index) => index + 1);
  return range.reduce(CI);
};

const start = function () {
  const principal = 100;
  const rate = 5;
  const time = 3;

  console.log(simpleInterest(principal, rate, time));
};

start();