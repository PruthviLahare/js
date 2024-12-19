// function isPositionMatched(boardPos, PlayedPosition) {
//   for (let index = 0; index < PlayedPosition.length; index++) {
//     if (boardPos === boardPos) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isPositionMatched(1, '123'));
// console.log(isPositionMatched(2, '123'));



function getNextChar(currentIndex, match, currentCharacter, replacement) {
  return currentIndex === match ? replacement : currentCharacter;
}

function replace(text, matchIndex, replacement) {
  let replaceText = '';

  for (let index = 1; index <= text.length; index++) {
    replaceText += getNextChar(index - 1, matchIndex, text[index - 1],  replacement);
  }

  return replaceText;
}


console.log(replace('card' , 2, 'X'));
