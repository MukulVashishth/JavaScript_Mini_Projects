let weather = {
  apikey: "0a44ea1459e09653fb503576f3c2c459",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0a44ea1459e09653fb503576f3c2c459"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
