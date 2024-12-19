
const something = function (value) {
  let v = 10;
  console.log(v);
  const a = value;
  v++;
  return a + v;
};

console.log([1, 2, 3, 4, 5].map(something));