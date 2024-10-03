// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const VILLE = document.querySelector(".city h3");
const PAYS = document.querySelector("#country");
const TEMP = document.querySelector("#degrees");
const DESC = document.querySelector("#desc");
const FORM = document.querySelector("form");
const MAIN = document.querySelector("Main");
const API_Key_Meteo = "3bb1582135e2dacedb88763be3098080";
let Info;

FORM.addEventListener("submit",(event) => {
    event.preventDefault();
    const VILLES = document.querySelector("#cities").value;
    callAPI(VILLES);
});

function callAPI(Ville){
    const Url_API_Meteo = `http://api.openweathermap.org/data/2.5/weather?q=${Ville}&units=metric&lang=fr&appid=${API_Key_Meteo}`;
    console.log(Url_API_Meteo);
    fetch(Url_API_Meteo)
    .then(reponse => reponse.json())
    .then(info => {

        console.log(info);
        Info = info;
        TEMP.innerHTML= Math.round(info.main.temp)+"°C";
        VILLE.innerHTML= info.name;
        PAYS.innerHTML= info.sys.country;
        DESC.innerHTML= info.weather[0].description;
    })
}