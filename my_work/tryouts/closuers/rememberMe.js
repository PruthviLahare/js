const generateRandomNumber = function () {
  return Math.ceil(Math.random() * 20);
};

const a = function () {
  const arr = [0];
  let count = 0;

  const unique = function (element) {
    const num = generateRandomNumber();
    console.log(num);

    if (arr.includes(num)) {
      console.log("this element is already present in the array");
      console.log("current count is :", count);
    }

    count += 1;
    arr.push(num);
    console.log(arr);

  };

  // console.log(arr);
  console.log(arr);

  arr.map(unique);
};

const rememberMe = function () {
  return a();
};

console.log(rememberMe());