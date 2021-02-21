import Vue from 'vue'
import Router from 'vue-router'
import ComicInit from '@/components/ComicInit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComicInit',
      component: ComicInit
    }
  ]
})
