// First, we define the shape of the object we want to create
type Product = {
  id: number;
  name: string;
  price: number;
};

// Now, we use that shape as the RETURN TYPE for a function
function createProduct(name: string, price: number): Product {
  // This function here must return an object that matches the 'Product' blueprint
  return {
    id: Math.floor(Math.random() * 1000), // a random ID
    name: name,
    price: price,
  };
}

// here we are calling the function
const myProduct = createProduct("Notebook", 150);
console.log(myProduct);
// Expected output: { id: 435, name: 'Notebook', price: 150 } (id will be random)
