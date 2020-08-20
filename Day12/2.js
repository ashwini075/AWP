let callAjax = function () {
    let xhr = new XMLHttpRequest();
   
    xhr.open('GET',"https://reqres.in/api/users?page=2");
    xhr.onload = () =>{
        console.log(xhr.responseText);
    }

    xhr.send();
};

