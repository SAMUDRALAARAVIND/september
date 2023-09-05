/*
    1. basics of js 
    2. functions 
    3. DOM
    4. async js
*/

// let x = 20,
//   y = "sjks",
//   z = true;

// for arithmatic operators the operands should be numbers
// console.log(z + y); // "true" + "sjks" = truesjks
// x = number, y = string
// String(x) + y  = "20" + "sjks" = 20sjks

// + operator has two behaviours
// if one operand is a string + will be concatenation operator
// else it will be an arithmatic operator

//

// x = number, z = boolean;
//  20 + Number(true) = 20 + 1 = 21

// ==, ===, !==, != , >= , <= , > , <

// let x = 22;

// if (x % 2 == 0) {
//   // 1 == 0
//   console.log("even");
// } else {
//   console.log("odd");
// }
// BODMAS
// console.log("abc" + 3 - 2); // -1 => "-1"
// "abc" + "-1" = abc-1

// "abc" + 3 - 2 => "abc3" - 2
// "abc3" - 2 = Number("abc3") - 2
// NaN - 2 = NaN

// 10, 20, -3, 4, 2.3, 4.555, NaN

// console.log("23" - 4);

// Number("23") - 4 = 23 - 4 = 19

// let x = 20;

// if (x % 2 == 0) {
//   // 20 % 2 = 0 == 0
//   console.log("If");
// } else if (true) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

// loops

// for (intialisation; condition; updation) {
//   // block of code
// }

// let x = 0;

// for (x = 1; x < 3; x++) {
//   console.log(x);
// }
// console.log(x); // 3

// while (x < 3) {
//   console.log(x);
//   x++;
// }
// console.log(x); // 3

// let x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x < 2); // 2 < 2
// x = 2
// 0 , 1

// let arr = [1, 2, 99];
// 1. by default arrays in js are dynamic in nature.
// 2. By default arrays in js are heterogenious
// console.log(arr[-9]);
// not defined
// undefined

// console.log(arr.length);

// for (let index = 0; index < 4; index++) {
//   console.log(arr[index]);
// }

// console.log(arr.length); // 4
// arr.push(99, 14);
// console.log(arr.length, arr); // 5
// arr.unshift(8, 6, 10);
// console.log(arr.length, arr); // 6

// let e = arr.pop();
// console.log(arr);
// console.log(e);

// let e = arr.shift();
// console.log(arr, e);

// let arr = [1, 2, 5, 8, 9];
// [1, 2, 8, 9]
// [1, 2, 13, 14, 8, 9]
// let elements = arr.splice(1, 3);
// console.log(elements);
// console.log(arr);

// splice(startIndex, deleteCount, elementsTobeAdded)
// let deletedElements = arr.splice(2, 1, 13, 14);
// console.log(deletedElements); // [5]
// console.log(arr);

// arr.splice(2, 1, 13, 14);
// console.log(arr); // [1, 2, 8, 9]
// arr.splice(2, 0, 13, 14);
// console.log(arr);

// let arr = [3, 5, 8, 4, 9, 7];
// if (arr.length >= 3) {
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//       console.log(arr[i], "is the peak element");
//       break;
//     }
//   }
// } else {
//   console.log("array length should be atleast 3");
// }

// Reverse an array
let arr = [3, 7, 2, 9, 8];

let i = 0,
  j = arr.length - 1;

// for (; i < j; ) {
//   let temp = arr[j];
//   arr[j] = arr[i];
//   arr[i] = temp;

//   i++;
//   j--;
// }

while (i < j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  console.log(i);
  i++;
  j--;
}
console.log(arr);
