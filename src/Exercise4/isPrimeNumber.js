function isPrimeNumber(num) {
  if (num < 2) return false;
  let start = 2;
  let nonPrimes = [];
  while (start <= num) {
    if (num % start === 0) {
      nonPrimes.push(start);
    }
    start += 1;
  }
  return nonPrimes.length > 1 ? false : true;
}
isPrimeNumber(3);
