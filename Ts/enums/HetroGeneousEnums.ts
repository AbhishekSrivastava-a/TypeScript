//both numeric and string values together in the same enum, 
// which is known as a heterogeneous enum. 
//Hetrogeneous enums are bad practice in TS as it adds inconsitency


enum Status {
  Active = 1,
  Inactive = "INACTIVE",
  Pending = 2,
  Cancelled = "CANCELLED"
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // Output: 1

let cancelledStatus: Status = Status.Cancelled;
console.log(cancelledStatus); // Output: "CANCELLED"


export{};