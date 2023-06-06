<template>
  <div v-if="typeof getDescription !== 'undefined'" class="weather-background "
  :class="[
     {'clear': getDescription.includes('clear') },
     {'clouds': getDescription.includes('clouds') },
     {'rain': getDescription.includes('rain') },
     {'snow': getDescription.includes('snow') },
     {'smoke': getDescription.includes('smoke') },
  ]"

  
  ></div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters(['getDescription'])
    }

}
</script>

<style>
.weather-background{
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 3s;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.clear{
    background-image:url('../assets/images/clear.jpg') ;
}
.clouds{
    background-image:url('../assets/images/clouds.jpg') ;
}
.rain{
    background-image:url('../assets/images/rain.gif') ;
}
.snow{
    background-image:url('../assets/images/snow.gif') ;
}
.smoke{
    background-image:url('../assets/images/smoke.jpg') ;
}
</style>
