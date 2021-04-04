require('./bootstrap');

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueCarousel from 'vue-carousel';
import router from './src/routes/index';
import axios from 'axios';
import store from './src/store/index'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Registra o camponente
Vue.component('app', require('./src/App.vue').default);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue Carousel
Vue.use(VueCarousel);

let token = store.getters.getToken
if (token) {
    axios.defaults.headers.common['Authorization'] =  `Bearer ${token}`
}

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})

import './src/plugins/vue-schedule'

const app = new Vue({
    template: '<app />',
    router,
    store,
    el: '#app'
})
