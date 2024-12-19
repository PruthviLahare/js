function combination(num, noOfArrangement, index, startOver, possibleArrange) {
  if (noOfArrangement === 4) {
    return '';
  }

  if (startOver < num.length) {
    const recursiveCall = combination(num, noOfArrangement, index, startOver + 1, possibleArrange);

    return possibleArrange += num[index] + recursiveCall;
  }

  if (noOfArrangement >= 2) {
    return num[0] + combination(num, noOfArrangement + 1, index, startOver, possibleArrange);
  }

  return ' ' + combination(num, noOfArrangement + 1, index + 1, 0, possibleArrange) + ' ';
}

console.log(combination('12', 0, 0, 0, ''));