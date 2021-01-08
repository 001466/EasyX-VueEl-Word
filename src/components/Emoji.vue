
<template>

<wd-anchor :data="data" v-model="value" :offset-top="44" :container-offset-top="86">
  <div class="anchor-content">
    <div v-for="item in data" :id="item.id">
      <wd-card>
        {{item.title}}的内容
      </wd-card>
    </div>
  </div>
</wd-anchor>

</template>


<script>
export default {
  name: 'Emoji',
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
