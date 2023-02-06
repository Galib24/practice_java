// var array = [34, 76, 65, 98, 89, 23, 43, 12, 21];
// for(let i = 0; i<array.length;i++){
//     // console.log(i);
//     // let num = array[i]
//     if(array[i]>80){
//         // console.log(array[i]);
        
//     }
// }
// var array = [34, 76, 65, 98, 89, 23, 43, 12, 21];
// let numberArray = [];
// for(let i = 0; i<array.length;i++){
//     const number = array[i];
//     if(number>80){
//         numberArray.push(number);
//     }
    
// }
// console.log(numberArray);

var array = [34, 76, 65, -98, -89, 23, 43, -12, 21];
let numberArray = [];
for(let i = 0; i<array.length;i++){
    const number = array[i];
    if(number<0){
        numberArray.push(number);
    }
}

console.log(numberArray);


