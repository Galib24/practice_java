function getSumOfAnArray(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        const index =i;
        const element = array[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];

getSumOfAnArray(myNumbers)