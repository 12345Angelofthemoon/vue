<template lang="html">
  <div>
    {{name}}, {{age}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 18
    },
    data: {
      type: Array,
      required: true,
      validator(value){
        if(!value.length){
          console.error('不能传空数据');
          return false;
        }

        for(let i=0;i<value.length;i++){
          if(!value[i].ID){
            console.error('有一个数据没有ID');
            return false;
          }
        }

        return true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
