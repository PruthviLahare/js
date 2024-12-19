function findPosOfZebraInDanger(jungle) {
  let lionPos = -1;
  let zebraPos = -1;
  let posOfZebraInDanger = -1;
  let minPos = jungle.length;

  for (let index = 0; index < jungle.length; index++) {
    if (jungle[index] === 'L') {
      lionPos = index;
    }
    if (jungle[index] === 'Z') {
      zebraPos = index;
    }
    const currentPos = Math.abs(lionPos - zebraPos);

    if (currentPos < minPos && zebraPos >= 0 && lionPos >= 0) {
      posOfZebraInDanger = zebraPos;
      minPos = currentPos;
    }
  }

  return posOfZebraInDanger;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Position Of Zebra in danger : " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(jungle, expected, actual) {
  const message = 'savannah : ' + jungle;
  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected === actual ? '✅' : '❌';
}

function testfindPosOfZebraInDanger(jungle, expected) {
  const actual = findPosOfZebraInDanger(jungle);
  const mark = getMark(actual, expected);
  const message = assembleMessage(jungle, expected, actual);

  console.log(mark, message);
}

function testAllfindPosOfZebraInDanger() {
  testfindPosOfZebraInDanger("ZL", 0);
  testfindPosOfZebraInDanger("ZL Z LL", 0);

  testfindPosOfZebraInDanger("LZ", 1);
  testfindPosOfZebraInDanger("L Z", 2);
  testfindPosOfZebraInDanger("LZ L Z", 1);
  testfindPosOfZebraInDanger("Z  L Z L Z", 5);
  testfindPosOfZebraInDanger("L Z LZ", 5);
  testfindPosOfZebraInDanger("L L Z LZ", 7);
  testfindPosOfZebraInDanger("L L Z LZ", 7);
  testfindPosOfZebraInDanger("LZLLZLLZ", 1);

  testfindPosOfZebraInDanger("L", -1);
  testfindPosOfZebraInDanger("p", -1);
  testfindPosOfZebraInDanger("Z", -1);
  testfindPosOfZebraInDanger("ZZ", -1);
  testfindPosOfZebraInDanger("ZZZZZZ", -1);
  testfindPosOfZebraInDanger("LLLLL", -1);
  testfindPosOfZebraInDanger("pppA", -1);
}

testAllfindPosOfZebraInDanger();