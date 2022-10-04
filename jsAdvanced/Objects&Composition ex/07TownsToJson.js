function convertToJson(array) {
    let result = [];
  for (let i = 0; i < array.length; i++) {
    let [zero, town, latitude, longitude] = array[i].split("|");
    
    let obj = {
        "Town": town,
        "Latitude":latitude,
        "Longitude":longitude.toFixed(2)
    }
    result.push(obj);
  }
  for (const key in result) {
    console.log(key, result[key]);
  }
}
convertToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
