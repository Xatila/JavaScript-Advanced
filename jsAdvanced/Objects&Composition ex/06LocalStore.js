function createCatalog(array) {
  array.sort();
  firstLetter = "";
  for (let i = 0; i < array.length; i++) {
    let [product, price] = array[i].split(" : ");
    if (firstLetter != product[0]) {
      firstLetter = product[0];
      console.log(firstLetter);
      console.log(`  ${product}: ${price}`);
    } else {
      console.log(`  ${product}: ${price}`);
    }
  }
}
createCatalog([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
