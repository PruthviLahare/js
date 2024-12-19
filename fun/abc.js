function delay() {
  for (let delay = 0; delay < 2 * 100000000; delay++) {
  }
}

function displayCar(newString, string, road) {
  console.log('\n\n\n\n\n\n\n\n\n\n\n' + newString + string + road);
}

function getReducedString(string, length) {
  let reducedString = '';
  for (let index = 0; index < length; index++) {
    reducedString += string[index];
  }
  console.log(reducedString);

  return reducedString;
}

function runningCar(car, road) {
  let char = '';
  let reducedRoad = road;

  for (let index = 0; index < 100; index++) {
    console.clear();

    char += '_';
    reducedRoad = getReducedString(road, reducedRoad.length - 2);

    displayCar(char, car, reducedRoad);
    delay();
  }
}

runningCar('ō͡≡o', '___');
