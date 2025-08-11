"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase(); //we cannot do this this should'nt be allowed
    //i mean how can we convert numbers to upper case funny isnt it imagine we can do upper and lower case in cases of number
    //how can we fix this
    //simple : we can assign the type number to the parameter passed in the function
    // as soon as we add the type we start to get error in the to upper case
    //that : Property 'toUpperCase' does not exist on type 'number'.
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Abhishek");
//question 
//imagine we need a user with name,email and isPaid while shopping on a E-commerce website
//use what you learned
function isPaymentMade(name, email, isPaid) {
}
isPaymentMade("Abhishek", "abhishek@gmail.com", false);
