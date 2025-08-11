// Define a string enum for order statuses
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

// How to use it
let myOrderStatus: OrderStatus = OrderStatus.Shipped;

console.log(myOrderStatus); // output: "SHIPPED"

// myOrderStatus = "shipping"; // Error! "shipping" is not a valid OrderStatus.


export{};