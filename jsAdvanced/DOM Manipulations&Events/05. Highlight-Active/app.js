function focused() {
    let allInputElemenst = document.getElementsByTagName('input');
    console.log(allInputElemenst);
    for (const input of allInputElemenst) {
         input.addEventListener('focus', ()=>{
            input.parentNode.className="focused"});
            input.addEventListener('blur',()=>{
                input.parentNode.classList.remove('focused')});
    }
}