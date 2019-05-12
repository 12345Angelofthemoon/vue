<template>
  <div class="container clearfix">
    <list/>
    <router-view/>
  </div>
</template>

<script>
import list from '@/components/list';
import '@/assets/css/main.css';

export default {
  name: 'App',
  data(){
    return {
      
    };
  },
  components: {
    list
  }
}
</script>

<style>
</style>
