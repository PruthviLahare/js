const lastCharString = function (arrayOfStrings, current) {
  if (current === '') {
    return '';
  }

  return arrayOfStrings += current.at(-1);    // slice of empty will return empty
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(lastCharString, '');
};


const arrayOfPositiveNumbers = function (listOfLists) {
  const isPositive = function (current) {
    return current > 0;
  };

  return listOfLists.some(isPositive);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(arrayOfPositiveNumbers);
};

const isPositive = function (numbers) {
  return numbers > 0;
};

const product = function (num1, num2) {
  return num1 * num2;
};

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(product, 1);
};

const stringsWithE = function ([...element]) {
  return element.includes('e');
};

const longest = function (initial, element) {
  if (initial.length > element.length) {
    return initial;
  }

  return element;
};

const longestEWord = function (strings) {
  return strings.filter(stringsWithE).reduce(longest, '');
};

const areAllEven = function (element) {
  return element.every(function (current) {
    return (current & 1) === 0;
  });
};

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllEven);
};

const allOdds = function (element) {
  return (element & 1) === 1;
};

const square = function (element) {
  return element * element;
};

const sum = function (initial, element) {
  return initial + element;
};

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(allOdds).map(square).reduce(sum, 0);
};

const isLengthSame = function (strings, length) {
  return strings.every(function (element) {
    return element.length === length;
  });
};

const areAllOfSameLength = function (listOfStrings) {
  const length = listOfStrings[0].length;

  return isLengthSame(listOfStrings, length);
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(function (previous, element) {
    if (!previous.includes(element)) {
      previous.push(element);
    }

    return previous;
  }, []);
};

const allStartWithAVowel = function (words) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return words.every(function (element) {
    return vowels.includes(element[0]);
  });
};

const runningTotal = function (numbers) {
  const runningTotalList = numbers.reduce(function (initial, current) {
    const lastElement = initial.at(-1);                                     // can write 0 so no need to do shift at the end
    initial.push(lastElement + current);

    return initial;
  }, [0]);

  runningTotalList.shift();
  return runningTotalList;
};

console.log(runningTotal([1, 2, 3, 4]));
console.log(runningTotal([1, 1, 4, 5]));


const testAllLastChars = function () {
  console.log("actual:", allLastChars(["abc", "def", "ghi"]), "expected:  cfi");
  console.log("actual:", allLastChars(["123", "457"]), "expected:  37");
  console.log("actual:", allLastChars(["3", "7"]), "expected:  37");
  console.log("actual:", allLastChars([""]), "expected:  ");
};

const testListsWithPositiveNumbers = function () {
  console.log("actual:", listsWithPositiveNumbers([[-1, -2], [3, 4], [-5, -6]]), "expected:  [[3,4]]");
  console.log("actual:", listsWithPositiveNumbers([[1, -2], [3, 4], [-5, -6]]), "expected:  [[1, -2], [3,4]]");
};

const testAllPositiveProduct = function () {
  console.log("actual:", productOfPositives([0, -1, -2, 3, 4]), "expected:  12");
  console.log("actual:", productOfPositives([1]), "expected:  1");
  console.log("actual:", productOfPositives([]), "expected:  1");
};

const testLongestEWord = function () {
  console.log("actual:", longestEWord(["educate", "there", "animation"]), "expected:  educate");
  console.log("actual:", longestEWord(["eee", "there", "animation"]), "expected:  there");
};

const testAreAllListsEven = function () {
  console.log("actual:", areAllListsEven([[2, 4, 6], [1, 3, 5], [8, 10]]), "expected:  false");
  console.log("actual:", areAllListsEven([[2, 4], [6, 8]]), "expected:  true");
};

const testSumOfSquaresOfOdds = function () {
  console.log("actual:", sumOfSquaresOfOdds([1, 2, 3, 4]), "expected:  10");
};

const testAreAllOfSameLength = function () {
  console.log("actual:", areAllOfSameLength(["abc", "def"]), "expected:  true");
  console.log("actual:", areAllOfSameLength(["abc", "de"]), "expected:  false");
};

const testAllRemoveDuplicates = function () {
  console.log("actual:", removeDuplicates([1, 2, 3, 4, 1, 2]), "expected:  [1,2,3,4]");
};

const testAllStartWithAVowel = function () {
  console.log("actual:", allStartWithAVowel(["ant", "eye", "id"]), "expected:  true");
  console.log("actual:", allStartWithAVowel(["ant", "bat"]), "expected:  false");
};

const testAll = function () {
  testAllLastChars();
  testListsWithPositiveNumbers();
  testAllPositiveProduct();
  testLongestEWord();
  testAreAllListsEven();
  testSumOfSquaresOfOdds();
  testAreAllOfSameLength();
  testAllRemoveDuplicates();
  testAllStartWithAVowel();
};

testAll();

const reducer = function (initial, current) {
  if (initial.at(-1).length < 2) {
    initial.at(-1).push(current);
    return initial;
  }

  initial.push([current]);
  return initial;
};

const pairs = function (list) {
  return list.reduce(reducer, [[]]);
};

console.log(pairs([1, 2, 3]));
console.log(pairs([1, 2, 3, 4]));
console.log(pairs([]));
console.log(pairs([1]));
console.log(pairs([1, 2]));
