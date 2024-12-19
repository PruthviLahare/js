const numbers = [90, 20, 30];

const max = numbers.reduce(Math.max, -Infinity);  /// will give NaN because Math.max will compare i with index and array as well !!
console.log(max);