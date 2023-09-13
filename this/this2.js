/*
    1. this => global => window
    2. this => locally => points to an object who invokes it.


    var , function declared variables (in global context) will become the properties of window object by default.

    Inside function this keyword has no meaning . which means `this` keyword inside an arrow function will be treated as just a variable like all other variable.

    When a regular function is called without any object infront of it , `this` keyword inside such a function will always be global object.
*/

// let x = {
//   name: "aravind",
//   gender: "male",
//   callme: function () {
//     // this = x
//     console.log(this);
//   },
//   address: {
//     city: "Waranagal",
//     callme1: function () {
//       // this = address
//       console.log(this);
//     },
//   },
// };

// x.address.callme1(); // address object is invoking callme1

// x.callme(); // x is invoking callme

// var aaa = 200;

// function aaa() {}

// console.log(window);

// console.log(aaa, window.aaa);

// function callme() {
//   // this = window
//   console.log(this);
// }
// console.log(window.callme);
// callme(); // window object is invoking callme/

/*

let a = 200;
// console.log(this) // window
let func = () => {
  console.log(a);
  console.log(this); // window
  // `this` variable is not present in this context it gets from global context, in the global context `this` means `window`.
  // treat `this` as just like other variables.
};

func();

*/
// console.log(this === window)
// let obj = {
//   x: 100,
//   y: 200,
//   callme1: () => {
//     console.log(this);
//   },
//   callme2: function () {
//     // this = obj
//     console.log(this); // obj
//   },
// };

// // obj.callme2(); // obj is invoking callme2 , callme2 is a regular function.

// obj.callme1(); // obj is invoking callme1, callme1 is an arrow function.

// let obj = {
//   x: 10,
//   y: 20,
//   callme: function () {
//     console.log(this); // this => obj

//     let f = () => {
//       console.log(this); // this = obj
//       //  treat `this` as a variable
//     };
//     // parent of function f, callme
//     f();
//   },
// };
// obj.callme();

// let obj = {
//   x: 10,
//   y: 20,
//   callme: function () {
//     console.log(this); // this => obj
//     let f = function () {
//       console.log(this); // window
//     };
//     f(); // no one invokes the function f and f is also not an arrow function
//   },
// };

// obj.callme();

// class Student {
//   constructor(n, a) {
//     console.log(this); // #300 = {}
//     this.name = n;
//     this.age = a;
//     console.log(this);
//   }
// }

// let student1 = new Student("Rockey", 22);// #300
// let studnet2 = new Student("abc", 10); // #500

// console.log(student1); // #300 => { name: "Rockey", age: 22}

// student1.name = "Rockey";
// student1.age = 22;
// student1.email = "rockeybhai@gmail.com";

// console.log(student1);
