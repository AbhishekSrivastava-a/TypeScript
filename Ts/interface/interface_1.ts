interface Pair <T, U> {
 first:T;
 second:U;
}


let p: Pair<string, number> = {first : '10K', second: 1000};

const person: Pair<string , string> = {first:'Abhishek', second:'Srivastava'};

console.log(person)
console.log(p);