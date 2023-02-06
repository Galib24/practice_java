

// problem 1

// function mindGame(number){

//  if(typeof number !== 'number'){
//         return "provide valid input"
//       }

//     else{

//  let math  = (number*3);
//  result1 = math+10;
//  result2 = result1/2;
//  mainResult = result2-5;

//  return mainResult;

// }
// }
// const num1 = mindGame(5);
// console.log(num1);
// const num2 = mindGame(50);
// console.log(num2);
// const num3 = mindGame(33);
// console.log(num3);



// problem 2


// function evenOdd(str){
//     if(typeof str !== 'string'){
//         return "provide valid input"
//       }
//       else{
//  console.log(str.length);

//  if(str.length % 2 == 0){
//     return 'It is even';
//  }
//  else{
//     return 'It is Odd';
//  }
// }
// }
// const findOut1 = evenOdd('Phero');
// console.log(findOut1);
// const findOut2 = evenOdd('Batch7');
// console.log(findOut2);
// const findOut3 = evenOdd('chatgpt');
// console.log(findOut3);



// problem 3

function isLGSeven(numbers){
 if(typeof numbers !== 'number'){
    return "provide valid input"
        }

  else{
    operation = numbers - 7;

    if(operation < 7){
        return operation;
    }
    else{
        return numbers*2;
    }

              }

}
const InputNumber1 = isLGSeven(6)
console.log(InputNumber1);
const InputNumber2 = isLGSeven(-15)
console.log(InputNumber2);
const InputNumber3 = isLGSeven(15)
console.log(InputNumber3);


// problem 4

// function findingBadData(array){
//     if(typeof Array.isArray(array) === "false") {
//         return " provide an array";
//     }
//     else{
//         let Array = 0;
//         for(let i = 0; i<array.length; i++){
//             const element = array[i];
//             if(element<0){
//                 Array++;
//             }
//     }
//     return Array;

//     }
// }
// const BadData1 = findingBadData([ 1,2,5 ])
// console.log(BadData1);
// const BadData2 = findingBadData( [ 2, -5, -7, -13 ])
// console.log(BadData2);
// const BadData3 = findingBadData( [ -4, -9, -5, -33, -55 ])
// console.log(BadData3);



// problem 5

// function gemsToDiamond(gem1, gem2, gem3) {


//    total = gem1+gem2+gem3;
//    console.log(total);
//    if(total >=1000*2 ){
//    return Math.abs(total-2000);
  
//    }
   

//   }

// let Friend = gemsToDiamond(100, 5, 1);
// console.log(Friend);


