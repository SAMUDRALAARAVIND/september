function cutContent() {
  // cut means copy and remove the innerText
  copyContent();
  if (activeCell) {
    activeCell.innerText = "";
  }
}

function copyContent() {
  // just copy the content to clipboard
  if (activeCell) {
    const range = document.createRange();
    range.selectNodeContents(activeCell);

    const selection = window.getSelection();
    // this returns an object which holds the info about the selected content on the web page
    selection.removeAllRanges(); // remove if any selected text is present
    selection.addRange(range); // adding the desired node (activeCell) into the selected range
    console.log(selection.toString()); // we can see the copied content on console.
    document.execCommand("copy");
    selection.removeAllRanges(); // unselect the copied content
  }
}

function pasteContent() {
  // paste the content on the selected cell
  if (activeCell) {
    // using promise
    navigator.clipboard.readText().then((pastedText) => {
      activeCell.innerText = pastedText;
    });
  }
}

// handling f(x) Arithmatic expressions
// eval(jscode) => returns the output of js code

// let x = eval("2 + 3 * 4") => x will get 14

const fx = document.getElementById("fx");
fx.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    const value = fx.value;
    let result = eval(value);
    activeCell && (activeCell.innerText = result);
  }
});
