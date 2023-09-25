// we manage the options selection

const activeCellElement = document.getElementById("active-cell");

// activeCell defines which cell is selected / active.
// intially it will null indicating that no cell is selected.
let activeCell = null;

const intialOptionsState = {
  fontFamily: "",
  isBoldSelected: false,
  isItalicSelected: false,
  isUnderLineSelected: false,
  textAlign: "left", // it can have 'left' | 'center' | 'right'
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};

// below function will be triggered whenever cell is focused.
function onCellFocus(e) {
  // whenever a cell is focused change the activeCell value to be the id of cell.
  activeCell = e.target.id;
  activeCellElement.innerText = activeCell;
}
