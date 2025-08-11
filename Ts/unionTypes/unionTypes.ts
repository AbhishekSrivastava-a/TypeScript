//uniontypes You are allowed to be a string, OR a number, OR a boolean
//The key idea is flexibility combined with safety. Instead of allowing a variable to be anything (which can lead to bugs), you give it a specific list of acceptable types it can choose from.
// This variable can hold either a string or a number
let myId: string | number;

myId = 123;       // This is valid
myId = "ABC-123"; // This is also valid

// myId = true;   // This would cause an error because boolean is not in the union




//use case example
//lets say we want to check the orderstatus of a user

type OrderStatus = "pending" | "shipped" | "delivered";

let currentStatus: OrderStatus = "pending"; // OK
// let currentStatus: OrderStatus = "returned"; // Error! Not one of the allowed options.
