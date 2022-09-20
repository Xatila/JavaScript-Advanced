function increesOrderOnly(arr) {
  let result = [arr[0]];
  const sumWithInitial = arr.reduce((previousValue, currentValue) => {
    if (previousValue <= currentValue) {
        result.push(currentValue); 
      return currentValue;
    }else{
        return previousValue;
    }
  });
  console.log(result.join('\n'));
}
increesOrderOnly([20, 3, 2, 15, 6, 1]);
increesOrderOnly([1, 3, 8, 4, 10, 12, 3, 2, 24]);
