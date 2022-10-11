function colorize() {
    let rowElemenets = document.querySelectorAll('tr:nth-of-type(2n) td');
    rowElemenets.forEach(x=>{
        x.style.backgroundColor = 'teal'});
}