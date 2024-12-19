const words = ['rainbow', 'amazing', 'morning', 'cake', 'on'];
const words1 = ['rain', 'a', 'abc', 'is', 'are'];

console.log("Before Sorting :-", words1 , '\n');


// => on , cake , rainbow, amazing , morning
// char => 'o'// => on , rainbow, morning, cake , amazing

// const sortWithChar = function (char) {
//   return words.sort(function (str1, str2) {
//     return str1.includes(char) || (!str2.includes(char)) ? -1 : 1;
//   });
// };

words1.sort(function (str1, str2) {
  // console.log(str1, str2);
  
  return str1.length - str2.length;
});

console.log("After Sorting :-", words1);
