<template>
<section class="weather-container">
    <div class="weather-column">
  <h2 class="city">{{ city }}</h2>
  <p class="temp">{{ temp }} F°</p>
  </div>
  <div class="weather-column">
  <p class="conditions">{{ conditions }}</p>
  <font-awesome-icon class="icon-weather" :key="weatherIcon" :icon="weatherIcon" />
  </div>
  </section>
</template>

<script>
export default {
  props: ["city", "temp", "conditions"],
  computed: {
    weatherIcon() {
      let conditions = this.conditions;
      if (conditions === "snow") {
        return "snowflake";
      } else if (conditions === "clear sky") {
        return "sun";
      } else if (conditions === "shower rain") {
        return "cloud-showers-heavy";
      } else if (conditions === "rain") {
        return "cloud-rain";
      }  else if (conditions === "light rain") {
        return "cloud-rain";
      } else if (conditions === "moderate rain") {
        return "cloud-rain";
      }  else if (conditions === "mist") {
        return "cloud-rain";
      } else if (conditions === "thunderstorm") {
        return "bolt";
      } else if (conditions === "light snow") {
        return "snowflake";
      } else if (conditions === "few clouds") {
        return "cloud-sun";
      }    
      else {
        return "cloud";
      }
    },
  },
};
</script>

<style scoped>
.weather-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
}
.weather-column{
    display: flex;
    flex-direction: column;
    padding: 25px;
    justify-content:space-evenly;
    height: 115px;
    
}
.icon-weather {
    margin: 0;
    margin-top: -10px;
    font-size: 60px;
    padding-left: 15px;
}
.conditions {
    margin: 0;
}
.temp {
    font-size: 50px;
    margin: 0;
}
.city {
    margin: 0;
    text-align: left;
}

</style>
