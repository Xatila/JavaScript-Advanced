let array = ['ele1'];
let[elment1] = array;
array.pop();
console.log(array);
if(array.filter(x=>x.elment1===elment1)){
    console.log("have");
}else{
    console.log("dont have");
}