// let arr = [19, 5, 29, 2];
// [2, 5, 19, 29]

// ["19", "5", "9", "2"]
// "19", "2", "29", "5"

// by default the sort function sorts the elements in the lexicographical order ( numbers will be treated as string )

// sort is a higher order function since it takes another function as argument .

/**
 *
 * Compare function
 * (a, b) => +ve || -ve || 0
 *
 * when compare function returns -ve (`a` will come before `b`)
 *
 * when compare function returns +ve (`b` will come before `a` )
 *
 * when compare function returns 0 ( no change in the order of `a` and `b` in the final output )
 */

// let arr = [19, 5, 29, 2];

// sort in increasing order.
// arr.sort((a, b) => a - b);
// console.log(arr);

// sort in decreasing order
// arr.sort((a, b) => b - a);
// console.log(arr);

/*
HomeWork: 
 Problem:
    given an integer array find the highest frequent element in the array without using the extra space.
*/

// let arr = ["abc", "abmx", "mno", "bcd"];

// // by default sorts in the increasing order.
// arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
//   return 0;
// });
// // ["mno", "bcd", "abmx", "abc"]
// // "abc", "abmx", "bcd", "mno"
// console.log(arr);

// Objects

// Not readable
let user1 = [22, "Yash Sharma", "Male"];
//            0     1              2
// Readable
let user2 = {
  age: 22, // "age"
  name: "Yash Sharma",
  gender: "Male",
};

// extract name value
// console.log(user1[1], user2["name"], user2.name);

// extract gender from both
// console.log(user1[2], user2["gender"], user2.gender);

// extract the age from both variables
// console.log(user1[0], user2["age"], user2.age);

// console.log(user1[100], user2["dfejfnekf"], user2.ejekkdkd);

// 1. adding new element
// Arrays are ordered
// user1.push("enke");
// console.log(user1);

// user2.email = "aravind@gmail.com";
// user2["email"] = "aravind@gmail.com";
// console.log(user2);

// 2. Update
// console.log(user1);
// user1[1] = "Nayeem";
// console.log(user1);

// user2["name"] = "nayeem";
// console.log(user2);

// 3. Delete

// delete gender from user1

// user1.pop();
// console.log(user1);

// delete user2.gender;
// console.log(user2);

// delete user2;
// console.log(user2);

// user2["email"] = "dskddk" ;

// console.log(user2["email"])

// Iteration on Arrays and Objects
// let arr = [4, 9, 1, 9];
//         0  1  2  3

// for in loop
// for of loop

// for (let i in arr) {
// in operator iterates on the keys
//   console.log(i, arr[i]);
// }

// for (let i of arr) {
//   console.log(i);
// }

// let obj = {
//   name: "aravind",
//   age: 22,
//   email: "aravind@gmail.com",
// };

// let x = Object.keys(obj);
// // x = ["name", "age", "email"]

// for (let i = 0; i < x.length; i++) {
//   // x[0] = "name" , x[1] = "age", x[2] = "email"
//   console.log(x[i], obj[x[i]]);
// }

// let obj = {
//   name: "skks",
//   "x-y": 23,
// };
// console.log(obj["x-y"]);

// for (let i in obj) {
//   console.log(i, obj[i]);
// }
