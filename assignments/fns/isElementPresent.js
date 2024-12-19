function isElementPresent(elements, char) {
  return elements.reduce(function (determine, currentChar) {
    return determine || currentChar === char;
  }, false);
}

// const isElementPresent = function(element, )



console.log(isElementPresent([...'sky'], 'y'));