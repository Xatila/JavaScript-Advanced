function sortNums(numbers) {
  let result = [];
  numbers.sort((a, b) => a - b);
  //console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    let currentMin = numbers.shift();
    result.push(currentMin);
    let currentMax = numbers.pop();
    result.push(currentMax);
    i--;
  }
  return result;
}
sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// Expected result: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48];
