//lets say we want to create a user 
// this has email, googleid, databaseid, and we are trying to get a trial version for services


 
interface User {
  readonly databaseId: number; // 'readonly' means it cannot be changed after creation
  email: string;
  googleId?: string; // The '?' makes this property optional
  startTrial(): string; // user has a method called 'startTrial' that returns a string
}


const abhishek: User = {
  databaseId: 12345,
  email: "a@abhishek.com",
  
  startTrial: () => {
    return "Trial started successfully.";
  }
};


console.log(abhishek.email);          // Output: a@abhishek.com
console.log(abhishek.startTrial());   // Output: Trial started successfully.

// abhishek.databaseId = 6789; // ERROR: Cannot assign to 'databaseId' because it is a read-only property.
