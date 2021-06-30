import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './components/global_components'
import { vuetify } from './plugins'
import './directives'

import './mock'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
