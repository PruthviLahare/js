function contains(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function getCell(cellId, player1Moves, player2Moves) {
  if (contains(player1Moves, cellId)) {
    return "  *  ";
  }
  if (contains(player2Moves, cellId)) {
    return "  @  ";
  }
  return "  " + cellId + "  ";
}

function addNewRow(board) {
  return board + "|\n";
}

function isRowCompleted(cellId) {
  return cellId % 3 === 0;
}

function getBoard(player1Moves, player2Moves) {
  let board = "";

  for (let cellId = 1; cellId < 10; cellId++) {
    board += "|";
    board += getCell(cellId + "", player1Moves, player2Moves);

    if (isRowCompleted(cellId)) {
      board = addNewRow(board);
    }
  }

  return board;
}

console.log(getBoard("13", "678"));
console.log(getBoard("", ""));