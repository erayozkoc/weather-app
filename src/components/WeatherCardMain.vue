<template>
    <div class="main" >
 
        <div class="cityName">{{ getmainData.name }} {{ getmainData.country }}</div>
        <div class="weather">
            <div class="weatherImage"  v-if="typeof getmainData.icon !== 'undefined'"
            :style="[getmainData.icon ? {'background-image': 'url(http://openweathermap.org/img/wn/'+getmainData.icon+'d@2x.png)'}: {}]"
            ></div>
            <div  class="temperatureDegree">{{ Math.round(getmainData.temp) }}°</div>
        </div>
         <div class="weatherDesription" >{{ getmainData.description}}</div>
    </div>

    
    

</template>


<script>

import { mapGetters } from "vuex";
export default {
    computed:{
      ...mapGetters(['getmainData'])
    }

}
</script>

<style>


.cityName{
    margin-top:30px;
    margin-bottom:40px;
    font-weight: 300;
    font-size: 2.25em;
    border-bottom: solid 1px;
  
   
}
.weather{
    display: flex;
    justify-content:space-around;
    align-items: center;
    
}
.weather .temperatureDegree{
    font-weight: 300;
    font-size: 6.59375em;
    line-height: .2em;
    color: #666;

   
}

.weather .weatherImage {
    width: 90px;
    height: 90px;
    border-radius: 50%;
 
}
.weatherDesription{
    margin-top: 35px;
    font-size: 30px;
    color: #666;
    text-align: center;
}
</style>