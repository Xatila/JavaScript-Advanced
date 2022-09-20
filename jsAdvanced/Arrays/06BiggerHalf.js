// You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. If there is an odd number of elements in the input, always take the bigger half. For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.
// The input comes as an array of number elements.
// The output is the return value of the function and should be an array of numbers.

function printSecondPartOfArray(array) {
  array.sort((a, b) => a - b);
  let result = [];
  if (array.length % 2 != 0) {
    array.unshift(0);
  }
  for (let i = array.length / 2; i < array.length; i++) {
    result.push(array[i]);
  }
  //console.log(`[${result.join(', ')}]`);
  return result;
}
printSecondPartOfArray([3, 19, 14, 7, 2, 19, 6]);
printSecondPartOfArray([4, 7, 2, 5]);
