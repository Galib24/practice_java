// fixed: per item wood requirements
// 1. char --> 3cft
// 2. table --> 10cft
// 3. bed --> 50cft

// vary: quantity

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood =3;
    const perTableWood =10;
    const perBedWood =50;


    const ChairWood =  chairQuantity*perChairWood;
    const tableWood = tableQuantity*perTableWood;
    const bedWood = bedQuantity*perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);

    const totalWood = ChairWood+tableWood+bedWood;
    return totalWood;

}
const totalWood = woodCalculator(2, 2, 5);
console.log('total wood required: ',totalWood);