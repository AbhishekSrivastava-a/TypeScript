// let user: { name: string; email: string; isActive: boolean; };
//this is how we write an object without a type alias



type User = { //here user is an alias 
  name: string;
  email: string;
  isActive: boolean;
};

//here we are using the alias to update the user property by using 'User' as an alias
let newUser: User = {
    name: "Abhishek",
    email: "Abhishek@abhishek.com",
    isActive: true
};


export{};