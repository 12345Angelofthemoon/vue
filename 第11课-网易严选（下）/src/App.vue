<template lang="html">
  <div id="app">
    <cmpHeader/>
    <router-view/>
  </div>
</template>

<script>
import cmpHeader from '@/components/common/cmp-header';

export default {
  components: {
    cmpHeader
  }
}
</script>

<style>
body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, dl, dt, dd, input, i, b { margin: 0; padding: 0; border: 0; font-weight:normal; font-style:normal;}
ul, ol { list-style-type: none; }
select, input, img { vertical-align: middle; outline: none; }
a { text-decoration: none; }
a { blr:"expression(this.onFocus=this.blur())"}
a { outline: none; }
html { overflow-x: hidden; }
.clearfix:after { content: ""; display: block; clear: both; }
.clearfix { zoom: 1; }
.fl { float: left; }
.fr { float: right; }

body {font-family:"Microsoft Yahei","微软雅黑",verdana;color:#333;}

.page {width:1090px;margin:0 auto;position:relative;}

.nbb {border-bottom:none!important;}
</style>
