<template lang="html">
  <div>
    头部：<slot name="header" />
    <div class="box">
      <slot/>
    </div>
    bbbb
  </div>
</template>

<script>
export default {
  data(){
    return {a: 99}
  }
}
</script>

<style lang="css" scoped>
.box {border:1px solid black;}
</style>
