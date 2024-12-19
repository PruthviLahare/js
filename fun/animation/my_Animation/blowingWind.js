function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }
  return screen;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function putVerticalString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x, y + i);
  }
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function main() {
  const WIDTH = 20;
  const HEIGHT = 20;

  const screen = createScreen(WIDTH, HEIGHT);
  // putPixel(screen, '~', 1, 3);
  putVerticalString(screen, 'Rainbow', 2, 1);
  
  const frames = screenToString(screen);

  displayAnimFormat(WIDTH, HEIGHT, frames);
}

main(); 