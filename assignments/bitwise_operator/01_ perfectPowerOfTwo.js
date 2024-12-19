function isPerfectPowerOfTwo(number) {
  if (number < 2) {
    return true;
  }

  return number & 1 === 1 ? false : isPerfectPowerOfTwo(number >> 1);
}

console.log(isPerfectPowerOfTwo(16));