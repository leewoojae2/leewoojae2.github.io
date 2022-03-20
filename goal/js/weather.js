const API_KEY = "b5f4b9e54989391943e92ecef6a9d634";

function ok(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `${date.name}@`;
      weather.innerText = `${date.weather[0].main} = ${date.main.temp}°`;
    });
}
function error() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(ok, error);
