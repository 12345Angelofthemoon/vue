<template lang="html">
  <div>
    {{a+b}}
    <button type="button" @click="fn()">按钮</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a: 12, b: 5
    }
  },
  methods: {
    async fn(){
      alert('abc');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
