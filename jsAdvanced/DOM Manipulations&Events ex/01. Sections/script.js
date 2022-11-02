function create(words) {
   let mainDiv = document.getElementById('content');
   for (const word of words) {
      let currentSection = document.createElement('div');
      let currentP = document.createElement('p');
      currentP.textContent=word;
      currentP.style='display:none';
      mainDiv.appendChild(currentSection).appendChild(currentP);
      currentSection.addEventListener('click', ()=>{
         currentP.style="display:block";
      })
   }

}