console.log("hi!");
let arr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//let allSentances = arr.split(". ");
let count = 0;
 let letter = String.fromCharCode(119);
for(i=0;i>arr.length; i++){
    let current  =arr[i];
   if(letter===current){
       count++;
   }
    
}
console.log(count);