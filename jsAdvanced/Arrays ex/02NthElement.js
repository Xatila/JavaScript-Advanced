function printNthEle(arr, n){
    let result=[];
    for (let i = 0; i < arr.length; i+=n) {
        result.push(arr[i]);
    };
    return result;
}
printNthEle(['1', 
'2',
'3', 
'4', 
'5'], 
6
);