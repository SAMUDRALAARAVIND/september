// Handling button click
const createButtons = document.querySelectorAll("section > div > button");
function createTask(event) {
  // we need know which button is clicked !!!
  //   event.target => <button>Create Issue</button>
  const textInput = event.target.nextElementSibling; //
  textInput.className = "show";
}

// Adding event listeners for create buttons
for (let i = 0; i < createButtons.length; i++) {
  // createButtons[i]  is a <button></button>
  createButtons[i].addEventListener("click", createTask);
}

// Handling Input
const inputElements = document.querySelectorAll("section > div > input");

function deleteTask(deleteButton) {
  // this one will be executed when user clicks on the delete button of a task card.
  const parentCard = deleteButton.parentNode;
  parentCard.remove();
}

// this function will listen to keyup event for the input elements
// write the logic to create the card in the corresponding section.
function handleInput(event) {
  // event.keyCode = 13 represents that user has clicked on Enter key
  const inputElement = event.target; // <input />
  if (event.keyCode === 13) {
    let taskName = inputElement.value;

    const card = document.createElement("div");
    card.className = "card";
    card.draggable = "true";
    card.innerHTML = `
        <b>${taskName}</b>
        <button onclick="deleteTask(this)">delete</button>
    `;

    // add the dragstart event for evry created card.
    card.addEventListener("dragstart", onDragStart);

    // the above card should go inside the <div class="cards"></div>
    const cardsContainer = inputElement.nextElementSibling;
    cardsContainer.appendChild(card);

    // emptying the input
    inputElement.value = "";
    inputElement.className = "hide";
  }
}

for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("keyup", handleInput);
}
