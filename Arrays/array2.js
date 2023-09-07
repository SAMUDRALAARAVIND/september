/*
 1. functions (little bit)
 2. higher order functions and callback functions 
 3. array methods  ( higher order functions in array methods  )
*/

// let arr = [3, 4, 1, 9];
//         0  1  2  3
//        -4  -3  -2 -1

// arr.push(99, 34, 23);
// arr.unshift(99, 77, 44);
// [99, 77, 44, 3, 4, 1, 9]

// console.log(arr);

// let removedElement = arr.pop();
// console.log(removedElement);

// let subArray = arr.slice(3, 1);
// console.log(subArray, arr);
// console.log(arr); //
// let deletedElements = arr.splice(1, 2);
// console.log(arr, deletedElements);

// Find the second smallest element in an array ?

// let arr = [3, 10, 9, 12, 18, 5];
// //                i=2

// let a = arr[0],
//   b = arr[1];

// for (let i = 2; i < arr.length; i++) {
//   let currentMax = a > b ? a : b; //3
//   let currentMin = a < b ? a : b; //

//   if (currentMax > arr[i]) {
//     a = currentMin; // a = 3
//     b = arr[i]; // b = 9
//   }
// }

// console.log(a > b ? a : b);

// Find the maximum frequency of an element in a sorted array

// let arr = [2, 2, 3, 5, 5, 5];
//                  i=3
//                        j=5
// max = 3,

// let i = 0,
//   j = 0,
//   max = 1,
//   maxElement = arr[0];

// while (j < arr.length) {
//   if (arr[j] != arr[i]) {
//     i = j;
//     j++;
//     continue;
//   }
//   let currentMaxLength = j - i + 1;

//   if (max < currentMaxLength) {
//     max = currentMaxLength;
//     maxElement = arr[i];
//   }
//   j++;
// }

// console.log(max, maxElement);

// console.log("hello" , "Subham");

// console.log("hello" , "Aravind");

// console.log("hello", "rohit")

// function printHello(name) {
//   console.log("hello", name);
// }

// printHello("Rohith"); // invocation of function
// printHello([10, 20, 40]);

// console.log("hello", true);

/*
    1. always start a variable name with alpha, _, $
    2. variable name should always contain alpha, _, $, numeric
*/
// function $abc() {
//   console.log("Inside");
// }
// $abc();

// let $abc ;

// let f = function (a, b, c) {
//   // a = 1, b = 4, c
//   console.log(a, b, c); // 1 + 4 + undefined = NaN
// };

// // console.log(typeof f); // number

// f(true, [9, 10], "aravind");

// callback function => A function passed as an argument to another function is called as callback function

// Higher order function => A function which takes or returns another function as a parameter

// function parent(a, b) { // a ,b => parameters
//   // a = true, b = x function
//   // parent is a higher order function as it takes another function into it.
//   console.log(typeof a, typeof b);
// }

// let x = function(){
//     console.log("inside x");
// }

// parent(true, x); // x is a callback function.
// true, x are arguments

// let a = function (m) {
//   // m = b = function () {}
//   console.log(typeof m);
// };

// let b = function () {};

// a(b);
// b = callback function
// a = higher order function

// let arr = [5, 1, 3];

// let f = function (element, index, list) {
//   console.log(element, index, list);
// };

// arr.forEach(f);

// let forEach = function (x) {
//   x(2, 3);
// };
// let f2 = function (a, b) {
//   console.log(a + b);
// };
// forEach(f2);

// let arr = [3, 4, 5, 6, 9, 12];
// //         0  1  2  3  4   5
// // 3 + 5 + 9 = 17

// let sum = 0;

// let f = function (element, index) {
//   if (index % 2 == 0) {
//     sum += element;
//   }
// };

// arr.forEach(f);

// console.log(sum);

// map, filter, reduce, sort
