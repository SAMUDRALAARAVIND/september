const container = document.getElementById("container");
const images = document.getElementsByTagName("img");

/**
 *
 * For every image
 * 1. dragstart event => to set it's id in the dataTransfer.
 *
 * 2. dragover event => as every image is a dropzone we need to prevent the default behaviour in this dragover event to make it act like a drop container.
 *
 * 3. drop => to execute the swapping logic.
 */

function onDragStart(event) {
  // event.target represents the dragged element
  event.dataTransfer.setData("sourceId", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  // event.target => on which we drop some element
  const sourceId = event.dataTransfer.getData("sourceId");
  const sourceElement = document.getElementById(sourceId);
  const destElement = event.target;

  const sourceNextElement = sourceElement.nextElementSibling;
  const destNextElement = destElement.nextElementSibling;

  // adding destElement in front of sourceNextElement
  container.insertBefore(destElement, sourceNextElement);

  // adding sourceElement in front of destNextElement
  container.insertBefore(sourceElement, destNextElement);
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstart", onDragStart);
  images[i].addEventListener("dragover", onDragOver);
  images[i].addEventListener("drop", onDrop);
}
