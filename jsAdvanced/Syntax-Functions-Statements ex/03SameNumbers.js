function isNumbersSame(input) {
  let array = [];
  let inputAsString = input.toString();
  let sum = 0;
  for (let i = 0; i < inputAsString.length; i++) {
    array.push(inputAsString[i]);
    sum += Number(inputAsString[i]);
  }
  const result = array.every((e) => {
    if (e === array[0]) {
      return true;
    }
  });
  console.log(result);
  console.log(sum);
}
isNumbersSame(2222222);
isNumbersSame(1234);
