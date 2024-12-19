const num = 10;

const add = function (a, b) {
  return a + b;
}

console.log(num);
console.log(add);
console.log(add(9, 2));


function a() {
  return 5;
}

// a === a -> true  : because both are refering to same reference
// a() === a() -> : for the above case it will give true because each time we are comparing same value 

const b = a;

b === a;  // returns true 
