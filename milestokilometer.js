// function milesToKilometer(miles){
// const kilometer = miles*1.609;
// return kilometer;
// }
// const quantity = 2;
// const mil = milesToKilometer(quantity);
// console.log(mil);

function isEven(num){
    const reminder = num%2;
    // console.log(reminder);
    if(reminder===0){
       return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven(305)
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);