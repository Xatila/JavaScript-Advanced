function attackDiagonal(matrix) {
    let myMatrix=[];
  while (matrix.length > 0) {
     myMatrix.push(matrix.shift().split(" ").map(Number));
  }
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  for (let i = 0; i < myMatrix.length; i++) {
    primaryDiagonalSum+=myMatrix[i][i];
    secondaryDiagonalSum+=myMatrix[i][myMatrix.length-1-i];
  }
  if(primaryDiagonalSum==secondaryDiagonalSum){
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix.length; j++) {
            if((j!==myMatrix.length-1-i)&&(j!==i)){
                myMatrix[i][j] = primaryDiagonalSum;
            }
        }
        
    }
  }
  for (let i = 0; i < myMatrix.length; i++) {
    console.log(myMatrix[i].join(' '));
  }
}
attackDiagonal([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
