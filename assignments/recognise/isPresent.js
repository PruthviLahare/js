function isPresent(elements, target) {
  const isElementPresent = function (element) {
    return element === target;
  };

  return elements.some(isElementPresent);
}

console.log(isPresent([1, 2, 3], 9));