import { createStore } from 'vuex'

export default createStore({
  state: {
    error:false,
    data:{},

  },
  getters: {
    getEror(state){
      return state.error;
    },
    getmainData(state){
      const { temp,description, icon,name,country } = state.data;
      return {
        temp,
        description,
        icon,
        name,
        country
      };
     
      

    },
    getFooterData(state) {
      const { wind, clouds, humidity } = state.data;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getDescription(state){
      return state.data.description
        
    }
 
 
  },
  mutations: {
    setEror(state,payload){
      state.error=payload

    },
    setData(state,payload){
      state.data=payload
    }
  

  },
  actions: {
    errorApi(context,param){
      context.commit('setEror',param)

    },
    dataApi(context,param){
   
      const weatherData = {
        name: param.name,
        temp: param.main.temp,
        description: param.weather[0].description,
        icon: param.weather[0].icon.substring(0, 2),
        info:param.weather[0].main,
        wind:param.wind.speed,
        humidity: param.main.humidity,
        clouds: param.clouds.all,
        country: param.sys.country,
      };
      context.commit('setData',weatherData)
    }
 
  },
  modules: {
  }
})
