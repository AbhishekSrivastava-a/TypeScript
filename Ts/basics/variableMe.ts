//strings
let greetings: string = "Abhishek";
 

console.log(greetings);


//number

// let userId: number = 3473583475.3425324
// userId.toFixed();

let userId = 6513.84;
userId.toFixed();




//any

let hero: string;

function getHero(){
 return "Hero"
}

hero = getHero(); //now we cannot assign any values in return it cannot be number or boolean 
//if we do it will throws us an error 
//in (any) we dont use it because in TS conifg there is a anyImplicit that catches that



