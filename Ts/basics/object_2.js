// Now, we use that shape as the RETURN TYPE for a function
function createProduct(name, price) {
    // This function here must return an object that matches the 'Product' blueprint
    return {
        id: Math.floor(Math.random() * 1000), // a random ID
        name: name,
        price: price,
    };
}
// here we are calling the function
var myProduct = createProduct("Notebook", 150);
console.log(myProduct);
// Expected output: { id: 435, name: 'Notebook', price: 150 } (id will be random)
