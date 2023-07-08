// Types of Variable tutorial --- 1. Primitive/Value types 2. Reference type
// Primitive/value type

//let name = 'addy';        // string literal
//let age = 30;             // Number literal
//let isApproved = true;    // Boolean lieral (it can be true/false)
//let firstName;            // Undefined literal
//let selectedColor = null; // Null literal

// typeof tutorial in console

// REFERENCE TYPES 

// 1.Objects ---- {}


//let person = {
//  name: 'addy',
//  age: 1
//};
//console.log(person);


// Two types of properties - 1.Dot notation 2.Bracket notation '[]'

//let person = {
//  name: 'addy',
//  age: 1
//};
//person.name = 'JOhn';   // Dot notation

//person['name'] = 'MaRy'; // Bracket notation
//console.log(person.name);

// Array's tutorial

// let selectedColors = ['red','blue'];
// selectedColors[2]= 'green';
// console.log(selectedColors.length);

// Function's tutorial

// function greet(name,lastName) {
//    console.log('Hello world ' + name + '' + lastName);
//    }

//    greet('john','smith');
//    greet('tholdu','cena');

function square(number){
    return number * number;
}

console.log(square(2));