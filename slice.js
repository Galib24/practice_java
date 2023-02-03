const friends = [12,45,32,44,62,29,69,87];
const partial = friends.slice(2, 5);
// console.log(partial);

// splice 
const Friends = [12,45,32,44,62,29,69,87];
const Partial = friends.splice(1, 5, 99, 555, 7777);
console.log(Partial);