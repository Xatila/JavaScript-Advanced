function encodeAndDecodeMessages() {
  const encodeButton = document.getElementsByTagName("button")[0];
  const decodeButton = document.getElementsByTagName("button")[1];

  let mainDiv = document.getElementById("main");
  let areas = mainDiv.getElementsByTagName("textarea");
  [firstArea, secondArea] = areas;
  
  const encode = () => {
    let result = "";
    let arrToEncode = Array.from(firstArea.value).toString();
    for (let i = 0; i < arrToEncode.length; i += 2) {
      let currentChar = arrToEncode.charCodeAt(i);
      result += String.fromCharCode(currentChar + 1);
    }
    secondArea.textContent = result;
    decodeButton.addEventListener("click", decode);
  };
  const decode = () => {
    let arrToDecode = Array.from(secondArea.textContent).toString();
    let result = "";
    for (let i = 0; i < arrToDecode.length; i += 2) {
      let currentChar = arrToDecode.charCodeAt(i);
      result += String.fromCharCode(currentChar - 1);
    }
    secondArea.textContent = result;
    decodeButton.removeEventListener('click', decode);
  };
  encodeButton.addEventListener("click", encode);
}
