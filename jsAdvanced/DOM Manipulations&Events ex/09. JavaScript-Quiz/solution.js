function solve() {
  let answers1 = document.getElementsByTagName("li")[1];
  let questions = document.getElementsByTagName("section");
  let currentQuestion = 0;

  if(
  answers1.addEventListener("click", () => {
    questions[currentQuestion].style.display="none";
    questions[currentQuestion+1].style.display="block";
    console.log(answers1);
  })){
    currentQuestion++;
  };
}
