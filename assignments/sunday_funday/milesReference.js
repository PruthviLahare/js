let str = '';
let count = 0;
let distance = 0;
let nearerDistance = 100
let lastChar = minefield.length - 1;
let horizontal = 0;

for (let index = 0; index < minefield.length; index++) {
  if (minefield[index] !== "\n") {
    str += minefield[index];
  }
  if (minefield[index] === "\n" || index === lastChar) {
    for (let col = 0; col < str.length; col++) {
      if (str[col] === '*') {
        distance = col + horizontal;
        if (distance < nearerDistance) {
          nearerDistance = distance;
        }
        console.log(distance);

      }
      if (col === str.length - 1 && index !== lastChar) {
        str = '';
        horizontal += 1;
      }
    }
  }
}
console.log(str);
console.log(nearerDistance);