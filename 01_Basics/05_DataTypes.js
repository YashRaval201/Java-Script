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

// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutube = "yashraval"
let anotherName = myYoutube
anotherName = "ravalyash"
// This will be stack data structure means it will store the newer name on above the previous name

console.log(myYoutube);
console.log(anotherName);

let user = {
    email : "yash@gamil.com",
    upi : "yash@okicici"
}

let user2 = user
user2.email = "yash201@gmail.com"
// This will be Heap data structer means it will store the newer data in the place of previous data. 
console.log(user.email)
console.log(user2.email)
