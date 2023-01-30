
// First problem

// function make_avg(a,b,c){
//     var sum = a + b + c;
//     var avg = sum/3;
//     console.log(avg);
// }
// make_avg(2, 4, 6);

// second problem 
// var make_avg={
//     bucket:1,
//    book: 2,
//    tie:3,
//    pen: 4,
//    shoe: 5
// }
// // string index in array of function
// const  keys = Object.keys(make_avg)
// console.log(keys);
// // value index in array of function
// const value =Object.values(make_avg);
// console.log(value);

// var sum = 0;
// for(var number of value){
//     sum+=number;
// }
// avg = sum/ value.length;
// console.log(avg);


// Third Problem 
// function foo(){
//     function bar(){
//         console.log('bar');
//     }
//     bar();
// }
// foo();


// Fourth problem 
function oddEven(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
    console.log("Even");
    } else {
    console.log("Odd");
    }
    }
    }
    oddEven([10, 20, 15, 15]);



