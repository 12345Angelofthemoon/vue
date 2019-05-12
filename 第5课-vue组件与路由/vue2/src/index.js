import Vue from 'vue';
import App from './App';

//路由
import Router from 'vue-router';
//安装*
Vue.use(Router);

//创建路由对象
import index from './components/index';
import news from './components/news';
import notfound from './components/notfound';

let router=new Router({
  mode: 'history',
  routes: [  //路由表
    {path: '/', component: index},
    {path: '/news/:id/:type', component: news},






    {path: '*', component: notfound},
  ]
});

new Vue({
  el: '#root',
  router,
  data: {},
  components: {
    App
  },
  template: `<App/>`
});
