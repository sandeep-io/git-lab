// Using var
var name = "Sandeep";
var name = "Abinash"; // redeclared
console.log("var name:", name);

// Using let
let age = 22;
age = 23; // updated
console.log("let age:", age);

// Using const
const country = "India";
console.log("const country:", country);

// country = "USA"; // error (cannot change const)

// Block Scope Example
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log("var a:", a); // works
// console.log("let b:", b); error
// console.log("const c:", c); error

// Hoisting Example
console.log(x); // undefined
var x = 5;

// console.log(y); // error
let y = 10;