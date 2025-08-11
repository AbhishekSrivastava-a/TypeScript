// First declaration of the User interface
interface User {
  id: number;
  name: string;
}

// "Reopening" the User interface to add more properties
interface User {
  email: string;
  isAdmin: boolean;
}

// The resulting 'User' interface has all four properties
const myUser: User = {
  id: 101,
  name: "A",
  email: "a@b.com",
  isAdmin: false
};


export{};