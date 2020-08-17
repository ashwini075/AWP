
const mid = document.querySelector('#mid');
console.log(mid);

window.addEventListener('load',() => {
  console.log('on.load');

  let xhr =  new XMLHttpRequest();

  xhr.open('GET',"https://reqres.in/api/users?page=2");

  xhr.onreadystatechange = () =>{

    if (xhr.readyState === 4){
      console.log(xhr.responseText);

      let sjson = JSON.parse(xhr.responseText);
      console.log(sjson.data);
      domlogicHere(sjson.data);
    }

  };
xhr.send();
});

let domlogicHere=function (list) {

  const mid = document.querySelector('#mid');
  console.log('inside.load',mid);


  for(let i = 0; i < list.length; i++)
  {
      let item =list[i];
      const newElement = mid.children[0].cloneNode(true);
      newElement.style.display = 'flex' ;
      
      newElement.children[0].innerHTML = item.first_name + " " + item.last_name;
      mid.append(newElement);
  }

};

   
