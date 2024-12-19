const WIDTH = 5;
const HEIGHT = 5;
const screen = [];

function createScreen() {
  for (let i = 0; i < HEIGHT; i++) {
    const line = [];

    for (let j = 0; j < WIDTH; j++) {
      line.push('');
    }
    screen.push(line);
  }

  return screen;
}

function put(screen, char, y, x) {
  screen[y][x] = char;

  return screen;
}

function arrayToString(ScreenArray) {
  let string = '';

  for (let i = 0; i < ScreenArray.length; i++) {
    string += ScreenArray[i].join('') + '\n';
  }

  return string;
}

function getLine(screen, char, x1, x2, y) {
  for (let j = x1; j < x2; j++) {
    screen[y][j] = char;
  }

  return arrayToString(screen);
}

console.log(createScreen());
// console.log(put(screen, "%", 2, 3));
console.log(arrayToString(screen));
console.log(getLine(screen, '-', 2, 5, 2));