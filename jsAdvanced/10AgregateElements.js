function agregateElements(array){
    let sum = 0;
    let reversedDivorceSum = 0;
    let concated = '';
    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i]);
        sum+=currentElement;
        reversedDivorceSum+=1/currentElement;
        concated+=array[i];
    }
    console.log(`${sum}\n${reversedDivorceSum}\n${concated}`);
}
agregateElements([1,2,3]);