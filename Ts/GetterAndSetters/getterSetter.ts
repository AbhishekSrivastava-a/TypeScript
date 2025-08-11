class User {
    // 1. The "real" data, kept private so no one can mess with it directly.
    private _email: string = "";

    // 2."setter": A protective function that runs when you try to set 'email'.
    // It looks like a property but is actually a method.
    set email(newEmail: string) {
        if (newEmail.includes("@")) {
            
            this._email = newEmail.toLowerCase();
        } else {
            console.log("Please provide a valid email address.");
        }
    }

    //  "getter": A function that runs when you try to read 'email'.
    get email(): string {
        // It can format the data before returning it.
        return this._email.toUpperCase();
    }
}

// --- Let's use the class ---

const newUser = new User();

// Use the SETTER (like assigning a value to a property)

newUser.email = "a@a.com";

// Use the GETTER (like reading a property)

console.log(newUser.email); // Output: a@a.COM


// invalid email
newUser.email = "not-an-email"; // Output: Please provide a valid email address.
console.log(newUser.email);   // Output: a@a (the value wasn't updated)
