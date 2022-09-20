// Write a JS function that processes the elements in an array one by one and produces a new array. If the current element is a negative number you must add it to the front of the array (as the first element of the array). Otherwise, if the current element is a positive number (or 0), you must add it to the end of the array (as the last element of the array).
// The input comes as an array of number elements.
// The output is printed on the console, each element on a new line.
function swapNumbers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    number >= 0 ? result.push(number) : result.unshift(number);
  }
  // //result.forEach(e=>console.log(e));
  // console.log(result.find(x=>x>7));
  // console.log(result.filter(x=>x>7));
  // let arrowFunction = result.filter(x=>x>7);
  //console.log(result.map(n=>n+1).join(' '));
  // let exampleReduce = [1,2,3,4,5];
  // let resultReduce = exampleReduce.reduce((sum, num)=>{
  //     return sum+=num;
  // },46);
  let numbers = {
    nam1: 1,
    num2: 2,
    num3: 3,
  };
  let example =[];
  example.push(numbers);
  let res = example.reduce((sum, n)=>{
    return sum+n.nam1;
  }, 0);
  console.log(res);
}
swapNumbers([7, -2, 8, 9]);
