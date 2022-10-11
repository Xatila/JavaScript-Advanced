let array = ['The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).']
let words = [];
let arr = array.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let currentWord = '';
        let currentLetter = '';
        if(arr[i]==="("){
            currentLetter=arr[i];
        }else if(arr[i]===")"){
            currentLetter='';
            words.push(currentWord);
        }else{
            currentLetter = arr[i];
            currentWord+=currentLetter;
        }
    }
    console.log(words);