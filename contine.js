var num = [45, 87, 89, 56, 32, 51, 25, 188, 41];
num.push(129);
num.pop();

for(var i =0; i < num.length; i++){
    var number = num[i];
    if(number>50){
        continue;
    }
    console.log(number);
}