/**
 * CRUD
 *
 * 1. Create => adding new elements into the dom tree maybe based on user's interaction.
 *
 * 2. Read => Querying the DOM tree for html element objects.
 *
 * 3. Update => changing the properties of an existing element in the DOM tree.
 *
 * 4. Delete => Deleting a node (HTML element) from the DOM tree.
 */

//1.  let element = document.getElementById("test");
// element = #500

// 2.

// let elements = document.getElementsByClassName("abc")
// elements = [ {para} , {div}, {bold} ]
// elements = [] // when it doesn't find any node with the className provided.

// let elements = document.getElementsByTagName("div");
// elements = [{div}, {div}]
// elements = [] ;

// let boldElement = document.getElementById("sdjjedje");
// console.log(boldElement); // null

// console.log(boldElement);

// // boldElement.style.color = "red";

// console.log(boldElement.innerText);

// console.log(boldElement.tagName);

// let elements = document.getElementsByClassName("child1");

// console.log(elements.length);
// let firstElement = elements[0];
// let secondElement = elements[1];
// console.log(firstElement);
// console.log(firstElement.innerText);

// console.log(secondElement);
// console.log(secondElement.innerText.length);
// console.log(elements.length); // 2

// let elements = document.getElementsByTagName("div");

// console.log(elements[1].className); // 2

// let firstElement = elements[0];

// elements[1].className = "btn";
// console.log(firstElement.id);

/**
 *
 * CSS Selectors
 * * (universal selector)
 *
 * #id (id selector)
 *
 * .class (class selector)
 *
 * div (tag selector)
 *
 *
 * Combinators ( space , + , ~, > )
 *
 * div > p (selects p as children of any div element)
 *
 * div + p ( selects immediate next `p` of any `div` element)
 *
 */

// let element = document.querySelector("#test + span");
// let element = document.querySelector("section > p > span");
// console.log(element);

// let elements = document.querySelectorAll(".child");
// console.log(elements);
// elements.className = "test"

// for (let i = 0; i < elements.length; i++) {
//   if (elements[i].tagName == "DIV") {
//     elements[i].className = "btn";
//   }
// }
