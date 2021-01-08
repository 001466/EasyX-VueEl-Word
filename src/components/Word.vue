<template>


<wd-anchor :data="data" v-model="value" :offset-top="44" :container-offset-top="86">
  <div class="anchor-content">
    <div v-for="item in data" :id="item.id">
      <wd-card>
         {{item.title}}
         一般的，检举内容由承办的党的委员会或纪律检查委员会将处理意见或复议、复查结论同申诉人见面，听取其意见。复议、复查的结论和决定，应交给申诉人一份。
         <wd-button slot="footer" size="small" plain>查看详情</wd-button>
      </wd-card>
    </div>
  </div>
</wd-anchor>



</template>


<script>
export default {
  name: 'Word',
  data () {
    return {
      data: [
        {
          id: '0',
          title: '标签一'
        },
        {
          id: '1',
          title: '标签二'
        },
        {
          id: '2',
          title: '标签三'
        }
      ],
      value: '0'
    }
  }
}
</script>
