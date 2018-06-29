import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'src/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from 'src/filters'
import App from 'src/App'
import 'src/util/rem.js'
import 'assets/styles/common.css'
import common from 'src/util/common'
import statistical from 'src/util/statistical'

Vue.use(VueRouter)
Vue.use(ElementUI, { size: 'small' })

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  statistical.obtain()
  if (to.meta.title) {
    common.setTitle(to.meta.title)
  }
  next()
})

new Vue({
  router,
  render: f => f(App)
}).$mount('#app')
