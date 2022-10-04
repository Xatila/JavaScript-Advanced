function populateTown(information) {
  let object = {};
  for (let i = 0; i < information.length; i++) {
    let currentRow = information[i].split(" <-> ");
    let currentName = currentRow[0];
    let currentPopulation = Number(currentRow[1]);
    if (object.hasOwnProperty(currentName)) {
      currentPopulation += object[currentName];
    }
    object[currentName] = currentPopulation;
  }
  for (const element of Object.keys(object)) {
    console.log(`${element} : ${object[element]}`);
  }
}
// populateTown(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );
populateTown([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
