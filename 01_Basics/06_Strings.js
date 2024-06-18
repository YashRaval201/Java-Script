const name = "yash"
const repoCount = 4


// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Yash-Raval")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4) // 4 index is not included
console.log(newString)

let rev =gameName.slice(-10, 2)
console.log(rev) 

rev = gameName.slice(-4) //Last 4 characters of string
console.log(rev)

const newSt = "     yash       raval      "
console.log(newSt.trim()); // remove extra spaces from left and right side of string

const url = "https://www.google.com/yash%20raval"
console.log(url.replace('%20', '-'));

console.log(url.includes('yash'));

const st = "yash-alkeshkumar-raval"
console.log(st.split('-'))