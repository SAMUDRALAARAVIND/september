/**
 *
 * this keyword
 *
 * 1. this keyword always refers to some heap memory address (object).
 *
 * we can use `this` keyword either in global line or in local line
 *
 *
 * when we use `this` keyword in global it points to `window` object.
 *
 *
 * when `this` keyword used inside a function it will point to the object whichever invokes that function .
 */

// console.log(window);

/*
let obj = {
  alert: 100,
  printName: () => {
    console.log("aravind");
  },
};

console.log(obj.alert); // 100

obj["printName"]();

console.log(typeof obj.printName); // number
*/

// console.log(window.alert);

// window.alert("Hi Aravind");

// console.log(typeof window.prompt);

// let x = window.prompt();
// console.log(x);

// console.log(window.innerHeight);

// console.log(this == window);

// console.log(this); // global => window

/*
var aa = 20; // will be added to window object
let aaa = 30; // will not be added to window object
const aaaa = 400; // will not be added to window object
function aaaaa() { // will be added to window object
  console.log(this);
}

console.log(window);
*/

/**
 * Wh
 */

// function callme() {
//   // will be a property of window
//   // this = points to the object which invokes it
//   console.log(this); // this => window
// }

// this.callme(); // this = window => window.callme()

// let obj = {
//   a: 10,
//   b: 20,
//   callme: function () {
//     // this = will points to the object whichever invokes this function
//     console.log(this); // this => obj
//   },
// };

// obj.callme(); // obj is invoking the function callme
