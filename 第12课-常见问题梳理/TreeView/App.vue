<template lang="html">
  <div id="app">
    <treeView :data="tree"/>
  </div>
</template>

<script>
import treeView from '@/components/treeView';

export default {
  components: {
    treeView
  },
  data(){
    return {
      tree: [
        {title: '数码类', children: [
          {title: '手机', children: [
            {title: '苹果', children: [
              {title: '6c'},
              {title: '9s'},
            ]},
            {title: '三星'},
            {title: '小米'},
            {title: '华为'},
          ]},
          {title: '电脑', children: [
            {title: 'dell'},
            {title: 'acre'},
          ]},
          {title: '电视'},
        ]},
        {title: '服装类', children: [
          {title: '男装'},
          {title: '女装'},
          {title: '童装'},
        ]},
        {title: '玩具类'},
      ]
    }
  }
}
</script>

<style>
</style>
