const country = 'Bangladesh';
const age = 53;
const isIndependent = true;
const student ={id:121, class:11, name:'bali'};
const friend = [13,14,11,17,21,16,15,20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof student);
console.log(typeof add);
// check array using Array.isArray
console.log(Array.isArray(friend));

// -------------- for detect element of array
console.log(friend.includes(19));


if(friend.indexOf(19)!== -1){

}

// concat: join together
const newFriendsAge = [12,13,11,13]
const allFriends = newFriendsAge.concat(friend);
console.log(allFriends)