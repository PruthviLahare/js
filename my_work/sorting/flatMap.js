const arr = [1, 2, 3];

const fm = arr.flatMap(function (element) { return element === 2 ? [2, 2] : 1; });

console.log(fm);