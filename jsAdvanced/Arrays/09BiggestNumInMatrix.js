function biggestNum(matrix) {
    let result=[];
    for (const element of matrix) {
        for (const num of element) {
            result.push(num);  
        }
    }
    result.sort((a,b)=>a-b);
    console.log(result[result.length-1]);
}
biggestNum([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );
