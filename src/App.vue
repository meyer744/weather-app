<template>
  <div class="container">
    <h1>Current Weather</h1>
    <weather-search @weather-search-input="weatherSearch"></weather-search>
    <weather-display
      :city="city"
      :temp="temp"
      :conditions="conditions"
    ></weather-display>
  </div>
</template>

<script>
import weatherSearch from "./components/WeatherSearch.vue";
import weatherDisplay from "./components/WeatherDisplay.vue";
export default {
  name: "app",
  components: {
    weatherSearch,
    weatherDisplay,
  },
  data() {
    return {
      key: "7c14e817f8601f1152460e59739138aa",
      lon: "",
      lat: "",
      city: "",
      temp: "",
      conditions: "",
    };
  },
  watch: {
    lon: function() {
      this.getWeather();
    },
  },
  methods: {
    getLocation() {
      const options = {enableHighAccuracy: true}
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lon = position.coords.longitude.toString();
            this.lat = position.coords.latitude.toString();
            console.log(position);
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            console.log(this.lon);
            console.log(this.lat);
          },
          (error) => {
            console.log(error.message);
          },
          options
        );
      } else {
        console.log("Your browser does not support geolocation API");
      }
    },

    getWeather() {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          this.lat +
          "&lon=" +
          this.lon +
          "&units=imperial" +
          "&appid=" +
          this.key
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.city = data.name;
          this.temp = Math.round(data.main.temp);
          this.conditions = data.weather[0].description;
          console.log(data);
        })
        .catch(() => {});
    },
    getWeatherByCity(city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial" +
          "&appid=" +
          this.key
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.city = data.name;
          this.temp = Math.round(data.main.temp);
          this.conditions = data.weather.description;
          this.conditions = data.weather[0].description;
          console.log(data);
        })
        .catch(() => {});
    },
    getWeatherByZip(zip) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          zip +
          ",us" +
          "&units=imperial" +
          "&appid=" +
          this.key
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          this.city = data.name;
          this.temp = Math.round(data.main.temp);
          this.conditions = data.weather[0].description;
          console.log(data);
          console.log(data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    weatherSearch(searchInput) {
      console.log(searchInput);
      if (typeof searchInput === "number") {
        this.getWeatherByZip(parseInt(searchInput));
      } else {
        this.getWeatherByCity(searchInput);
      }
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(8, 8, 114, 1) 0%,
    rgba(79, 79, 180, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
.container {
  color: white;
  max-width: 600px;
  margin: auto;
  margin-top: 180px;
}
</style>
