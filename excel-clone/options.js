// we manage the options selection

const activeCellElement = document.getElementById("active-cell");
const textAlignElements = document.getElementsByClassName("text-align");

// activeCell defines which cell is selected / active.
// intially it will null indicating that no cell is selected.
let activeCell = null;

let activeOptionsState;

// below function will be triggered whenever cell is focused.
function onCellFocus(e) {
  // whenever a cell is focused change the activeCell value to be the id of cell.
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;
  // intialise the state of this cell.
  const computedStyle = getComputedStyle(activeCell);

  activeOptionsState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderLineSelected: computedStyle.textDecoration === "underline",
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
  };
}

function onClickBold(boldButton) {
  // this function will be triggered when user clicks on the Bold button.
  /**
   * 1. toggle `active-option` class for the button.
   * 2. get the selected cell.
   */
  boldButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isBoldSelected === false) {
      // make the text to bold
      activeCell.style.fontWeight = "600";
    } else {
      // make the text to normal
      activeCell.style.fontWeight = "400";
    }
    activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
  }
}

function onClickItalic(italicButton) {
  /**
   * 1. toggle the active-option class for the italic button.
   */
  italicButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isItalicSelected) {
      // the text already italic.
      activeCell.style.fontStyle = "normal";
    } else {
      activeCell.style.fontStyle = "italic";
    }
    activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
  }
}

function onClickUnderline(underlinedButton) {
  underlinedButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isUnderLineSelected) {
      // if the text is underlined => none
      activeCell.style.textDecoration = "none";
    } else {
      activeCell.style.textDecoration = "underline";
    }
    activeOptionsState.isUnderLineSelected =
      !activeOptionsState.isUnderLineSelected;
  }
}

function highlightTextAlignButtons(textAlignValue) {
  // textAlignValue === "left" => we have to highlight only left button
  // textAlignValue === "right" => we have to highlight only right button
  // textAlignValue === "center" => we have to highlight only center button
  for (let i = 0; i < textAlignElements.length; i++) {
    if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}

function onClickTextAlign(textAlignButton) {
  let selectedValue = textAlignButton.getAttribute("data-value");
  highlightTextAlignButtons(selectedValue);

  // change the text alignment.
  if (activeCell) {
    activeCell.style.textAlign = selectedValue;
    activeOptionsState.textAlign = selectedValue;
  }
}

function onChangeTextColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.color = selectedColor;
    activeOptionsState.color = selectedColor;
  }
}

function onChangeBackgroundColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColor;
    activeOptionsState.backgroundColor = selectedColor;
  }
}
