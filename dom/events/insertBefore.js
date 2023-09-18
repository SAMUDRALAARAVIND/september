/**
 * What we want insert and where ?
 * 
 * <p>
        <span>Lorem ipsum dolor sit amet.</span>
        <b>Bold text</b>
        <!-- insert here.. strong -->
        <i>Italic text</i>
      </p>

 */

function insertBeforeItalic() {
  const parentElement = document.querySelector("#container > p");
  const italicElement = document.querySelector("#container > p > i");

  const strong = document.createElement("strong");
  strong.innerText = "Nayeem Ahmed";

  // parentElement.appendChild(strong) strong will be added at the last.

  parentElement.insertBefore(strong, italicElement);
}
