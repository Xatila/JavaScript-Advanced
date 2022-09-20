function diagonalSum(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
      let separated = matrix[row];
       for (let i = 0; i < separated.length; i++) {
        //console.log(separated[i]);
        if(separated[i]===separated[i+1]){
            count++;
        }
       }
    }
    console.log(count);
}
diagonalSum([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
