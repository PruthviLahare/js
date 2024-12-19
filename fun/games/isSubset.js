const love_ = function (set, subset) {
  const s = function (current) {
    return set.includes(current);
  };

  return subset.every(s);
};

console.log(isSubset([...'3456'], [...'156']));