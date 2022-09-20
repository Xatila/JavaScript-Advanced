function sortNames(names) {
  names.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  let list = 1;
  for (let i = 0; i < names.length; i++) {
    console.log(list + "." + names[i]);
    list++;
  }
}
sortNames(["John", "Bob", "Christina", "Ema"]);
