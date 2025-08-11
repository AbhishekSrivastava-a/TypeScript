function addTwo(num: number) {
  // num.toUpperCase(); //we cannot do this this should'nt be allowed
  //i mean how can we convert numbers to upper case funny isnt it imagine we can do upper and lower case in cases of number

  //how can we fix this
  //simple : we can assign the type number to the parameter passed in the function
  // as soon as we add the type we start to get error in the to upper case
  //that : Property 'toUpperCase' does not exist on type 'number'.

  return num + 2;
}
addTwo(5);

function getUpper(val:string){
 return val.toUpperCase()
}

getUpper("Abhishek");

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("Abhishek")

signUpUser("Abhishek", "Abhishek@lco.dev", false)
loginUser("h", "h@h.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}



export {}



//question 
//imagine we need a user with name,email and isPaid while shopping on a E-commerce website
//use what you learned


function isPaymentMade(name : string, email: string, isPaid: boolean){
 
}
isPaymentMade("Abhishek", "abhishek@gmail.com", false);


export{};  

