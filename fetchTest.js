const API = '9d77291a1b3ec497dabe1310e9ba9cb7'; // 이거 그냥 준식 개인용 api
const LOCATION = 'Sydney';

function getWeather(LOCATION) {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + LOCATION + '&appid=' + API + '&units=metric';
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log("WeatherINFO!");
        console.log(json.weather[0].main);
        console.log(json.main.temp);

      });
}

getWeather(LOCATION);