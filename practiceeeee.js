// var String = 'man';
// var manIsMortal = true;
// var Number = 7;
// let num = 2;
// const num2 = 3;

// var number1= 2;
// var number2 = 4;
// var sum = number1 + number2;
// const result = sum;
// console.log(result);
function isJavaScriptFile(String){
    let something = String.split(' . ');
    var smmb = something.includes('js')
    console.log(smmb);
}
let sent = 'js.png';
isJavaScriptFile(sent)