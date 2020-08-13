function compute(){

    var x = Number(document.getElementById('num1').value);
    var y = Number(document.getElementById('num2').value);

    var z = 0;
    if(document.getElementById('add')){
        z = x + y;
    }
     else if(document.getElementById('sub')){
        z = x - y;
    }
  
 document.getElementById('ans').value=z;
}