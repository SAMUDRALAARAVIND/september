// let allClasses = {
//     module1: [ ],
//     module2: [ ],
//     module3: [ ]
// }

// function getClassesOfModule(moduleName){
//     // returns an array of classes
//     return allClasses[moduleName] ; // allClasses["module1"]
// }

// let arr = getClassesOfModule("module1")
// console.log(arr)

// let user = {
//     name: "Aravind",
//     age: 22,
//     address: {
//         pincode: 383902,
//         city: "Warangal"
//     },
//     education : {
//         degree: "BTech",
//         gpa: "10",
//         branch: "ECE"
//     }
// }

// user.address => #500
// user.address.city

// user.education => #800
// user.education.degree // BTech

// let htmlDocument = {
//   tagName: "html",
//   lang: "en",
//   children: [
//     {
//       tagName: "head",
//     },
//     {
//       tagName: "body",
//       children: [
//         {
//           tagName: "div",
//           id: "container",
//           children: [
//             {
//               tagName: "p",
//               className: "para",
//               children: [],
//             },
//           ],
//         },
//         {},
//       ],
//     },
//   ],
// };

// console.log(htmlDocument.children[1].children[0].id);

// getElementById function takes a single argument which is the id of the desired html element.
let x = window.document.getElementById("xyz");
// x will point to heap memory reference of input html element whose id is `xyz`
console.log(x);

console.log(x.id); //
