function replaceChar(position, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9) {
  
  switch (position) {
    case 1:
      pos1 = '*';
      break;

    case 2:
      pos2 = '*';
      break;

    case 3:
      pos3 = '*';
      break;

    case 4:
      pos4 = '*';
      break;

    case 5:
      pos5 = '*';
      break;

    case 6:
      pos6 = '*';
      break;

    case 7:
      pos7 = '*';
      break;

    case 8:
      pos8 = '*';
      break;

    case 9:
      pos9 = '*';
      break;

  }

  Layout(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
}

function Yturn(chances, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9) {
  if (chances > 8) {
    return 0;
  }

  const position = +prompt('\nY turn:-');
  Xturn(chances + 1, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
}

function Xturn(chances, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9) {
  let position = +prompt('\nX turn:-');

  replaceChar(position, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);

  Yturn(chances + 1, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9);
}

function Layout(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9) {
  console.clear();
  console.log(pos1 + ' | ' + pos2 + ' | ' + pos3);
  console.log('----------');
  console.log(pos4 + ' | ' + pos5 + ' | ' + pos6);
  console.log('----------');
  console.log(pos7 + ' | ' + pos8 + ' | ' + pos9);
}

const pattern = Layout('1', '2', '3', '4', '5', '6', '7', '8', '9');
Xturn(0, '1', '2', '3', '4', '5', '6', '7', '8', '9');