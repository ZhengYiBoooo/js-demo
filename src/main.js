import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RecycleScroller } from 'vue-virtual-scroller'

import axios from 'axios';
Vue.prototype.axios = axios;
Vue.component('RecycleScroller', RecycleScroller)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
