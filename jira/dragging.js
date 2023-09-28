const containers = document.getElementsByClassName("container"); // []

// this object maintains the id of card and it's container whenever a card is started dragging.
const draggingItemDetails = {
  cardElement: null,
  containerId: "",
};

function onDragStart(e) {
  // this function will be triggered when we start dragging any card
  draggingItemDetails.cardElement = e.target;
  draggingItemDetails.containerId = e.target.parentNode.parentNode.id;
}

function onDrop(e) {
  // if we drop an element inside in-progress container => e.target => in-progress container
  //if we drop an element inside todo container => e.target => todo container
  //if we drop an element inside done container => e.target => done container
  //   console.log("dropped into", e.target.id);

  // user might drop inside another card , so ensure to drop inside the container only.
  // div.container

  const dropContainer = e.target.closest("div.container");

  if (dropContainer.id === draggingItemDetails.containerId) {
    alert("you can't the card in the same container");
    return;
  }

  dropContainer.appendChild(draggingItemDetails.cardElement);
}

for (let i = 0; i < containers.length; i++) {
  // for each container add dragover and drop event listeners
  containers[i].addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  containers[i].addEventListener("drop", onDrop);
}
