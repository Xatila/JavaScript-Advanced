function upSeparetedWords(array){
    const noSpecialCharacters = array.replace(/[^a-zA-Z0-9 ]/g, ' ');
    let separatedWords=noSpecialCharacters.split('');
    console.log(separatedWords.map(e=>e.toUpperCase().trim()).join(' '));
}
upSeparetedWords('Hi, how are you?');
upSeparetedWords('hello 123 !@#$%^WORLD?.');
upSeparetedWords('Functions in JS can be nested, i.e. hold other functions');