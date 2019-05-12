<template lang="html">
  <div>
    <button type="button" @click="$emit('update:num1', num1+2);$emit('update:num2', num2+5);$emit('update:num3', num3+100)">+1</button>
  </div>
</template>

<script>
export default {
  props: ['num1', 'num2', 'num3'],
}
</script>

<style lang="css" scoped>
</style>
