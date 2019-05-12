import Vue from 'vue';

import cmp1 from './cmp1';

new Vue({
  el: '#root',
  data: {
    name: 'blue',
    b: true
  },
  components: {
    cmp1
  },
  template: `
    <div>
      <input type="button" value="显示隐藏" @click="b=!b" />
      <input type="text" v-model="name" />
      <cmp1 :name="name" v-if="b"></cmp1>
    </div>
  `
});
