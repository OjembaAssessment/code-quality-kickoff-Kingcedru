function nestingLevel(arr) {
  return arr.map((item) => item.length > 1).length;
}
function flatArray(arr, nestingLevel) {
  return arr.flat(nestingLevel(arr));
}
flatArray([1, 2, [3, 4], [5, 6]], nestingLevel);
