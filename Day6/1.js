function mouseOver(){
     console.log("I have succesfully called !!")
    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "Pink";
    id2Element.style.color = "Navy";
    id2Element.innerHTML = "Hello Friends!!";
}
function mouseOut(){
    let id2Element = document.querySelector("#id2");
    id2Element.style.background = "black";
    id2Element.style.color = "white";
}