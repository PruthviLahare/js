const sum = function () {
  const x = 10;

  return function (y) {
    return x + y;
  };
};

const a = sum();
a(10);

//-----------------------------------------------------------------------

const counter = function () {
  let x = 0;              //  this x won't change 
  // console.log("outer", x);


  return function () {
    // console.log("inner", x);
    return x += 1;         // an inner scope is created where x keeps changing each time..
  };
};

//-----------------------------------------------------------------------

const cycle = function (times) {
  let x = -1;

  // console.log("outer :", x);

  return function () {
    // console.log("inner before :", x);
    if (x === times) {
      x = -1;
    }

    // console.log("inner after condition :", x);
    return x += 1;
  };
};


//-----------------------------------------------------------------------

const mulOf3Numbers = function (num1) {
  return function (num2) {
    console.log("num2 before", num2);

    num2 = num1 * num2;
    console.log("num2 after", num2);
    return function (num) {
      return num * num2;
    };
  };
};

//-----------------------------------------------------------------------

const fruits = ['apple', 'orange', 'kiwi'];
const count = cycle();
const y = fruits.map(function (x) { return x.repeat(count()); });
console.log(y);

//-----------------------------------------------------------------------

const times = counter();

const mapper = function (star) {
  return star.repeat(times());
};

const triangle = function (row) {
  const array = [...'*'.repeat(row)];
  return array.map(mapper).join('\n');
};

console.log(triangle(4));