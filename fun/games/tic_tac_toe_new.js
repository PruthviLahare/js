function contains([...string], set) {
  return string.includes(set);
}

function getCell(cellId, player1Moves, player2Moves) {
  if (contains(player1Moves, cellId)) {
    return "*";
  }
  if (contains(player2Moves, cellId)) {
    return "@";
  }

  return "" + cellId + "";
}

function addNewRow(board) {
  return board + " |\n";
}

function isRowCompleted(cellId) {
  return cellId % 3 === 0;
}

function getBoard(player1Moves, player2Moves) {
  let board = "";

  for (let cellId = 1; cellId < 10; cellId++) {
    board += " | ";
    board += getCell(cellId + "", player1Moves, player2Moves);

    if (isRowCompleted(cellId)) {
      board = addNewRow(board);
    }
  }

  return board;
}

function getBoardPlaceValues(player1Moves, player2Moves) {
  let boardPlaceValue = '';

  for (let cellId = 0; cellId < 10; cellId++) {
    boardPlaceValue += getCell(cellId + "", player1Moves, player2Moves);
  }

  return boardPlaceValue;
}

const isMovesSubset = function (winningCombination, playerMoves) {
  return winningCombination.split('')
    .every((function (current) {
      return playerMoves.includes(current);
    }));
};

function didPlayerWin(playerMoves) {
  if (playerMoves.length < 3) {
    return false;
  }

  const winingCombinations = [
    '123', '456', '789',
    '147', '258', '369',
    '159', '357'
  ];

  return winingCombinations.some(function (winningCombination) {
    return isMovesSubset(winningCombination, playerMoves);
  });
}

function getMark(Xturn) {
  return Xturn ? '*' : '@';
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function getPlayerMove(symbol) {
  return prompt(symbol + ' :-');
}

function isInputValid(choice, boardPlaceValue) {
  if (!contains(boardPlaceValue, choice) || (choice < 0 || choice > 10)) {
    return false;
  }

  return true;
}

function getPlayerChoice(decideTurn, boardPlaceValue) {
  const playerSymbol = isDivisible(decideTurn, 2) ? "X" : "O";
  const move = getPlayerMove(playerSymbol);

  if (!isInputValid(move, boardPlaceValue)) {
    console.log("Please Enter Valid Input");

    return getPlayerChoice(decideTurn, boardPlaceValue);
  }

  return move;
}

function getResult(player1Moves, player2Moves) {
  const string = 'Winner is : ';

  if (didPlayerWin(player1Moves)) {
    return string + 'player 1';
  }
  if (didPlayerWin(player2Moves)) {
    return string + 'player 2';
  }

  return "It's a tie";
}

function isGameInPlay(player1Moves, player2Moves) {
  const noOfMovesOver = player1Moves.length + player2Moves.length;

  return noOfMovesOver < 9 && !(didPlayerWin(player1Moves) || didPlayerWin(player2Moves));
}

function placeMove(player1Moves, turnNumber, choice, player2Moves) {
  if (isDivisible(turnNumber, 2)) {
    return [player1Moves + choice, player2Moves];
  }

  return [player1Moves, player2Moves + choice];
}

const drawBoard = function (player1Moves, player2Moves) {
  console.clear();
  console.log(getBoard(player1Moves, player2Moves));
};

function startGame() {
  let player1Moves = '';
  let player2Moves = '';
  let boardPlaceValue = '123456789';
  let turnNumber = 0;

  while (isGameInPlay(player1Moves, player2Moves)) {
    drawBoard(player1Moves, player2Moves);
    const choice = getPlayerChoice(turnNumber, boardPlaceValue);

    [player1Moves, player2Moves] = placeMove(player1Moves, turnNumber, choice, player2Moves);

    boardPlaceValue = getBoardPlaceValues(player1Moves, player2Moves);

    turnNumber += 1;
  }

  console.log(getBoard(player1Moves, player2Moves));
  console.log(getResult(player1Moves, player2Moves));
}

startGame();