function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function matrixProduct(matrixA, matrixB, column) {
  const array1 = [];

  for (let index = 0; index < matrixB[0].length; index++) {
    let product = 0;

    for (let row = 0; row < matrixA[0].length; row++) {
      product += matrixA[column][row] * matrixB[row][index];
    }
    array1.push(product);
  }

  return array1;
}

function getColumn(matrix, column) {
  const columnElemnts = [];
  for (const column of matrix) {
    columnElemnts.push(matrix[column]);
  }
}

function idono(row, matrixB) {
  for (let index = 0; index < matrixB.length; index++) {
    const column = getColumn(matrixB, index);
  }
}

function matrixMultiplication(matrixA, matrixB) {
  for (const row of matrixA) {
    const column = idono(matrixB, row);
  }
}

function areMatrixEmpty(matrixA, matrixB) {
  return areEqual(matrixA, []) && areEqual(matrixB, []);
}

function areMatricesValid(matrixA, matrixB) {
  return matrixA[0].length !== matrixB.length;
}

function multiplyMatrices(matrixA, matrixB) {
  if (areMatrixEmpty(matrixA, matrixB)) {
    return [];
  }

  if (areMatricesValid(matrixA, matrixB)) {
    return NaN;
  }

  return matrixMultiplication(matrixA, matrixB);
  // const multiplyMatrix = [];

  // for (let column = 0; column < matrixA.length; column++) {
  //   const array = matrixProduct(matrixA, matrixB, column);
  //   multiplyMatrix.push(array);
  // }

  // return multiplyMatrix;
}

function are2DArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let column = 0; column < array1.length; column++) {
    if (!areEqual(array1[column], array2[column])) {
      return false;
    }
  }

  return true;
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function displayResult(mark, array, expected, actual) {
  console.log(mark + "Input 👉 ", array);
  console.log("\nExpected 👉 ", expected, "Actual👉", actual, '\n**-------**');
}

function getMark(areArrayEqual) {
  return areArrayEqual ? '✅' : '❌';
}

function testMultiplyMatrices(matrixA, matrixB, expected) {
  const actual = multiplyMatrices(matrixA, matrixB);
  const areArrayEqual = are2DArrayEqual(expected, actual);
  const mark = getMark(areArrayEqual);

  displayResult(mark, matrixA, expected, actual);
}

function testCompatible() {
  testMultiplyMatrices([], [], []);
  testMultiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]], [[19, 22], [43, 50]]);
  testMultiplyMatrices([[1, 2, "@"], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]], [[58, 64], [139, 154]]);
}

function testNaN() {
  testMultiplyMatrices([[1, 2]], [[1], []], NaN);
  testMultiplyMatrices([[]], [[1, 2]], NaN);
  testMultiplyMatrices([[1, 2, 3], [5, 6, 7]], [[1, 2, 3, 4], [2, 2, 2, 3], [6, 7, 0, 0], [1, 2, 3, 4]], NaN);
}

function testAll() {
  testCompatible();
  testNaN();
}

testAll();