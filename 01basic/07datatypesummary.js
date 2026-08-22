

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// Return type of variables in JavaScript

// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const heros = ["shaktiman" , "Naagraj", "Doga"];

let myObj = {
    name : "Syed Yasser",
    age  : 23,
    Edu  : "BCA"
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(myObj);
console.log(heros);
console.log( myFunction );
