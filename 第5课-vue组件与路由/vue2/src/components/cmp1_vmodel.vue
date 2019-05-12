<template lang="html">
  <div>
    <button type="button" @click="$emit('input', value+5);">+1</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style lang="css" scoped>
</style>
