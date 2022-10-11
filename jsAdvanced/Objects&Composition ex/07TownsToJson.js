function convertToJson(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    let tokens = array[i].split("|");
    let [noNeed, town, latitude, longitude] = tokens;
    let townName = town.trim();
    let latitudeSize = latitude.trim();
    let longitudeSize = longitude.trim();
    latitudeSize = Number(latitudeSize).toFixed(2);
    longitudeSize = Number(longitudeSize).toFixed(2);

    let obj = {
      Town: townName,
      Latitude: Number(latitudeSize),
      Longitude: Number(longitudeSize),
    };
    result.push(obj);
  }
  console.log(JSON.stringify(result));
}
convertToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
