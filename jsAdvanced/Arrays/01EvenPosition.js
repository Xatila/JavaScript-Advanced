function printEvenPositionsInArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (i % 2 == 0) {
      result.push(element);
    }
  }
  console.log(result.join(' '));
}
printEvenPositionsInArray(["20", "30", "40", "50", "60"]);
