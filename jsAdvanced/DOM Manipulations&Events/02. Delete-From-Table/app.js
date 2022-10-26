function deleteByEmail() {
  let result = document.getElementById('result');
  let input = document.getElementsByName("email")[0].value;
  let rows = document.querySelectorAll('tr td:nth-of-type(2)');
  
  let arrayOfEmails = Array.from(rows);
  let emailToDelete = arrayOfEmails.find(x=>x.textContent==input);
  if(emailToDelete){
    result.textContent="Deleted.";
    emailToDelete.parentNode.remove();
  }else{
    result.textContent="Not found.";
  }
}