import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import App from './App.vue'
import {routes} from './router'
import utils from './mixins/utils.vue'

//グローバルなcssの定義
import './assets/css/common.scss'

Vue.config.productionTip = false

Vue.mixin(utils)
Vue.use(VueRouter)
Vue.use(VueHead)

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
