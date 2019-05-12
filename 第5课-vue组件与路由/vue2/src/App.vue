<template lang="html">
  <div class="">
    <!-- <a href="#/">首页</a>
    <a href="#/news">新闻</a> -->

    <router-link to="/">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link :to="{path: '/news/3123/hot', query: {a: 33, b: 55}}">新闻1</router-link>
    <router-link to="/news/43534/new">新闻2</router-link>

    <!-- <button type="button" @click="fn1()">首页</button>
    <button type="button" @click="fn2()">新闻</button> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {};
  },
  methods: {
    fn1(){
      this.$router.push('/');
    },
    fn2(){
      this.$router.push('/news');
    },
  }
}
</script>

<style lang="css" scoped>
.router-link-exact-active {
  color: red;
}
</style>
