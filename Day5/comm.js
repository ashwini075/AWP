var likecounter = 1;
var counter = 1;

function likecount(){
    let x = document.querySelector('#bt1');
    x.innerHTML = 'Like' + likecounter;
    likecounter++;
}

function commentBox(){
    let userComment = document.querySelector("#id1").value;
    const newElement = document.createElement("div");
    newElement.textContent = userComment;

    newElement.style.background="blue";
    newElement.style.color="yellow";
    newElement.style.margin = "4px";
    
    const commentBox=document.querySelector('#commentBox');
    commentBox.insertBefore(newElement,commentBox.firstChild);
    document.querySelector('#id1').value="";

}
