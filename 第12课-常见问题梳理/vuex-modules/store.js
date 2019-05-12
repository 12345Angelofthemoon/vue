import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store_user={
  state: {
    name: 'blue'
  },
  mutations: {
    setName(state, name){
      state.name=name;
    }
  },
};
const store_company={
  state: {
    name: 'xx有限公司'
  },
  mutations: {
    setName(state, name){
      state.name=name;
    }
  }
}


export default new Vuex.Store({
  state: {
    name: 'blue',
    age: 18
  },
  mutations: {
    setName(state, name){
      state.name=name;
    }
  },
  actions: {
    setName({commit}, name){
      commit('setName', name);
    }
  },

  getters: {
    info(state){
      return '姓名：'+state.name+', 年龄'+state.age+'岁';
    }
  },
  modules: {
    user: store_user,
    company: store_company
  }
})
