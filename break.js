// for(var i=1; i<20; i++){
//     console.log(i);
//     if(i >5){
//         break;
//     }
// }


// var items = ['table', 'pen', 'brush', 'notebook', 'glass','tape']
// items.push('toy');

// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'brush'){
//         break;
//     }
//     console.log(item)
// }


var num = [45, 87, 89, 56, 32, 51, 25, 188, 41];
num.push(129);
num.pop();

for(var i =0; i < num.length; i++){
    var number = num[i];
    if(number>99){
        break;
    }
    console.log(number);
}