function solve(arr){
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        if(i%2!=0){
            let numToPush = Number(arr[i]);
            result.push(numToPush*2);
        }
    }
    result.reverse();
    return result;
}
solve([10, 15, 20, 25]);