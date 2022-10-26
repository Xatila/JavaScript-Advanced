function validate() {
  let email = document.getElementById("email");

  email.addEventListener("focus", () => {
    email.classList.remove("error");
  });

  email.addEventListener("blur", () => {
    let text = Array.from(email.value);
    const firstPart = text.slice(0, text.indexOf("@"));
    let beforeDot = text.slice(text.indexOf("@") + 1, text.indexOf("."));
    let afterDot = text.slice(text.indexOf(".") + 1, text.length);
    const secondPart = [beforeDot + "," + afterDot][0].split(",");

    const checkLetters = (part) => {
      for (const letter of part) {
        if (!letter.match(/[a-z]/)) {
          return false;
        }
      }
      return true;
    };
    if (text==''||
      text.includes("@") &&
      text.includes(".") &&
      checkLetters(firstPart) &&
      checkLetters(secondPart)
    ) {
      email.style.clear();
    } else {
      email.className = "error";
    }
  });
}
