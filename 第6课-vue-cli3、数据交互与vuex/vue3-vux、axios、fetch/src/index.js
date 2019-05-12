import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import vueAxios from 'vue-axios';
Vue.use(vueAxios, axios);

import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
  strict: process.env.NODE_ENV=='development',
  state: {userID: 0},
  mutations: {
    setUserID(state, id){
      state.userID=id;
    }
  },
  actions: {
    async login({commit}, {user, password}){
      let {data}=await axios('/users.txt');

      data.forEach(item=>{
        if(item.username==user && item.password==password){
          commit('setUserID', item.ID);
        }
      });
    }
  },
  getters: {  //特别类似——computed
    isLogin(state){
      return state.userID!=0;
    }
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
