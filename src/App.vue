<template>

<div id="app">
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <wd-tabbar>
        <wd-tabbar-item icon=""  to="/Word"><span class="nav-lable"> 字词 </span></wd-tabbar-item>
        <wd-tabbar-item icon=""  to="/Sentence"><span class="nav-lable"> 句子 </span></wd-tabbar-item>
        <wd-tabbar-item icon=""  to="/Emoji"><span class="nav-lable"> 表情符 </span></wd-tabbar-item>
        <wd-tabbar-item icon=""  to="/Remover"><span class="nav-lable"> 去水印 </span></wd-tabbar-item>

		<!--
        <wd-tabbar-item icon="" to="/Test">Test</wd-tabbar-item>
        <wd-tabbar-item icon="" to="/HelloWorld">HelloWorld</wd-tabbar-item>
		-->

      </wd-tabbar>
    </div>
</div>


</template>

<script>
import Word from './components/Word'
export default {
  name: 'App',
  components: {
    Word
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{ padding-bottom:50px;}
.content {
  word-break: break-all;
  white-space: normal;
}
.nav-lable {
  font-weight:bold;
  font-size: 18px;
  size: 36px;
}
.footer{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 80px;
  font-size: 36px;
  size: 36px;
  background-color: #000;
  z-index: 9999;
}
</style>
