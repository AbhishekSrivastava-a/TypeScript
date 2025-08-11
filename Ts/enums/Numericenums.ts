//Enums are upgraded version on union in union we used to do type and show message 
// but in enums we give it a named object that holds these values

//numeri enums

enum Direction {
  North, // gets the value 0
  East,  // gets the value 1
  South, // gets the value 2
  West   // gets the value 3
}

// How to use it
let myDirection: Direction = Direction.North;

console.log(myDirection); // output: 0

enum StatusCodes {
  OK = 200,
  BadRequest, // becomes 201
  NotFound    // becomes 202
}
