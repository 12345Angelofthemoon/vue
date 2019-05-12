<template lang="html">
  <div class="s-table">
    <div class="heading clearfix">
      <div class="th col-1 fl"></div>
      <div class="th col-2 fl">标题</div>
      <div class="th col-3 fl">时长</div>
      <div class="th col-3 fl">歌手</div>
    </div>
    <div class="body">
      <div v-for="item,index in list" class="tr clearfix">
        <div class="td col-1 center fl">
          {{index+1}}
        </div>
        <div class="td col-2 fl">
          {{item.title}}
        </div>
        <div class="td col-3 fl">
          {{time(item.duration)}}
        </div>
        <div class="td col-3 fl">
          {{item.artist}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    time(t){
      function toDou(n){
        return n<10?`0${n}`:n;
      }
      return toDou(Math.floor(t/60))+':'+toDou(t%60);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
