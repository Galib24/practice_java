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

//     function greaterThanFive(numbers){
//       let count = 0;
//       for(let i = 0; i<numbers.length; i++){
//         const Element = numbers[i];
//         // console.log(Element);
//         if(Element>5){
//           count++;
//         }

//       }
//       return count;
//     }

// let result = greaterThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
// console.log(result);

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
    return namOne.split("").reverse().join("");
  }
  else{
    return nameTwo.split("").reverse().join("");
  }
     
}
let result = reverseName("John", "Alexis");
console.log(result);