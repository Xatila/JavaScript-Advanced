function search() {
  let towns = document.getElementById("towns");
  let letterToSearch = document.getElementById("searchText").value;
  let divResult = document.getElementById("result");

  let filter = letterToSearch.toUpperCase();
  li = towns.getElementsByTagName("li");
  let counter = 0;
  for (i = 0; i < li.length; i++) {
    let a = li[i];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style = "font-weight:bold; text-decoration: underline;";
      counter++;
    }
  }
  divResult.textContent = `${counter} matches found`;
}
