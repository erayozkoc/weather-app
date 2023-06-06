<template>
  <div class="footer">
    <div class="wind"><i class="fa-solid fa-wind"></i><span>{{ Math.round(getFooterData.wind) }}km/s</span></div>
    <div class="droplet"><i class="fa-solid fa-droplet"><span>{{ Math.round(getFooterData.humidity) }}%</span></i></div>
    <div class="droplet"><i class="fa-solid fa-cloud"></i><span>{{ Math.round(getFooterData.clouds) }}%</span></div>

  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  computed:{
      ...mapGetters(['getFooterData'])
    }
    

}
</script>

<style>
.footer{
  font-size:17px;
    display: flex;
    margin-top:50px ;
    justify-content: space-around;
}
.footer span{
  margin-left:5px ;
}
.footer i{
  color: #666;
}
</style>