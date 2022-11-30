function solution(){
    let text = '';
    return obj = {
        append(textToAdd){
            text+=textToAdd;
        },
        removeStart(num){
           text = text.substring(num);
        },
        removeEnd(num){
            text = text.substring(0, text.length-num);
        },
        print(){console.log(text);}
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
