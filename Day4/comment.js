var counter = 1;
var likeCounter = 1;

/**
 * Create a Comment ELment
 * and
 * Append to the Comment Box
 *
 */
function commentHere() {
    let UserComment  = document.querySelector("#inputId1").value;
  // newelement initialization
  let newElement = document.createElement("div");
  newElement.textContent = UserComment;

  // styling
  newElement.style.background = "tomato";
  newElement.style.margin = "4px";

  // appending to the parent box
  let commentBox = document.querySelector("#commentBox");
  //commentBox.appendChild(newElement);
  commentBox.insertBefore(newElement,commentBox.firstChild);

  counter++;
  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
}