function mouseOver(){
  var id2Element = document.querySelector(".beutify");
  id2Element.style.background = "yellow";
  id2Element.style.color = "black";
  id2Element.innerHTML = " Hello Ashu";

}
function mouseOut(){
    var id2Element = document.querySelector(".beutify");
    id2Element.style.background = "black";
    id2Element.style.color = "pink";
    id2Element.innerHTML = " Hello Ashu";
  
  }