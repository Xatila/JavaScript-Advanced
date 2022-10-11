function extract(content) {

    let contentEle = document.getElementById(content);
    let arr = Array(contentEle.textContent);
    console.log(arr);
    let words = [];
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
}