import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

import Word from '@/components/Word'
import Sentence from '@/components/Sentence'
import Emoji from '@/components/Emoji'
import Remover from '@/components/Remover'



export default new Router({
  routes: [

    {
      path: '/Word',
      name: 'Word',
      component: Word
    },
    {
      path: '/Sentence',
      name: 'Sentence',
      component: Sentence
    },
    {
      path: '/Emoji',
      name: 'Emoji',
      component: Emoji
    },
    {
      path: '/Remover',
      name: 'Remover',
      component: Remover
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }





  ]
})
