// const dragElement = document.getElementById("drag");
// const dropElement = document.getElementById("drop");

// when user starts dragging the element.
// dragElement.addEventListener("dragstart", () => {
//   console.log("started dragging");
// });

// when user stops dragging
// dragElement.addEventListener("dragend", () => {
//   console.log("stopped dragging");
// });

// when any dragged element enters into `dropElement` then the below event will be triggered
// dropElement.addEventListener("dragenter", () => {
//   console.log("drag enter event");
// });

// when a tragged element is active on the `dropElement` then the below will be triggered.
// let i = 0;
// dropElement.addEventListener("dragover", (event) => {
//   // it will ensure to trigger the drop event
//   event.preventDefault();
//   //   console.log("drag over", ++i);
// });

// dropElement.addEventListener("dragleave", () => {
//   console.log("drag leave");
// });

// dropElement.addEventListener("drop", () => {
//   console.log("drop event");
// });

// Dropping the item in the destination

/*

Data transfer from dragstart event to drop event
const blueElement = document.getElementById("drag");
const drag1 = document.getElementById("drag1");

const grayElement = document.getElementById("drop");

blueElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("id", blueElement.id);
});

drag1.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("id", drag1.id);
});

grayElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});

grayElement.addEventListener("drop", (event) => {
  const droppedElementId = event.dataTransfer.getData("id");
  console.log(droppedElementId);
  const element = document.getElementById(droppedElementId); //
  element.draggable = false;
  grayElement.appendChild(element);
  //   console.log(event.dataTransfer.getData("age"));
  //   console.log(event.dataTransfer.getData("name"));
});

*/

const levelElement = document.getElementById("level");
let level = 1;

while (true) {
  if ((levelElement.tagName = "HTML")) {
    break;
  }
  levelElement = levelElement.parentNode;
  level++;
}

alert(`The level of the element is: ${level}`);
