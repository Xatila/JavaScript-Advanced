function generateReport() {
  let rows = document.querySelectorAll("tbody tr");
  let columns = document.querySelectorAll("tbody tr td");
  //console.log(rows);
  let arrayRows = Array.from(rows);
  let arrayCols = Array.from(columns);
  let allBoxes = document.querySelectorAll("th input");
  let [
    employee,
    department,
    status,
    dateHired,
    benefits,
    compensation,
    rating,
  ] = allBoxes;
  let result = [];
  function addObject(boxName, boxValue){
    if(boxName.checked==true){
        let theKey = boxName.toString();
        let obj = {theKey: boxValue};
        result.push(obj);
        console.log(theKey);
    }
  }
  addObject(employee, arrayCols[0].textContent);
  addObject(department, arrayCols[1].textContent);
  addObject(status, arrayCols[2].textContent);
  addObject(dateHired, arrayCols[3].textContent);
  addObject(benefits, arrayCols[4].textContent);
  addObject(compensation, arrayCols[5].textContent);
  addObject(rating, arrayCols[6].textContent);
  let output = document.getElementById('output');
  let res = JSON.stringify(result);
  output.value=res;
}
