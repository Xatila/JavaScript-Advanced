function sortNames(names){
    let lengthSorted = names.sort(function(a, b){
        if(a.length>b.length) return 1;
        if(b.length>a.length) return -1;
        else if(a>b) return 1;
        else if(b>a) return -1;
      });
    console.log(lengthSorted.join('\n'));
}
sortNames(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortNames(['alpha', 'beta', 'gamma']);