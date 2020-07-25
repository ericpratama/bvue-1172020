import Vue from 'vue'
// import Sidebar from './Sidebar.vue'
//import D2 from './Coba.vue'
import Coba from './Test.vue'

//import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee,faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(Coba),
  
}).$mount('#app')