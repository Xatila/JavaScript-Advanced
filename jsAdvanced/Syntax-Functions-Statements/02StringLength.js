function stringLength(element1, element2, element3){
    let maxSum=element1.length+element2.length+element3.length;
    console.log(`${maxSum}\n${Math.floor(maxSum/3)}`);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');