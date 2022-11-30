function solve() {
  let input = document.getElementsByTagName("textarea")[0];
  let output = document.getElementsByTagName("textarea")[1];
  const buttons = document.getElementsByTagName("button");
  const generateButton = buttons[0];
  const buyButton = buttons[1];
  let mainTable = document.getElementsByTagName("tbody")[0];

  const generateProduct = () => {
    const object = JSON.parse(input.value);
    for (let i = 0; i < object.length; i++) {
      let fullProduct = document.createElement("tr");
      let img = fullProduct
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("img"));
      let name = fullProduct
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("p"));
      let price = fullProduct
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("p"));
      let decFactor = fullProduct
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("p"));
      let check = fullProduct
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("input"));
      check.setAttribute("type", "checkbox");
      mainTable.appendChild(fullProduct);
        img.src = object[i].img;
        name.textContent = object[i].name;
        price.textContent = object[i].price;
        decFactor.textContent = object[i].decFactor;
    }
  };
  generateButton.addEventListener("click", generateProduct);

  const showBoughtItems = () => {
    const allRows = document.getElementsByTagName("tr");
    let boughtItmes = [];
    let finalPrice = 0;
    let sumDecFactor = 0;
    for (let index = 1; index < allRows.length; index++) {
      let currentRow = allRows[index];
      let currentCheck = currentRow.getElementsByTagName("input")[0];
      if (currentCheck.checked) {
        let name = currentRow.getElementsByTagName("p")[0].textContent;
        let price = currentRow.getElementsByTagName("p")[1].textContent;
        let decFactor = currentRow.getElementsByTagName("p")[2].textContent;
        if(!boughtItmes.includes(name)){
          boughtItmes.push(name)
        };
        finalPrice += Number(price);
        sumDecFactor += Number(decFactor);
      }
    }
    let averageDecFactor = sumDecFactor / boughtItmes.length;
    output.textContent = `Bought furniture: ${boughtItmes.join(
      ", "
    )}\nTotal price: ${finalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${averageDecFactor}`;
  };
  buyButton.addEventListener("click", showBoughtItems);
}
