let likecounter = 1;
var counter = 1;
function likecount(){
    var x = document.querySelector("#id1");
    likecounter++;
    x.innerHTML = "Like " + likecounter;
}

function commentBox(){
    let newElement = document.createElement("div");
   
    newElement.textContent = 'comment'+ counter;
    counter++;
    let commentBox=document.querySelector('#commentBox');
    commentBox.appendChild(newElement);
}