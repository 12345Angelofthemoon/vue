<template lang="html">
  <div class="cm-detail fr" v-if="detail">
    <div class="m-banner clearfix">
      <div class="img fl">
        <img :src="'http://localhost:8081/imgs/'+detail.big_img" alt="">
      </div>
      <div class="desc fl">
        <h2>{{detail.name}}</h2>
        <div class="info">
          <i class="time"></i>
          最近更新：03月10日
          <span>（{{detail.frequnce}}）</span>
        </div>
        <div class="btns">
          <a href="#" class="play-btn">播放</a>
          <a href="#" class="fav-btn">({{detail.fav}})</a>
          <a href="#" class="share-btn">({{detail.share}})</a>
          <a href="#" class="comment-btn">({{detail.comment}})</a>
        </div>
      </div>
    </div>
    <div class="m-title clearfix">
      <h3 class="fl">歌曲列表</h3>
      <div class="count fl">
        100首歌
      </div>
      <div class="plays fr">
        播放：<span>1702708352</span>次
      </div>
    </div>
    <zTable :list="detail.list"/>
  </div>
</template>

<script>
import zTable from './ztable';

export default {
  data(){
    return {
      detail: null
    }
  },
  async created(){
    await this.loadData(this.$route.params.id);
  },
  components: {
    zTable
  },
  watch: {
    async $route(){
      await this.loadData(this.$route.params.id);
    }
  },
  methods: {
    async loadData(id){
      let {data}=await this.axios(`http://localhost:8081/api/detail/${id}`);

      if(data.err){
        alert('读取失败');
      }else{
        this.detail=data.data;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
