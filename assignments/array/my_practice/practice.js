function newColumn() {
  const border = '  _______________';

  return '\n' + border + '\n |';
}

function tableHeading(heading1, heading2) {
  const topBorder = ' ┏━━━━━━━━━━━━━━━┓';
  const bottomBorder = ' ┗━━━━━━━━━━━━━━━┛';
  const top = topBorder + '\n ┃ ' + heading1 + '   ';
  const heading = ' ┃' + heading2;
  const bottom = '┃\n' + bottomBorder;

  return top + heading + bottom;
}

function nextRow() {
  return ' | ';
}

function getTable(names, marks) {
  let table = '';

  for (let index = 0; index < names.length; index++) {
    table += newColumn() + names[index];
    table += nextRow() + marks[index];
  }

  return tableHeading('Name', 'Marks') + table;
}

function getArray() {
  const names = ['Pruthvi', 'Gayatri', 'Mounika', 'Likhita'];
  const marks = [50, 60, 100, 70];

  return getTable(names, marks);
}

console.log(getArray());