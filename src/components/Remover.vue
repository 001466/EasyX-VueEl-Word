<template>

<div class="remover">


  <div><h4>{{ title }}</h4></div>
  <div>{{ subtitle }}</div>

  <div>
	<wd-row>
	  <wd-col span="16"> <wd-input  placeholder="请输入链接"> </wd-input></wd-col>
	  <wd-col span="8"> <wd-button >解析</wd-button> </wd-col>
	</wd-row>
  </div>

  <div>
    <wd-img
      width="100"
      height="100"
      src="https://img12.360buyimg.com//n0/jfs/t1/29118/6/4823/55969/5c35c16bE7c262192/c9fdecec4b419355.jpg"
    />
  </div>

  <div>
    <wd-button type="info">保存图片到本地</wd-button>
  </div>

</div>

</template>
<script>
export default {
  name: 'Remover',
  data () {
    return {
      title: '一键保存 图片/视频/文案',
      subtitle:'粘贴链接到输入框，可获取图片视频等素材'
    }
  }
}
</script>


<style>
.remover {
  height:340px;
  overflow: auto;
  word-break: break-all;
}
</style>
