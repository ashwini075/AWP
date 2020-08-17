window.addEventListener('load',()=>{
    var mid = document.querySelector("#mid");
    mid.style.background = "blue";
})

window.addEventListener('load',() =>{
    let xhr =  new XMLHttpRequest();
    xhr.open('GET',"https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {
        if( xhr.readyState === 4){
            let abc = JSON.parse(xhr.responseText);
                console.log(abc.data);
        }
    }
    xhr.send();
})