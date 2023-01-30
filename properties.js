var shoppingCard ={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen: 25
}
// when you know the specific name, property name, use dot notation to get the property value
var penCount = shoppingCard.pen;
// alternative system
// when you know the specific name, property name, use dot notation to get the property value
var penCount2 = shoppingCard['pen'];
// property value identify
var propertyName = 'mouse';
var propertyValue = shoppingCard[propertyName]
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCard);
var propertyValues = Object.values(shoppingCard);

// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCard);

// set property values first way
shoppingCard.mouse =15;
// console.log(shoppingCard)


// set property values second way
shoppingCard.mouse =15;
// console.log(shoppingCard);
shoppingCard['mouse']=29;
// console.log(shoppingCard);

// set property values third way
shoppingCard.mouse =15;
console.log(shoppingCard);
shoppingCard['mouse']=29;
console.log(shoppingCard);
shoppingCard[propertyName]=89;
console.log(shoppingCard);