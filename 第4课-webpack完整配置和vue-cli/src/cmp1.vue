<template lang="html">
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  props: ['name'],
  created(){
    console.log('created');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('aaa');
  },
  updated(){
    console.log('updated');
  },
  destroyed(){
    console.log('destroyed');
  }
}
</script>

<style lang="css" scoped>
</style>
