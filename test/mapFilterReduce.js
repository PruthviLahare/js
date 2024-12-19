const addLastChar = function (string, element) {
  return string += element.slice(element.length - 1);
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(addLastChar, '');
};

// ------------------------------------------------------------

const isPositive = function (number) {
  return number > 0;
};

const arrayOfPositiveNumbers = function (numbers) {
  return numbers.some(isPositive);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(arrayOfPositiveNumbers);
};

// ------------------------------------------------------------

const product = function (num1, num2) {
  return num1 * num2;
};

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(product, 1);
};

// ------------------------------------------------------------

const stringsWithE = function ([...string]) {
  return string.includes('e') || string.includes('E');
};

const longer = function (string1, string2) {
  return string1.length > string2.length ? string1 : string2;
};

const longestEWord = function (strings) {
  return strings.filter(stringsWithE).reduce(longer, '');
};

// ------------------------------------------------------------

const isEven = function (num) {
  return (num & 1) === 0;
};

const areAllEven = function (element) {
  return element.every(isEven);
};

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllEven);
};

// ------------------------------------------------------------

const isOdd = function (element) {
  return (element & 1) === 1;
};

const square = function (element) {
  return element * element;
};

const sum = function (initial, element) {
  return initial + element;
};

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(square).reduce(sum, 0);
};

// ------------------------------------------------------------

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

// console.log(runningTotal([1, 2, 3, 4]));
// console.log(runningTotal([1, 1, 4, 5]));
// console.log(runningTotal([]));


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
  // testAreAllOfSameLength();
  // testAllRemoveDuplicates();
  // testAllStartWithAVowel();
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

// console.log(pairs([1, 2, 3]));
// console.log(pairs([1, 2, 3, 4]));
// console.log(pairs([]));
// console.log(pairs([1]));
// console.log(pairs([1, 2]));