// 1 + 2 + 4 + 5 + 6 + 7
let sum = 0;
for(let i =1; i<=7; i++){
    sum = sum + i;
    // console.log(i, sum);
}

// using function
function sumOfNumbers(num){
    let sum = 0;
for(let i =1; i<=num; i++){
    sum = sum + i;
    console.log(i, sum);
}
return sum;
}
sumOfNumbers(7);