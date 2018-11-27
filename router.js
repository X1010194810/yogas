import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import BaseInfo from '@/components/BaseInfo'
import ListPanel from '@/components/ListPanel'
import ListCollege from '@/components/ListCollege'
import ListArticle from '@/components/ListArticle'
import ModalPopup from '@/components/ModalPopup'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/ListPanel',
      name: 'ListPanel',
      component: ListPanel,
    }, {
      path: '/ListCollege',
      name: 'ListCollege',
      component: ListCollege,
    }, {
      path: '/ListArticle',
      name: 'ListArticle',
      component: ListArticle,
    }, {
      path: '/BaseInfo',
      name: 'BaseInfo',
      component: BaseInfo,
      children: [
        {
          path: '/ModalPopup',
          name: 'ModalPopup',
          component: ModalPopup,
        }
      ]
    }
  ]
})
