function ontext(){
   
    console.log('called succesfully');
    var id1Element = document.querySelector('#id1');
    id1Element.style.background = "pink";
    id1Element.style.color = "black";
    id1Element.innerHTML="Welcome to CDAC";
    

}

function outtext(){
    console.log('called succesfully');
    var id1Element= document.querySelector("#id1");
    id1Element.style.background = "black";
    id1Element.style.color = "tomato";
    id1Element.innerHTML="Hello World";

}