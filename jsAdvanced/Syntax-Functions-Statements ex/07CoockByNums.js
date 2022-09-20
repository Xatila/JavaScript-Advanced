function coock(num, command1, command2, command3, command4, command5) {
    let number = Number(num);
    let arrOfCommands = [command1,command2,command3,command4,command5];
    let chop = function(){return number/=2;};
    let dice = function(){return Math.sqrt(number);};
    let spice = function(){return number+=1;};
    let bake = function(){return number*=3;};
    let fillet = function(){return number*0.80;};
    for (let i = 0; i < arrOfCommands.length; i++) {
        let command = arrOfCommands[i];
        switch (command) {
            case "chop":
                number = chop();
              console.log(number);
              break;
            case "dice":
                number=dice();
              console.log(number);
              break;
            case "spice":
                number=spice();
            console.log(number);
              break;
            case "bake":
                number=bake();
            console.log(number);
              break;
            case "fillet":
                number=fillet();
            console.log(number.toFixed(1));
              break;
          }   
    }
}

coock("32", "chop", "chop", "chop", "chop", "chop");
//coock('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
