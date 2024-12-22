const getRow = function (char) {
  return function (times) {
    return char.repeat(times);
  };
};

const stars = getRow('*');
const space = getRow(' ');
const dash = getRow('-');

const min = function (num1, num2) {
  return num1 < num2;
};

const max = function (num1, num2) {
  return num1 > num2;
};

function range(from, to, increment) {
  const arr = [];
  const condition = from > to ? min : max;

  for (from; condition(to, from); from += increment) {
    arr.push(from);
  }

  return arr;
}

const createFilledArray = function (size, fillWith) {
  return Array(size).fill(fillWith);
};

const hollowRow = function (size) {
  return stars(1) + space(1).repeat(size - 2) + stars(1);
};

const filledRectangle = function (dimensions) {
  const [columns, rows] = dimensions;
  const rowCounts = createFilledArray(rows, columns);
  const rectangle = rowCounts.map(stars);

  return rectangle;
};

const hollowRectangle = function (dimensions) {
  const [columns, rows] = dimensions;

  if (rows <= 2) {
    return filledRectangle(dimensions);
  }

  const rowCounts = createFilledArray(rows - 2, columns);
  const rectangle = rowCounts.map(hollowRow);

  rectangle.unshift(stars(columns));
  rectangle.push(rectangle[0]);

  return rectangle;
};

const alternate = function (rowCounts, times, upto) {
  const alternateRows = [stars(times), dash(times), space(times)];

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
  const rowStars = stars;
  const size = dimension[0] + 1;

  const rowCounts = range(1, size, 1);
  const triangle = rowCounts.map(rowStars);

  return triangle;
};

const spaceBefore = function (triangleShape, dimension) {
  const spaceCount = range(dimension[0] - 1, -1, -1);
  const rows = [];

  for (let index = 0; index < triangleShape.length; index++) {
    const row = space(spaceCount[index]) + triangleShape[index];
    rows.push(row);
  }
  // return function (row) {
  //   for (const element of space1) {
  //     return space(element) + row;
  //   }

  // };

  return rows;
};

const rightAngledtriangle = function (dimension) {
  const triangleShape = triangle(dimension);
  // const tri = triangleShape.map(spaceBefore(dimension));
  return spaceBefore(triangleShape, dimension);
};

const spacedAlternatingRectangle = function (dimensions) {
  const [columns, rows] = dimensions;

  const rowCounts = range(0, rows, 1);
  const rectangle = alternate(rowCounts, columns, 3);

  return rectangle;
};

const getBaseNumbers = function (size) {
  const upper = range(1, size + 1, 2);
  const lower = range(size - 2, 0, -2);

  return upper.concat(lower);
};

const diamondShape = function (size) {
  return function (row) {
    const spaceCount = (size - row) / 2;

    return space(spaceCount) + stars(row);
  };
};

const isEven = function (num) {
  return (num & 1) === 0;
};

function adjustToOdd(number) {
  return isEven(number) ? number - 1 : number;
}

const diamond = function (dimension) {
  if (dimension[0] <= 2) {
    return [stars(1)];
  }

  const size = adjustToOdd(dimension[0]);

  const baseNumber = getBaseNumbers(size, 2);
  return baseNumber.map(diamondShape(size));
};

function areRowOrColumnEmpty(dimensions) {
  return dimensions[0] === 0 || dimensions[1] === 0;
}

const generatePattern = function (style, dimensions) {
  if (areRowOrColumnEmpty(dimensions)) {
    return '';
  }

  const patterns = {
    'filled-rectangle': filledRectangle,
    'hollow-rectangle': hollowRectangle,
    'alternating-rectangle': alternatingRectangle,
    'triangle': triangle,
    'right-aligned-triangle': rightAngledtriangle,
    'spaced-alternating-rectangle': spacedAlternatingRectangle,
    'diamond': diamond,
  };

  return patterns[style](dimensions).join('\n');
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

function rightAngledtriangleStyle(dimensions, expected, failed) {
  testGeneratePattern('right-aligned-triangle', dimensions, expected, failed);
}

function testRightAngledtriangle(failed) {
  rightAngledtriangleStyle([3], '  *\n **\n***', failed);
  rightAngledtriangleStyle([5], '    *\n   **\n  ***\n ****\n*****', failed);
  rightAngledtriangleStyle([0], '', failed);
  rightAngledtriangleStyle([1], '*', failed);
}

function spacedAlternatingRecStyle(dimensions, expected, failed) {
  testGeneratePattern('spaced-alternating-rectangle', dimensions, expected, failed);
}

function testSpacedAlternatingRec(failed) {
  spacedAlternatingRecStyle([3, 4], '***\n---\n   \n***', failed);
  spacedAlternatingRecStyle([5, 6], '*****\n-----\n     \n*****\n-----\n     ', failed);
  spacedAlternatingRecStyle([4, 3], '****\n----\n    ', failed);
  spacedAlternatingRecStyle([6, 2], '******\n------', failed);
  spacedAlternatingRecStyle([0, 3], '', failed);
  spacedAlternatingRecStyle([5, 0], '', failed);
  spacedAlternatingRecStyle([2, 10], '**\n--\n  \n**\n--\n  \n**\n--\n  \n**', failed);
}

function diamondStyle(dimensions, expected, failed) {
  testGeneratePattern('diamond', dimensions, expected, failed);
}

function testDiamond(failed) {
  diamondStyle([3], ' *\n***\n *', failed);
  diamondStyle([4], ' *\n***\n *', failed);
  diamondStyle([0], '', failed);
  diamondStyle([1], '*', failed);
  diamondStyle([5], '  *\n ***\n*****\n ***\n  *', failed);
  diamondStyle([7], '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);
  testRightAngledtriangle(failed);
  testSpacedAlternatingRec(failed);
  testDiamond(failed);

  console.table(failed);
}

testAll();