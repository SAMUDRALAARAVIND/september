/**
 * Plan
 *
 * dynamic creation and deletion of elements
 * custom attributes
 * DOM tree traversal ( children, parentNode, nextElementSibling, previousElementSibling)
 *
 * input values handling ,
 *
 * Inline events onclick, ondblclick etc
 * using element object element.onclick = f(eventObject)
 * using addEventListener
 * removing event listeners
 *
 * event object
 *
 *  form submisssion, preventDefault
 *
 * Event bubbling and Event delegation
 */

// Creation of a node / html element

// const para = document.querySelector("#container > p");

// function createItalicElement() {
//   // what we want to create ?
//   // italic element with some properties.

//   // where we want to add this element ?
//   // add as a last child of `p` element
//   let x = document.createElement("i");

//   x.innerText = "Shubam";
//   x.className = "newtext"; // xternal css
//   x.style.border = "2px solid yellow";

//   para.appendChild(x);
// }

// var container = document.getElementById("container");

// function addSubtree() {
// what we want to create ?
/**
        <div>
            <span>text1</span>
            <strong>text2</strong>
        </div>
     */

//   let div = document.createElement("div");

//   let span = document.createElement("span");
//   span.innerText = "text1";
//   span.id = "vimal";

//   let strong = document.createElement("strong");
//   strong.innerText = "text2";

//   //   let image = document.createElement("img");
//   //   image.src = "https://picsum.photos/200/300";
//   //   image.alt = "Image not found";

//   /* Linking  */

//   // div.appendChild(span);
//   // div.appendChild(strong);
//   div.append(span, strong);

// //   div.style.backgroundImage = "url(https://picsum.photos/200/300)";

//   // where we want to add this element ?
//   /**
//    * add it inside div#container
//    */

//   container.appendChild(div);
// }

// Delete node / html element

// function deleteElement() {
//   // what to delete ?
//   // bold element
//   let elementTobeDeleted = document.querySelector("#container > p > b");
//   elementTobeDeleted.remove();
// }
