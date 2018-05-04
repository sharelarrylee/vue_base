import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Order from '@/components/Order'


Router.prototype.goBack = function (homeTabSelected) {
  homeTabSelected = homeTabSelected || ''
  this.isBack = true
  window.history.go(-1)
  sessionStorage.setItem('homeTabSelected', homeTabSelected )
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
