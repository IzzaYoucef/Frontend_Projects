let weathweImage = document.querySelector(".wheather-state img");
let cityName = document.querySelector(".wheather-state p#city-name"); 
let weatherDegree = document.querySelector(".wheather-state span.degrees"); 
let citySearched = document.querySelector(".container .search-box input");
let temp = document.querySelector(".search-box i");
let temperatue = document.querySelector(".wheather-state span");
console.log(weatherDegree);
console.log(weathweImage);
console.log(cityName);

let myAPI = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let apiKey = "5b34b5f813189ece09b56aab6dfb2fa0";

async function chechWeather(city) {
    const response = await fetch(myAPI +city+`&appid=${apiKey}`);
    let data = await response.json(); 
    var windSpeed = document.querySelector(".details .wind-spees");
    var humidity = document.querySelector(".details .humidity"); 
    var image = document.querySelector(".wheather-state img");
    console.log(data);
     cityName.innerHTML = data.name; 
    temperatue.innerHTML = data.main.temp + "°C"; 
    windSpeed.innerHTML =  `Wind Speed`+ ' ' + data.wind.speed + "Km/h"; 
    humidity.innerHTML =  'Local' + ' ' + 'Humidity' +' '+ data.main.humidity + "%";
    if (data.weather[0].main === 'Clouds') {
         image.src = "../Images/Cloud.png"
    } else if (data.weather[0].main == 'Clear') {
        image.src = "../Clear.pnj.webp"
    } else if (data.weather[0].main == 'Rain') {
        image.src = "../Images/rainy.png";
     }
    document.querySelector(".weather-box").style.display = "block"
}
temp.addEventListener("click", () => {
    chechWeather(citySearched.value)
})