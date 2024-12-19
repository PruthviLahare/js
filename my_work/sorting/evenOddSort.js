const numbers = [33, 22, 1, 2, 3, 4, 5, 10, 11];

console.log("before Sorting : ", numbers);


numbers.sort(function (a, b) {
  return a - b;
});

console.log("After Sorting : ", numbers);

numbers.sort(function (a, b) {
  console.log(a, b);  
  
  // return a % 2 === 0 && b % 2 !== 0 ? -1 : 1;
  return (a % 2) - (b % 2);
}); 

console.log("After Sorting in even and odd : ", numbers);