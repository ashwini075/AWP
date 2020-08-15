let counter = 1;
function increment(){
    var x = document.querySelector("#id1");
    counter = counter + 1;
    x.innerHTML = counter;
}
function decrement(){
    var x=document.querySelector("#id1");
    counter = counter - 1;
    x.innerHTML = counter;
}