//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Reference (Non primitive)
// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 
//both of them has different id even the value be same then also

// const bigNumber = 3456543576654356754n
// this takes it as big int

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}



//for function

//Type of val Result
/*
Undefined "undefined"
Null "object"
Boolean "boolean"
Number "number"
String "string"
Object (native and does not "object"
implement [[Call]])
Object (native or host and does "function"
implement [[Call]])
Object (host and does not Implementation-defined except may not be "undefined",
implement [[Call]]) "boolean", "number", or "string".
*/


const myFunction = function(){
    console.log("Hello world");
}
let ca = myFunction();
