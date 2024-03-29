import Vue from 'vue'
import App from './App.vue'

//全部
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import {Select} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Button);
// Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
