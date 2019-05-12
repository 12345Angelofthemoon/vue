<template lang="html">
  <div class="">
    新闻
  </div>
</template>

<script>
export default {
  created(){
    let updateData=()=>{
      let {id, type}=this.$route.params;
      let {a, b}=this.$route.query;

      console.log([id, type]);
      console.log([a, b]);
    };

    updateData();
    this.$watch('$route', updateData);
  },
  // updated(){
  //   //$router -> new Router();      router实例
  //   // console.log(this.$router);
  //
  //   //$route -> currentRoute        当前路由节点
  //   let {id, type}=this.$route.params;
  //
  //   console.log(id, type);
  // },
  // watch: {
  //   $route(){
  //     let {id, type}=this.$route.params;
  //
  //     console.log(id, type);
  //   }
  // }
}
</script>

<style lang="css" scoped>
</style>
