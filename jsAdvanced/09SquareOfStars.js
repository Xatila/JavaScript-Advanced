function makeStars(numStars){
    for (let i = 0; i < numStars; i++) {
        console.log("*");
        for (let j = 0; j < i; j++) {
            console.log("*");
        }
    }
}
makeStars(5);