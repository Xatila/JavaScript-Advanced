function solve() {
  let textToSeparate = document.getElementById("input");
  let array = textToSeparate.value.split(". ").filter(x => x !== "");
  let divOutput = document.getElementById("output");
  
  while (array.length > 0) {
    let text = array.splice(0, 3).join('. ') + ".";
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    divOutput.appendChild(paragraph);
  }
}
