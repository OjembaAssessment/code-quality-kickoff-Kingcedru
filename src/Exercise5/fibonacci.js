const fibonacciArray = (size) => {
  let fibonacci = [0, 1];
  let sum = 0;
  for (let x = 2; x <= size + 1; x++) {
    if (sum < size) {
      sum = fibonacci[x - 1] + fibonacci[x - 2];
      fibonacci.push(sum);
    }
  }
  return fibonacci.filter((item) => item <= size);
};
fibonacciArray(4);
