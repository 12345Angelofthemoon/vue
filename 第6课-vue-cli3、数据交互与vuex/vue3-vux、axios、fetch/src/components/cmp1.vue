<template lang="html">
  <div class="box">
    <input type="text" v-model="form.user">
    <input type="password" v-model="form.password">
    <button type="button" @click="fn">登录</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    fn(){
      // this.$store.state.userID=9;
      this.$store.dispatch('login', this.form);
    }
  }
}
</script>

<style lang="css" scoped>
.box {border:1px solid red;}
</style>
