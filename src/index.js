function showTemperature(response) {
  let temperatureValue = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureValue.innerHTML = temperature;
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  let apiKey = "5fa91afbb646o4d4c1d2at71e7c05a3b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  cityElement.innerHTML = city;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
