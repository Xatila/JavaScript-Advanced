function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');
   function onClick() {
      for (const row of rows) {
        row.classList.remove('select');

        if(row.textContent.toLowerCase().includes(searchField.value.toLowerCase())&&searchField.value!==''){
          row.className='select';
        }
      }
      searchField.value=''; 
   }
   
}