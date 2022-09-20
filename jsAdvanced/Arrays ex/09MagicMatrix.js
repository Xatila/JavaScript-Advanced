function isMagic(matrix) {
  for (let elment = 0; elment < matrix.length; elment++) {
    let rowSum = 0;
    let currentRow = matrix[elment];
    
    for (let i = 0; i < currentRow; i++) {
      let currentNum = currentRow[i];
      rowSum += currentNum;
      console.log(rowSum);
    }
  }
}
isMagic([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
