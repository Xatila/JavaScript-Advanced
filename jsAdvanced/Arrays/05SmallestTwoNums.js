// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function findSmallestTwoNums(array) {

   let maxMin1 = Math.min(...array);
  while (array.includes(maxMin1)) {
    let indexMin = array.indexOf(maxMin1);
    array.splice(indexMin, 1);
  }
  let maxMin2 = Math.min(...array);
  while (array.includes(maxMin2)) {
    let indexMin = array.indexOf(maxMin2);
    array.splice(indexMin, 1);
  }
  console.log(maxMin1, maxMin2);
}
findSmallestTwoNums([30, 15, 50, 5]);
findSmallestTwoNums([3, 0, 10, 4, 7, 3]);
