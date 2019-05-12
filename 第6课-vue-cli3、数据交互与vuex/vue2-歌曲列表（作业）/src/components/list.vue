<template lang="html">
  <div class="cm-list fl">
    <dl class="m-brand-list">
      <dt>云音乐特色榜</dt>
      <listItem v-for="item in list" :key="item.id" :data="item"/>
    </dl>
  </div>
</template>

<script>
import listItem from '@/components/listitem';
export default {
  data(){
    return {
      list: []
    }
  },
  async created(){
    let {data}=await this.axios('http://localhost:8081/api/list');

    if(data.err){
      alert('读取数据失败');
    }else{
      this.list=data.data;
      console.log(this.list);
    }
  },
  components: {
    listItem
  }
}
</script>

<style lang="css" scoped>
</style>
