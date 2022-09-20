function prevDay(year, month, day) {
  let date = new Date(year, month, day-1);
  date.setDate(date.getDate()-1);
  console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
  //Second SOLUTION!
  // function parseFormat(date) {
  //   let local = new Date(date);
  //   local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  //   return local.toJSON().slice(0, 10);
  // }
  // let date = new Date(year, month - 1, day - 1);
  // let arr = parseFormat(date);
  // if (arr[5] == 0) {
  //   let firstPart = arr.slice(0, 5);
  //   let secondPart = arr.slice(6, arr.length);
  //   console.log(firstPart + secondPart);
  // } else {
  //   console.log(arr);
  // }
}
prevDay(2016, 9, 30);
prevDay(2016, 12, 1);
