import Vue from 'vue'
import App from './App'
import router from './router'

//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
//Vue.use(ElementUI)//全局使用ElementUI

import WotDesign from 'wot-design'
import 'wot-design/lib/theme-default/index.css'

Vue.use(WotDesign)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
