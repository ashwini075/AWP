
let getWeather = () => {
    let cityname = document.querySelector("#textid").value ;

    
    let url = "api.openweathermap.org/data/2.5/weather?appid=12a37c610fc89e28980ea60352d11aa9&units=metric&q=" + cityname ;

    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);

    xhr.onload = () => {
        let refjson = JSON.parse(xhr.responseText);
        console.log(refjson);
        domlogicHere(refjson);
    };
    xhr.send();
};

let domlogicHere = (refjson) => {
    console.log(refjson.main);
    let name = refjson.name;
    let maxTemp = refjson.main.temp_max;
    const parent = document.querySelector("#parent");

    const newElement = parent.children[0].cloneNode(true);

    newElement.style.display = "block";
  newElement.innerHTML = name + " " + maxTemp;

  parent.insertBefore(newElement, parent.firstChild);

  document.querySelector("#textid").value = "";

};