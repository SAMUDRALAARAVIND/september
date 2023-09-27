/**
 * Event bubbling
 * Event delgation
 * custom attributes
 */
// When we make an event on a HTML element, the same event will be propagated to all it'/s parent elements till the root element (<html>)

// const root = document.getElementById("root");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// root.addEventListener("click", () => {
//   console.log("root div element clicked");
// });

// parent.addEventListener("click", (event) => {
//   console.log("parent div element clicked", event);
// });

// child.addEventListener("click", (x) => {
//   console.log("child triggered");
//   x.stopPropagation();
// });

// Custom attributes

// const button = document.getElementById("btn");
// // console.log(button.id, button.className);
// console.log(button.getAttribute("data-name")); // aravind

// button.setAttribute("data-name", "samudrala aravind");

// console.log(button.getAttribute("data-name")); // samudrala aravind

// form submission

const form = document.getElementById("form"); // <form></form>

form.addEventListener("submit", (event) => {
  // form => #200, event.target = #200
  //   console.log(form === event.target);

  // to read the input elemnts reference(memory address) by using the form
  // event.target => form element
  console.log(event.target["username"], event.target.password);
  console.log(event.target.username.value, event.target.password.value);
  event.target.username.value = "900";
  event.preventDefault();
});
