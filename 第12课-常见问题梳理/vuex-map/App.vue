<template>
  <div>
    {{name}}, {{age}}

    <div class="">
      {{info}}
    </div>

    <button type="button" name="button" @click="setName('张4')">修改姓名</button>
  </div>
</template>

<script>
import Vue from 'vue';
import {mapState, mapActions, mapGetters} from 'vuex';

// function mapActions(arr){
//   let result={};
//
//   arr.forEach(name=>{
//     result[name]=function(val){
//       this.$store.dispatch(name, val);
//     }
//   });
//
//   return result;
// }

export default {
  methods: {
    // setName(){
    //   this.$store.dispatch('setName', '张三');
    // },
    // setAge(){
    //   this.$store.dispatch('setAge', 28);
    // }

    ...mapActions(['setName', 'setAge'])
  },
  computed: {
    ...mapState({
      name: state=>state.name,
      age: state=>state.age
    }),

    // info(){
    //   return this.$store.getters.info;
    // }

    ...mapGetters(['info'])
  }
}
</script>

<style lang="less">
</style>
