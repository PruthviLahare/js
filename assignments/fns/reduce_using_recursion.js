const reduce = function (func, list, index, result) {
  if (index === list.length - 1) {
    return result;
  }

  result = func(result, list[index]);

  return reduce(func, list, index + 1, result);
}

function longestString(max, element) {
  if (element.length > max.length) {
    return max = element;
  }

  return max;
}

reduce(longestString, ["this", "amazing", "assignment", "rocks"], 0, '');
