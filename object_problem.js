const phones =[
    {name:'samsung', camera: 14, storage: '32gb', price: 36000, color: 'silver' },
    {name:'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    {name:'iphone', camera: 16, storage: '32gb', price: 82000, color: 'silver' },
    {name:'xaomi', camera: 18, storage: '32gb', price: 52000, color: 'silver' },
    {name:'oppo', camera: 19, storage: '32gb', price: 20000, color: 'silver' },
    {name:'Nokia', camera: 20, storage: '32gb', price: 44000, color: 'silver' },
    {name:'HTC', camera: 34, storage: '32gb', price: 62000, color: 'silver' },
];

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//          for(let i = 0; i< phones.length; i++){
//             const phone = phones[i];
//            if(phone.price<cheapest.price){
//             cheapest = phone;
//            }
//          }
//          return cheapest;
// }
// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

function maxCamera(phones){
    let lowPixel = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.camera<lowPixel.camera){
            lowPixel = phone;
        }
    }
    return lowPixel;
   

}
const mySelection = maxCamera(phones)
console.log(mySelection);