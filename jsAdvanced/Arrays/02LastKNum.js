function findLastK(n, k){
    let result=[1];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let currentElement = Number(result[i]);
        let elementToPush = Number(currentElement)+Number(result[i-k]);
        result.push(elementToPush);
    }
    console.log(result);

}
findLastK(6, 3);