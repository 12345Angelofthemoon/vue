<template lang="html">
  <div class="">
    <el-form label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="生日年份">
        <el-date-picker v-model="birthyear" type="date" value-format="yyyy" placeholder="请选择出生年份">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <!-- <el-table :data="datas">
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button @click="fn(scope.row)" type="default" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      gender: '',
      birthyear: ''
      // datas: [
      //   {ID: 1, name: 'blue', city: '北京'},
      //   {ID: 2, name: 'zhangsan', city: '上海'},
      //   {ID: 3, name: 'lisi', city: '北京'},
      // ]
    };
  },
  methods: {
    fn(row){
      console.log(row)
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
