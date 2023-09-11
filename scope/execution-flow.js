/**
 * 1. Execution flow of JS code .
 * 2. Scope & Scope chain (Block scope and context scope)
 * 3. Hoisting
 */

// function callme() {
//     // code
// }

// let x = function() {
//     // code
// }

// let y = () => {
//     // code
// }

// let a = 20;
// var b = 200;
// let callme = () => {
//   let b = 100;
//   console.log(b, a); // 100, 20
// };

// callme();
// console.log(a + b); // 200

/**
 * 1. Every context will go through 2 phases.
 *  i. Creation Phase
 *  ii. Execution Phase
 *
 * i) IN creation phase variables will be intialised with some value .
 *     let , var, const , function
 *
 *     let or const => undefined , kept inside the Temporal Dead Zone ( TDZ )
 *     var => undefined => will be added inside the TDZ
 *     function => actual value./
 *
 *
 * ii) In execution phase code be executed line by line.
 */

// console.log(a); // undefined
// var a = 100;
// console.log(a); // 100

// console.log(a); // Error: Cannot access `a` before it's intialisation.
// let a = 100;
// console.log(a);

// let f = () => {
//   console.log(a);
//   var a = 200;
//   console.log(a);
//   console.log(b);
// };
// f();
// let b = 200;
// console.log("something");

// ES6 in 2015
// let ,const =>  before ES6 var, function

// let f1 = () => {
//   console.log(a); // 900
//   let f2 = () => {
//     console.log(a); // 900
//   };
//   f2();
// };

// // let a = 900; // a = 900

// f1();
// let b = 900;

/*
 1. Creation Phase of Global context: 
    f1 = undefined (TDZ)
    a = undefined (TDZ)

 2. Execution phase of global context
    f1 = () (No TDZ)
    a = 900 (No TDZ)
 */

// console.log(age); // age is not defined.

/**
 *
 * Scope
 *
 * 1. Block Scope (let, const )
 *          Block means {}
 * 2. Context scope ( var, function )
 */

// let b = 900;
// {
//   let a = 200;
//   console.log(a, b);
// }
// console.log(a);

// console.log(x);
// if (false) {
//   console.log(x);
//   var x = 10;
//   let b = 200;
//   console.log(x + b);
// }
// console.log(x);
// console.log(b);

// console.log(x);
// let f = () => {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// };

// f();
// console.log(x);

// var x = 180; // 1000

// function callme() {
//   var x = 500;
//   console.log(x); // 500
//   if (false) {
//     let a = 200;
//     var x = 1000; // x = 1000
//     console.log(a + x); // 1200
//   }
//   console.log(x); //  500
// }
// callme();

// x = 200; // var x = 200 ;
// console.log(x); // undefined
// console.log(x); // 200
