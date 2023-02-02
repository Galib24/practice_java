function maxInArray(number) {
    let largest = number[0]
for(let i = 0; i< number.length; i++){
    const index = i;
    const element = number[index];
    if(element>largest){
        largest = element;
    }
   
}
return largest;
}
const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('tallest person is: ', tallest);


// work write a function of lwo num