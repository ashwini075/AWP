let callAjax = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        console.log(xhr.readyState);
        console.log(xhr.responseText);

    };
    xhr.open('GET',"https://reqres.in/api/users?page=2");
    xhr.send();
};

