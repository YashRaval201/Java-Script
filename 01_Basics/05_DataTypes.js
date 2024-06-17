//  Primitive
//  7 categories :
//  String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference Type Non Prmitive
// Arrays, Objects, Functions

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail //Bydefault it will store undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const BigNum = 12324568498416565n //BigINT

// array
const heroes = ["yash", "anand", "brijesh"]

//object
let myObj = {
    name : "yash",
    age : 22
}

// function
const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myObj);