function indexDay(day) {
  let result='';
  if(typeof(day)==='string'){
  switch (day) {
    case "Monday":
      result = 1;
      break;
    case "Tuesday":
      result = 2;
      break;
    case "WednesDay":
      result = 3;
      break;
    case "Thursday":
      result = 4;
      break;
    case "Friday":
      result = 5;
      break;
    case "Saturday":
      result = 6;
      break;
    case "Sunday":
      result = 7;
      break;
      default:
        result='error';
        break;
  }
}else{
    console.log("error");
}
  console.log(result);
}
indexDay('Monday');
indexDay('Invalid');