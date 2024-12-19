const rev = function (previousStr, currentStr) {
  previousStr.unshift(currentStr);

  return previousStr;
};

console.log(['a', 'b', 'c'].reduce(rev, []));