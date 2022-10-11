function sumTable() {
    let numbers = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = document.getElementById('sum');
    let result = Array.from(numbers).reduce((a,x)=>{
        let currSum = Number(x.textContent)||0;
        return a + currSum;
    },0);
    sum.textContent=result;
}