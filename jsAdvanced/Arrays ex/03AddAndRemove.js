function addOrRemoveEle(arr) {
  let result = [1];
  for (let i = 1; i < arr.length; i++) {
    let command = arr[i];
    if (command == "add") {
      result.push(i + 1);
    } else {
      result.pop();
    }
  }
  if (result.length > 0) {
    for (const element of result) {
      console.log(element);
    }
  } else {
    console.log("Empty");
  }
}
addOrRemoveEle(["add", "add", "remove", "add", "add"]);
addOrRemoveEle(["add", "add", "add", "add"]);
