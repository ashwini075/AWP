


let btn = document.querySelector("#getdata");
console.log(btn);
window.addEventListener("click", function() {

    console.log("ON.LOAD");
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://reqres.in/api/users?page=2',true);

    xhr.send();

    
    xhr.onload = () => 
    {

        console.log(xhr.responseText);

        //let rjson = JSON.parse(xhr.responseText);

    }


     /*
     xhr.onreadystatechange = () => {
    // on ready state 4 :: when operation comples with server
    if (xhr.readyState === 4) {
      // server response
      console.log(xhr.responseText);

      // responser server is in string
      let sjson = JSON.parse(xhr.responseText);
      // data.is array or list from server
      console.log(sjson.data);

      // lets use this list and plot our dom by calling dom logic here
      //domlogicHere(sjson.data);
    }
  };
  */

});