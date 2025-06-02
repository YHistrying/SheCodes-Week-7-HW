function searchCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput");
  let city = cityInputElement.value;

  let apiKey = "08dc473fat5683eb45d51fcd6703o645";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let tempElement = document.querySelector("#nowTempValue");
  let cityElement = document.querySelector("#cityNow");
  let humidityElement = document.querySelector("#humidityNow");
  let windElement = document.querySelector("#windNow");
  let iconElement = document.querySelector("#iconNow");
  let descriptionElement = document.querySelector("#descriptionNow");

  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;
  descriptionElement.innerHTML = response.data.condition.description;
}

let searchWeatherForm = document.querySelector("#weatherSearch");
searchWeatherForm.addEventListener("submit", searchCity);
