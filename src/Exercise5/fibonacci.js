const fibonacciArray = (size) => {
  let fibonacci = [0, 1];
  let sum = 0;
  for (let x = 2; x <= size; x++) {
    sum = fibonacci[x - 1] + fibonacci[x - 2];
    fibonacci.push(sum);
  }
  return fibonacci;
};
fibonacciArray(2);
