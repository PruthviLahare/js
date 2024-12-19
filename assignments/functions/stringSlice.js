function slice(string, start, end) {
  if (start === end) {
    return string[start];
  }

  return slice(string[start], end - 1);
}

console.log(slice('hello', 1, 2));
