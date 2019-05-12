<template lang="html">
  <div class="">
    {{$store.state}}, {{$store.getters.isLogin}}
    <cmp1/>
  </div>
</template>

<script>
// import axios from 'axios';
import cmp1 from '@/components/cmp1';

export default {
  data(){
    return {
      src: ''
    };
  },
  components: {
    cmp1
  }
}
</script>

<style lang="css" scoped>
</style>
