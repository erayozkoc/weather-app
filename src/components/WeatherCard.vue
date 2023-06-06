<template>
  <div class="card">
    <WeatherSearch/>
    <div  class="getEror" v-if="getEror">City Not Found</div>   

 <div v-else>
  <WeatherCardMain/>
    <WeatherCardFooter/>
 </div>
    

 
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import WeatherCardMain from './WeatherCardMain.vue';
import WeatherCardFooter from './WeatherCardFooter.vue';
import WeatherSearch from './WeatherSearch.vue';
export default {
    components:{
        WeatherCardMain,
        WeatherCardFooter,
        WeatherSearch
    },
    computed:{
      ...mapGetters(['getEror'])
    }
    

}
</script>

<style>
.card{
    width: 400px;
    height: 520px;
  background-color:   #f1f1f1;
border-radius: 10px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
padding: 30px 30px;
background-color: #fff;
box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
z-index: 2;
overflow: hidden;
   

}
.getEror{
  margin-top: 100px;
  font-size: 35px;
  display: flex;
  justify-content: center;
}

</style>