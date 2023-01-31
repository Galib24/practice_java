//  1*2*3*4*5*6*7
function multiplicationOfNumber(num){
    let result = 1;
    for(let i =1; i<=num; i++){
        result = result*i;
    }
    return result;
}
const result = multiplicationOfNumber(8);
// console.log(result);

// reverse factorial 
function factorial(num){
    let result =1;
    for(let i = num; i>=1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 5;
const fact = factorial(number);
console.log('factorial of: ',number, fact);