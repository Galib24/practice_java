// function findMax(arr){
     
//       let largest = arr[0];
//       for(var i = 0; i<arr.length;i++){
//         if (arr[i]>=largest) {
//           largest = arr[i];
          
          
//         }
//       }
//       return largest;
      
//     }
//     let arr = [1,2,3,4,5];
//     var another = findMax(arr)
    // console.log(another);

    //  another problem

    // let number = [-1,2,-3,4,5,6,-7,8,-9,10];
    // let count = 0;

    // for(let i = 0; i<number.length; i++){
    //   const element = number[i];
    //   // console.log(element);
    //   if(element > 5){
    //     // console.log('yes');
    //     count = count + 1;
    //   }
    //   else{
    //     // console.log('no');
    //   }
    // }
    // console.log(count);

    function greaterThanFive(numbers){
      let count = 0;
      for(let i = 0; i<numbers.length; i++){
        const Element = numbers[i];
        // console.log(Element);
        if(Element>5){
          count++;
        }

      }
      return count;
    }

let result1 = greaterThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(result1);

// another problem without function
let namOne = 'John';
let nameTwo = 'Alexis';

let friendOneLength=namOne.length;
let friendTwoLength=nameTwo.length;

if(friendOneLength > friendTwoLength){
  // console.log(namOne.split("").reverse().join(""));
}
else{
  // console.log(nameTwo.split("").reverse().join(""));
}
   
// with function

function reverseName(nameOne, nameTwo){

  let friendOneLength=namOne.length;
  let friendTwoLength=nameTwo.length;
  
  if(friendOneLength > friendTwoLength){
    // return namOne.split("").reverse().join("");
  }
  else{
    // return nameTwo.split("").reverse().join("");
  }
     
}
let result = reverseName("John", "Alexis");
// console.log(result);

// another
// function totalCost(products){
//   let sum = 0;
//   for(let i = 0; i < products.length; i++){
//     let value = products[i];
//     sum = sum + value.price;
//   }
//   return sum;
// };

//   var case1=([
//     {name: 'DanO Milk', price: 500},
//     {name: 'TaaZa tea', price: 200},
//     {name: 'fresh sugar', price: 300},
  
//   ]);
//  var case2=([
//     {name: 'Samsung M33', price: 10000},
//     {name: 'Samsung Charger', price: 500},
//     {name: 'HavEit Speaker', price: 2500},

//   ]);
//   let totalCase = (case1, case2);
//   let totalElement =totalCost(totalCase);
  

// console.log(totalElement);

//  another
// function solution(letter){
//   if (letter == 'a'|| letter == 'e' || letter == 'i' || letter == 'o'|| letter == 'u'){
//     return 'VOWEL';
//   }
//   else{
//     return 'CONSONANT'
//   }
// }
// let alphaBet = solution('a','b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w','x','y','z');
// console.log(alphaBet);

// another 
// function peter(program){
  
//   if( program % 2 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
  
// }
// var num1 = peter(98);
// console.log(num1);
// var num2 = peter(117);
// console.log(num2);


// again

// function radianTpDegree(radian) {
  // if(typeof radian !== 'number'){
  //   return "provide valid input"
  // }
//   const PI = 3.141631837;
//   const degree = (radian*(180/PI)).toFixed(2);
//   return degree;
  
// }
// var newOne = 30;
// console.log(radianTpDegree(newOne));

// leap year
// function findLeapYear(years){
//   let result = [];
// for(let i = 0; i<years.length; i++ ){
//   const element = years[i];
// if(((element % 4 == 0) && (element % 100 !==0)) || (element % 400 == 0)){
//   result.push(element);
// }

// }
// return result;
// }
// let years = [2002, 2003,2016,2020,1952,2024,2025];
// console.log(findLeapYear(years));
function isJavaScriptFile(fileName){
  // console.log(fileName);

  if(fileName.endsWith('.js')){
    return true
  }
  else{
    return false;
  }
}
let Result = isJavaScriptFile('index.js')
// console.log(Result);


// best friend

// function isBestFriend(ObjectOne, ObjectTwo){
//   if(
//     ObjectOne.name == Object.friend &&
//     ObjectTwo.name == Object.friend
//   ){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(
//   isBestFriend(
//     {name: "abul", friend:"babul"},
//     {name: "babul", friend:"abul"},
//   )
// );



