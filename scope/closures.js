// var add = function (a, b) {
//   return a + b;
// };

// var subtract = function (a, b) {
//   return a - b;
// };

// var op = function (func) {
//     // func => subtract invoking func is nothing but invoking subtract
//   var x = 2;
//   var y = 3;
//   return func(x, y); // -1 : subtract(2, 3)
// };

// console.log(op(subtract)); // console.log( -1 )

// // op function => higher order function
// // subtract => callback functions

// function a() {
//   console.log("Inside a"); // Inside a

//   function b() {
//     console.log("Inside b"); // Inside b
//   }
//   return b;
// }

// let x = a(); // x = b
// x(); // x() = b();

// str = "abca" ;
//        i
// function firstNonRepeatedChar(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] !== undefined) {
//       // obj["a"]
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   // {"a": 2, "b" : 1, "c" : 1}

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] == 1) { // i = 1 , str[1] = "b" , obj["b"] = 1
//       return str[i];
//     }
//   }

//   return null;
// }

// let obj = {} ;

// console.log(obj["x"]) // undefined
// obj["abc"] = 1 ; // { "abc" : 1}

/**
 * Closures :
 *
 *
 *
 */
// let a = 100;
// function parent() {
//   //   let a = 20;

//   let child = () => {
//     // parent of child func is `parent` function
//     console.log(a); // 20
//   };

//   return child;
// }

// let x = parent(); // typeof x = function

// x();

/*

Primitive(simple) and Non primitive(complex) data types

*/

// let a = 20 ; // 4bytes\

// let arr = [ 20, 30, 40 ]

// let callme = (a, b) => {
//     console.log(a , b)
//     a = 19 ;
//     b[0] = 12 ;
// }

// let x = 20, y = [5, 1, 10] ;
// callme(x, y);
// console.log(x, y)

// let a = 20 ;
// function callme(a) {

//     let child = () => {
//         console.log(a); // 30
//     }
//     return child ;
// }

// let x = callme() ;
// x(); // child ()

// Destructuring and Spread operator

// let arr = [90, 10, 200] ;

// let x = arr[1] ;

// let [,y] = [4, 5, 20];

// console.log(y);

// let {
//   address: { pincode },
//   age,
// } = {
//   name: "aravind",
//   age: 22,
//   address: {
//     city: "Warangal",
//     pincode: 383902,
//   },
// };

// console.log(pincode);

// let [, , [, a]] = [10, 20, [18, 99]];
// console.log(a);

// function arithmatic(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// let [addition, , mul] = arithmatic(10, 20);
// console.log(addition, mul);

//

// Spread operator (...), arrays , Objects, string

// let arr = [90, 20, 30];
// // ...[90, 20, 30] = 90, 20, 30
// let arr2 = [1, 2, ...[90, 20, 30], 189];

// console.log(arr2);

// [1, 2, ...[90, 20, 30] , 189] => [1, 2, 90, 20, 30 ,189]

// function callme(a, b, c) {
//   console.log(a, b, c);
// }
// callme( 10, 20, 30 )
// ...[10, 20, 30] = 10, 20, 30
// callme([10, 20, 30]);

// let user = {
//   name: "Aravind",
//   email: "aravind@gmail.com",
// };
// // ...{name: "Aravind",email: "aravind@gmail.com"}
// // name: "Aravind", email: "aravind@gmail.com"
// let updatedUser = {
//   phoneNumber: 389202020,
//   gender: "male",
//   email: user.email
// };

// console.log(updatedUser);

function callme(x) {
  // x = { name: 'aravind', age: 22 }
  let { name, age, abc } = { name: "aravind", age: 22 };
  console.log(name, age, abc); // 'aravind'
}

callme({ name: "aravind", age: 22 });
