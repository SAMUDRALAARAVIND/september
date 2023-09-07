// function callme() {
//   console.log("some code");
// }

// let callme = function (a, b) {
//   // a = 10, b = 20
//   console.log(a, b); // 10 20
//   // return a + b; // 30
// };

// let x = callme(10, 20);

// console.log(x); // 89
// arrow function
// let sum = (a, b, c) => {
//   return a + b + c;
// };

// let sum = (a, b, c) => a + b + c;

// let y = sum(1, 3, 12);
// console.log(y);

// let arr = [4, 3, 1];
// //

// let f = (element, index, list) => {
//   // console.log(element, index, list);
//   // 4, 0, [4, 3, 1]
//   // 3, 1, [4, 3, 1]
//   // 1, 2, [4, 3, 1]
// };

// let r1 = arr.forEach(f);
// console.log(r1); // undefined

// let arr = [4, 9];
// //

// let x = (a, b, c) => {
//   // console.log(a, b, c);
//   // a = 4, b = 0, c = [4, 9]
//   // a = 9, b = 1, c = [4, 9]
//   //
//   return a - b;
// };
// let r = arr.forEach(x);
// console.log(r);
// let r = arr.map(x);
// console.log(r); // [ 4 , 8]

// x => callback function.
// map => higher order function.

// let arr = [4, 5];
// function myMap(x) {
//   for (let i = 0; i < arr.length; i++) {
//     x(arr[i], i, arr);
//     // i = 0 ; x(4, 0, [4, 5])
//     // i = 1 ; x(5, 1, [4, 5])
//   }
// }

// let f = (element, index, list) => {
//   // element = 4, index = 0, list = [4, 5]
//   // element = 5, index = 1, list = [4, 5]
//   console.log(element, index, list);
// };

// myMap(f); // f will be called for 2

// let arr = [5, 1, 10];
// (5, 0) => 5 * 0
// (1, 1) => 1 * 1
// (10,2) => 10 * 2

// [0, 1, 20]
// [5, 2, 12]
// [10, 10, 10]
// let result = arr.map((e, i) => 10);

// console.log(result);
//
//  [0, 1, 20]

// let arr = [5, 3, 2, 9];
// [2.5, 1.5, 1, 4.5]
// Generate another which should contain half of the each elements. Do not modify the original array.
// let ans = [];
// for (let i = 0; i < arr.length; i++) {
//   ans.push(arr[i] / 2);
// }
// console.log(ans);

// let halfArray = arr.map((element) => element / 2);
// console.log(halfArray);

// let arr = [5, 3, 6, 8, 11];
// // [6, 8]
// let result = arr.filter((element, index, list) => {
//   // console.log(element, index, list);
//   // console.log(index)
//   return element % 2 == 0; // 6 % 2 == 0
// });

// console.log(result); // [6, 8]

/*
1. forEach takes a callback and returns nothing.
   used for only iterating on the array .

2. map takes a callback function and returns another of same length.

3. filter takes a callback function and returns another  array of any length .

None of the above three methods manipulate the original array. 

*/

// let arr = [5, 4, 8];
// reduce takes two arguments one is a function another one is any value

// let f = function (prev, element, index) {
//   // prev = 0, e = 5
//   // prev = 5, e = 4
//   console.log(prev, element, index); // 19, 5, 0
//   return prev + element; //5 + 4 = 9
// };

// let result = arr.reduce(f, 0);
// console.log(result); // 9

// let arr = [5, 4, 8];
// //               i
// let f = (prev, e) => {
//   // prev = 9, e = 8
//   console.log(prev, e); //
//   return prev + e; // 9 + 8 = 17
// };

// let result = arr.reduce(f);

// console.log(result); // 17
