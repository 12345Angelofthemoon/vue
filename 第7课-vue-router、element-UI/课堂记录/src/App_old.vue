<template lang="html">
  <div class="">
    

    <!-- {{date1}}
    <el-date-picker
      v-model="date1"
      value-format="yyyy-MM-dd"
      type="month"
    >
    </el-date-picker> -->



    <!-- {{gender}}
    <el-select v-model="gender" placeholder="请选择性别">
      <el-option
        v-for="val,key in genders"
        :label="val"
        :value="key"
      >
      </el-option>
    </el-select> -->

    <!-- {{language}}
    <el-checkbox-group v-model="language">
      <el-checkbox v-for="val, key in languages" :key="key" :label="key">{{val}}</el-checkbox>
    </el-checkbox-group> -->

    <!-- {{gender}}
    <el-radio-group v-model="gender">
      <el-radio label="male">男</el-radio>
      <el-radio label="female">女</el-radio>
    </el-radio-group> -->




    <!-- {{name}}
    <el-input
      v-model="name"
      prefix-icon="el-icon-message"
      suffix-icon="el-icon-search"
    ></el-input> -->



    <!-- <el-button-group>
      <el-button type="primary" @click="fn">按钮</el-button>
      <el-button type="">按钮</el-button>
      <el-button type="">按钮</el-button>
    </el-button-group> -->




    <!-- <el-button type="primary">按钮</el-button>
    <el-button type="primary" size="medium">按钮</el-button>
    <el-button type="primary" size="small">按钮</el-button>
    <el-button type="primary" size="mini">按钮</el-button> -->



    <!-- <el-container>
      <el-header>头</el-header>
      <el-container>
        <el-aside>
          侧边栏
        </el-aside>
        <el-container>
          <el-main>内容</el-main>
          <el-footer>底部</el-footer>
        </el-container>
      </el-container>
    </el-container> -->
    <!-- <el-row>
      <el-col :xs="24" :span="8">
        <div class="col1">
          111
        </div>
      </el-col>
      <el-col :xs="24" :span="8">
        <div class="col2">
          22
        </div>
      </el-col>
      <el-col :xs="24" :span="8">
        <div class="col1">
          333
        </div>
      </el-col>
    </el-row> -->
    <!-- <el-row type="flex" justify="space-between">
      <el-col :span="2">
        <div class="col1">
          111
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col2">
          22
        </div>
      </el-col>
      <el-col :span="2">
        <div class="col1">
          333
        </div>
      </el-col>
    </el-row>
    <el-row>
      第2行
    </el-row> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      date1: ''

      // gender: '',
      // genders: {
      //   male: '男',
      //   female: '女'
      // }
      // language: [],
      // languages: {
      //   'js': 'JavaScript',
      //   'java': 'Java开发',
      //   'php': 'php工程师'
      // }
    };
  },
  methods: {
    fn(){
      alert('a');
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
.col1 {background:red}
.col2 {background:yellow}
</style>
