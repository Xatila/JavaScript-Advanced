function rotateArr(arr, times){
    for (let i = 0; i < times; i++) {
        let currentLast = arr.pop();
        arr.unshift(currentLast);
    }
    console.log(arr.join(' '));
}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2
);