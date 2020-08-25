import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import { i18n } from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
