// numbers using the generic syntax
let prices: Array<number> = [100, 79, 149.99];

// string
let names: Array<string> = ["A", "B", "C"];





//we can also create arrays that hold objects. This is where the type aliases we saw earlier become very useful. 

type Product = {
  id: number;
  name: string;
  inStock: boolean;
};

// 2. Declare an array that can only hold 'Product' objects
const shoppingCart: Product[] = [
  { id: 1, name: "Notebook", inStock: true },
  { id: 2, name: "Pen", inStock: false },
  { id: 3, name: "Stapler", inStock: true }
];


export{};



// This array can hold either strings or numbers
let data: (string | number)[] = ["apples", 5, "oranges", 10];

data.push("bananas"); // OK
data.push(15);        // OK
// data.push(true);   // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
