//using jquery
let callAjaxUsingJquery = () => {
  let city = "mumbai";

  let url ='http://api.openweathermap.org/data/2.5/weather?appid=12a37c610fc89e28980ea60352d11aa9&units=metric&q='+ city;
  
  
  $.ajax(url).done((data1) => {
      console.log("success");
    domop(data1);
  });

};


let domop = (data1) => {
    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = data1.name + " " + data1.main.temp_max;
    parent.insertBefore(newElement,parent.firstChild);
};