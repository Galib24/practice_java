var shoppingCard ={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen: 25,
    shoes: 2,
}
const keys =Object.keys(shoppingCard);
console.log(keys);

const value =Object.values(shoppingCard);
console.log(value);
// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName]
    // console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCard){
    const value = shoppingCard[propertyName]
    console.log(propertyName, value);
}
