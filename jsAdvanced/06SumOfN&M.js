function sumNM(n,m){
    let sum=0;
    let firstNum = Number(n);
    let secondNum = Number(m);
    for (let i = firstNum; i <= secondNum ; i++) {
        let currNum = i;
        sum+=i;
    }
    console.log(sum);
}
sumNM('1', '5' );
sumNM('-8', '20');