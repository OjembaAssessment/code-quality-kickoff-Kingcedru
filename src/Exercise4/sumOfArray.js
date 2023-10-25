function recursiveArraySum(arr, index) {
    return index < 0 ? 0:arr[index] + recursiveArraySum(arr, index - 1);
  }
  const numbers = [1, 2, 3, 4, 5];
  recursiveArraySum(numbers,numbers.length - 1)