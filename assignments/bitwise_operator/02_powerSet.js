function lastBit(number) {
  return number & 1;
}

function getSubet(powerSet) {

}

function getPowerSet(powerSet) {
  const subset = [];
  const max = Math.pow(2, powerSet.length);

  for (let index = 0; index < max; index++) {
    const subIndex = [];
    let bit = index;
    let i = 0;


    while (bit > 0) {
      if (lastBit(bit) === 1) {
        subIndex.push(powerSet[i]);
      }

      bit = bit >> 1;
      i += 1;
    }

    subset.push(subIndex);
  }

  return subset;
}

console.log(getPowerSet([]));
console.log(getPowerSet([1]));
console.log(getPowerSet([1, 2]));
console.log(getPowerSet([1, 2, 3]));
console.log(getPowerSet([1, 2, 3, 4]));