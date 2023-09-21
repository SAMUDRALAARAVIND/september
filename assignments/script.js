// document.addEventListener("DOMContentLoaded", () => {
//   let levelElement = document.getElementById("level");
//   console.log(levelElement);
//   let level = 1;

//   while (true) {
//     if (levelElement.tagName === "HTML") {
//       break;
//     }
//     console.log(levelElement);
//     levelElement = levelElement.parentNode;
//     level++;
//   }

//   alert(`The level of the element is: ${level}`);
// });

// infinite scroll

// const scrollContainer = document.getElementById("container");
// console.log("scrollheight", scrollContainer.scrollHeight);
// console.log("containerHeight", scrollContainer.clientHeight);

/**
 * maximum scrollable height = totalScrollHeight - containerHeight => we can acheive this when we scroll to the end.
 *
 * threshold how much more we can scroll to get to last.
 *
 * threshold = maximumScrollableheight - scrolledHeight till the instance.
 *
 */
/*

scrollContainer.addEventListener("scroll", () => {
  const scrollTop = scrollContainer.scrollTop;
  const containerHeight = scrollContainer.clientHeight;
  const scrollHeight = scrollContainer.scrollHeight;
  const maximumScrollableheight = scrollHeight - containerHeight;

  const threshold = Math.abs(scrollTop - maximumScrollableheight);

  if (threshold <= 5) {
    const div = document.createElement("div");
    div.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat
    rem perferendis culpa eos totam doloremque reiciendis est? Hic quam
    accusantium quo fugit deleniti ad ullam, in perspiciatis quidem ipsum
    dolorum suscipit a, reiciendis, enim quibusdam eaque rerum libero at!
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut
    quod necessitatibus iste iusto? Distinctio, est impedit explicabo,`;
    div.style.border = "2px solid blue";
    scrollContainer.appendChild(div);
  }
});
*/

// Solution

const scrollContainer = document.getElementById("infi-list");
let i = 0;
function addOneItem() {
  const li = document.createElement("li");
  li.innerText = `Item ${++i}`;
  scrollContainer.appendChild(li);
}

for (let i = 0; i < 10; i++) {
  addOneItem();
}

scrollContainer.addEventListener("scroll", () => {
  const maxScrollHeight =
    scrollContainer.scrollHeight - scrollContainer.clientHeight;
  let currentScrollTop = scrollContainer.scrollTop;

  let threshold = Math.abs(maxScrollHeight - currentScrollTop);

  if (threshold <= 5) {
    for (let i = 0; i < 2; i++) {
      addOneItem();
    }
  }
});
