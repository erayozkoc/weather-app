<template>
  <WeatherCard/>
  <WeatherAnimation/>
</template>

<script>

import WeatherCard from './components/WeatherCard.vue';
import WeatherAnimation from './components/WeatherAnimation.vue';
export default {
  name: 'App',
  components: {
    WeatherCard,WeatherAnimation
  },
  created(){     
    fetch('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=cb541d465bf134394cc34c88c37f380f&units=metric')
            .then(res=>res.json())
            .then(json=>{this.$store.dispatch('dataApi',json)}
            )
    
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
*{
    margin: 0;
    padding:0 ;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

</style>
