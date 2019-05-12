<template lang="html">
  <router-link tag="dd" :to="{name: 'music', params: {id: data.id}}" class="clearfix active">
    <img :src="getServerImg(data.img)" class="s-img fl" alt="">
    <div class="s-title fl">
      <a href="#" class="title">{{data.name}}</a>
      <span>{{data.frequnce}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    getServerImg(img){
      return 'http://localhost:8081/imgs/'+img;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
