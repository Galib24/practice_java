// if ticket num is less than 100 so per ticket price must pay 100,
// if ticket num is more than 100,but less than 200 first 100 ticket will be 100tk rest ticket will be 90tk
// if you purches more than 200 ticket
// first 100 ----> 100tk
//       101-200 -->90tk
//       200+ ----> 70tk

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <=100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100* first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Rate + restTicketPrice; 
        return totalPrice;
    }
    else{
        const first100price = 100* first100Rate;
        const second100Rate = 100*second100Rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity - restTicketRate;
        const totalCost = first100Rate+second100Rate+restTicketPrice;
         return totalCost;
    }
}
const price = ticketPrice(120);
console.log('price: ', price);