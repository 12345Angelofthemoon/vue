<template>
  <div>
    普通name：{{name}}<br/>
    用户name：{{username}}<br/>
    公司name：{{companyname}}<br/>

    <button type="button" name="button" @click="fn()">修改姓名</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  methods: {
    fn(){
      this.$store.dispatch('setName', '老李');
    }
  },
  computed: {
    ...mapState({
      name: state=>state.name,
      username: state=>state.user.name,
      companyname: state=>state.company.name
    })
  }
}
</script>

<style lang="less">
</style>
