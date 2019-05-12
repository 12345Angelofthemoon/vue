import Vue from 'vue/dist/vue.esm';

import cmp1 from './cmp1.vue';

let vm=new Vue({
  el: '#root',
  components: {
    cmp1
  },
  template: '<cmp1></cmp1>'
});
