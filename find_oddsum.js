// get sum of array

// function getSumOfAnArray(array){
//     let sum = 0;
//     for(var i = 0; i < array.length; i++){
//         const index =i;
//         const element = array[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];

// getSumOfAnArray(myNumbers)



function getSumOfAnArray(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        const index =i;
        const element = array[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
function getOddNumberOfAnArray(array){
    const oddNumber = [];
    for(let i = 0; i<array.length;i++){
        const index = i;
        const element = array[index];
        if(element %2 !==0){
            console.log(index, element);
            oddNumber.push(element);
        }
        
    }
    return oddNumber;

}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumber = getOddNumberOfAnArray(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSumOfAnArray(oddNumber);
console.log('odd number sum', oddNumberSum);