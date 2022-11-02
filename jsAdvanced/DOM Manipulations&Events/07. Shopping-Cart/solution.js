function solve() {
  console.log("done");
  const button1 = document.getElementsByTagName("button")[0];
  const button2 = document.getElementsByTagName("button")[1];
  const button3 = document.getElementsByTagName("button")[2];
  const checkOutBtn = document.getElementsByTagName("button")[3];

  const name1 = document.getElementsByClassName("product-title")[0].textContent;
  const name2 = document.getElementsByClassName("product-title")[1].textContent;
  const name3 = document.getElementsByClassName("product-title")[2].textContent;
  const price1 =
    document.getElementsByClassName("product-line-price")[0].textContent;
  const price2 =
    document.getElementsByClassName("product-line-price")[1].textContent;
  const price3 =
    document.getElementsByClassName("product-line-price")[2].textContent;
  const result = document.getElementsByTagName("textarea")[0];
  
  function generateTextToAdd(name, price){
    return `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;}

  let productsList = [];
  let totalPrice = 0;

  button1.addEventListener("click", () => {
    result.textContent += generateTextToAdd(name1, price1);
    if(!productsList.includes(name1)){
      productsList.push(name1);
    }
    totalPrice += Number(price1);
  });
  button2.addEventListener("click", () => {
    result.textContent += generateTextToAdd(name2, price2);
    if(!productsList.includes(name2)){
      productsList.push(name2);
    }
    totalPrice += Number(price2);
  });
  button3.addEventListener("click", () => {
    result.textContent += generateTextToAdd(name3, price3);
    if(!productsList.includes(name3)){
      productsList.push(name3);
    }
    totalPrice += Number(price3);
  });

  checkOutBtn.addEventListener("click", () => {
    result.textContent += `You bought ${productsList.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    button1.disabled = "true";
    button2.disabled = "true";
    button3.disabled = "true";
    checkOutBtn.disabled = "true";
  });
}
