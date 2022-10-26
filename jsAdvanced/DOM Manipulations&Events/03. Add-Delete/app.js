function addItem() {
  let list = document.getElementById("items");
  let liElement = document.createElement("li");
  let inputTextElement = document.getElementById("newItemText");
  let dleteOption = document.createElement("a");
  dleteOption.href = "#";
  dleteOption.textContent = "[DELETE]";
  liElement.textContent = inputTextElement.value;
  list.appendChild(liElement);
  liElement.appendChild(dleteOption);
  inputTextElement.value = "";
  dleteOption.addEventListener("click", () => {
    liElement.remove();
  });
}
