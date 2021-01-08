<template>

<div id="app">
    <div class="top">
       <wd-row>
		 <wd-col span="4">  欢迎来到 		</wd-col>
         <wd-col span="12"> <div class="logo">花漾诗词</div>	</wd-input></wd-col>
         <wd-col span="4">  黎剑发 		</wd-col>
         <wd-col span="4">  退出登陆 	</wd-col>
       </wd-row>
    </div>

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

body{ padding-bottom:40px;padding-top:40px;}

.content {
  word-break: break-all;
  white-space: normal;
}
.nav-lable {
  font-weight:bold;
  font-size: 18px;
  size: 36px;
}
.logo{
  font-weight:bold;
}
.top{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  text-align:left;
  padding-top:10px;
  padding-right:10px;
  padding-left:10px;
  background-color: #f6ba8d;
  z-index: 9999;
}
.footer{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 40px;
  font-size: 28px;
  size: 36px;
  background-color: #000;
  padding-bottom:20px;
  z-index: 9999;
}
</style>
