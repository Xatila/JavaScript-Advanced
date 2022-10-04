function isMagic(matrix) {
  let sum = matrix[0].reduce((a, b) => a + b);
  for (let i = 0; i < matrix[0].length; i++) {
    let currColSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      currColSum += matrix[j][i];
    }
    if (currColSum !== sum) {
      return false;
    }
  }
  return true;
}
isMagic([
  [4, 5, 5],
  [6, 5, 4],
  [5, 5, 5],
]);
