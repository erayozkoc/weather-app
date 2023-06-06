<template>
   
    

        <div class="search-box">
  <input type="text" class="search-input"  placeholder="Serch Any City" v-model="search"    @keydown.enter="getData">
  <a class="search-btn" href="#">
    <!-- Seach Icon -->
    <i class="fas fa-search"></i>
  </a>
</div>

    
    

</template>


<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return{
            search:'',
           
    
        }
    },
    computed:{
      ...mapGetters['getEror']
    },
    methods:{
        getData(){
            if(this.search !=''){
                fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.search +'&appid=cb541d465bf134394cc34c88c37f380f&units=metric')
            .then(res=>res.json())
            .then(json=>{
                if(json.cod==404&& this.search==""){
                    this.$store.dispatch('errorApi',true)
                }
                else{
                    this.$store.dispatch('errorApi',false)
                    this.$store.dispatch('dataApi',json)

                }
            }
            )

            }
       

            this.search=""
        }
    }

}
</script>

<style>

.search-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

  background: #cd595a;
  padding: 10px;

  border-radius: 50px;

}
/* input */
.search-input {
  outline: none;
  border: none;
  background: none;
  width: 0;
  padding: 0;
  color: #fff;
  float: left;
  font-size: 16px;
  transition: .3s;
  line-height: 40px;
}
.search-input::placeholder {
    color: #fff;
}
/* icon */
.search-btn {
  color: #fff;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: #cd595a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: .3s;
}
.search-input:focus,
.search-input:not(:placeholder-shown) {
  width: 240px;
  padding: 0 6px;
}
.search-box:hover > .search-input {
  width: 240px;
  padding: 0 6px;
}
.search-box:hover > .search-btn,
.search-input:focus + .search-btn,
.search-input:not(:placeholder-shown) + .search-btn {
  background: #fff;
  color: #cd595a;
}
</style>