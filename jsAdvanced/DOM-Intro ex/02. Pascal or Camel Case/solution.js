function solve() {
  let text = document.getElementById("text").value;
  let convertType = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  //Conver to Pascal case:
  if (convertType == "Pascal Case") {
    let pascalCaseArr = Array.from(text);
    let pascalCaseResult = pascalCaseArr.map((x) => x.toLowerCase()).join("");
    function toPascalCase(string) {
      return `${string}`
        .toLowerCase()
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(
          new RegExp(/\s+(.)(\w*)/, "g"),
          ($1, $2, $3) => `${$2.toUpperCase() + $3}`
        )
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
    }
    result.textContent = toPascalCase(pascalCaseResult);
  }

  //Conver to Camel case:
   else if (convertType === "Camel Case") {
    let camelCaseArr = Array.from(text);
    let camelCaseResult = camelCaseArr.map((x) => x.toLowerCase()).join("");
    function toCamelCase(str) {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    }
    result.textContent = toCamelCase(camelCaseResult);
  }
  //Test for invalid input:
  else {
    result.textContent = "Error!";
  }
}
