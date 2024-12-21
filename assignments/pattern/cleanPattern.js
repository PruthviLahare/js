const SPACE = ' ';

const min = function (num1, num2) {
  return num1 < num2;
};

const max = function (num1, num2) {
  return num1 > num2;
};

function range(from, to, increment) {
  if (increment === 0) {
    return [];
  }

  const arr = [];
  const condition = from > to ? max : min;

  for (from; condition(from, to); from += increment) {
    arr.push(from);
  }

  return arr;
}

const getRow = function (char) {
  return function (times) {
    return char.repeat(times);
  };
};

const createFilledArray = function (size, fillWith) {
  return Array(size).fill(fillWith);
};

const hollowRow = function (size) {
  return '*' + SPACE.repeat(size - 2) + '*';
};

const filledRectangle = function (dimensions) {
  const [columns, rows] = dimensions;
  const rowCounts = createFilledArray(rows, columns);
  const rectangle = rowCounts.map(getRow('*'));

  return rectangle;
};

const hollowRectangle = function (dimensions) {
  const [columns, rows] = dimensions;

  if (rows <= 2) {
    return filledRectangle(dimensions);
  }

  const rowCounts = createFilledArray(rows - 2, columns);
  const rectangle = rowCounts.map(hollowRow);

  rectangle.unshift(getRow('*')(columns));
  rectangle.push(rectangle[0]);

  return rectangle;
};

const alternate = function (rowCounts, times, upto) {
  const symbols = ['*', '-', ' '];
  const stars = getRow(symbols[0])(times);
  const dash = getRow(symbols[1])(times);
  const space = getRow(symbols[2])(times);
  const alternateRows = [stars, dash, space];

  const row = function (element) {
    return alternateRows[element % upto];
  };

  return rowCounts.map(row);
};

const alternatingRectangle = function (dimensions) {
  const [columns, rows] = dimensions;
  const rowCounts = range(0, rows, 1);

  const rectangle = alternate(rowCounts, columns, 2);
  return rectangle;
};

const triangle = function (dimension) {
  const till = dimension[0] + 1;

  const rowCounts = range(1, till, 1);

  const triangle = rowCounts.map(getRow('*'));
  return triangle;
};

function isRowOrColumnEmpty(dimensions) {
  return dimensions[0] === 0 || dimensions[1] === 0;
}

const generatePattern = function (style, dimensions) {
  if (isRowOrColumnEmpty(dimensions)) {
    return '';
  }

  return patterns[style](dimensions).join('\n');
};

const patterns = {
  'filled-rectangle': filledRectangle,
  'hollow-rectangle': hollowRectangle,
  'alternating-rectangle': alternatingRectangle,
  'triangle': triangle
};

function testGeneratePattern(style1, dimensions, expected, failed) {
  const actual = generatePattern(style1, dimensions);
  if (actual !== expected) {
    failed.push([style1, dimensions, actual, expected]);
  }
}

function filledRectangleStyle(dimensions, expected, failed) {
  testGeneratePattern('filled-rectangle', dimensions, expected, failed);
}

function testFilledRectangle(failed) {
  filledRectangleStyle([0, 0], '', failed);
  filledRectangleStyle([7, 0], '', failed);
  filledRectangleStyle([0, 5], '', failed);
  filledRectangleStyle([5, 3], '*****\n*****\n*****', failed);
  filledRectangleStyle([2, 4], '**\n**\n**\n**', failed);
  filledRectangleStyle([5, 1], '*****', failed);
}

function hollowRectangleStyle(dimensions, expected, failed) {
  testGeneratePattern('hollow-rectangle', dimensions, expected, failed);
}

function testHollowRectangle(failed) {
  hollowRectangleStyle([5, 1], '*****', failed);
  hollowRectangleStyle([1, 2], '*\n*', failed);
  hollowRectangleStyle([2, 2], '**\n**', failed);
  hollowRectangleStyle([6, 2], '******\n******', failed);
  hollowRectangleStyle([4, 3], '****\n*  *\n****', failed);
  hollowRectangleStyle([5, 4], '*****\n*   *\n*   *\n*****', failed);
  hollowRectangleStyle([5, 0], '', failed);
  hollowRectangleStyle([0, 0], '', failed);
}

function AlternatingRectangleStyle(dimensions, expected, failed) {
  testGeneratePattern('alternating-rectangle', dimensions, expected, failed);
}

function testAlternatingRectangle(failed) {
  AlternatingRectangleStyle([0, 3], '', failed);
  AlternatingRectangleStyle([3, 3], '***\n---\n***', failed);
  AlternatingRectangleStyle([4, 1], '****', failed);
  AlternatingRectangleStyle([6, 2], '******\n------', failed);
  AlternatingRectangleStyle([5, 4], '*****\n-----\n*****\n-----', failed);
}

function triangleStyle(dimensions, expected, failed) {
  testGeneratePattern('triangle', dimensions, expected, failed);
}

function testTriangle(failed) {
  triangleStyle([3], '*\n**\n***', failed);
  triangleStyle([5], '*\n**\n***\n****\n*****', failed);
  triangleStyle([0], '', failed);
  triangleStyle([1], '*', failed);
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);

  console.table(failed);
}

testAll();