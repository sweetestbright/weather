//working
function formatDate(date) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let number = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let formattedDate = `${day}, ${number} ${month} ${year}, ${hours}hrs${minutes}min`;
  return formattedDate;
}
formatDate();
let head = document.querySelector("#current-date-header");
head.innerHTML = formatDate();

//The below is not working

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp-header");
  currentTemp.innerHTML = `${temperature}°C`;

  let weatherDescription = document.querySelector(
    "#current-description-header"
  );
  weatherDescription.innerHTML = response.data.weather[0].description;

  let humidity = Math.round(response.data.main.humidity);
  let humidityPercentage = document.querySelector("#humidity-header");
  humidityPercentage.innerHTML = `Humidity: ${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#windspeed-header");
  windSpeed.innerHTML = `Wind: ${wind}km/h`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-header");
  city.innerHTML = `in ${searchInput.value}`;
  searchLocation(searchInput.value);
}
function searchLocation(city) {
  let searchInput = document.querySelector("#search-input");
  let citySearch = searchInput.value;
  let apiKey = "16e49f6ea3be463a78a985a261be316a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", searchCity);
