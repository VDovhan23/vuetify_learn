
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/home',  component: require('./components/MainComponent.vue').default },
    { path: '/bla',  component: require('./components/BlaComponent.vue').default },
  ]



const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.component('main-component', require('./components/MainComponent.vue').default);

import 'vuetify/dist/vuetify.min.css'
let Vuetify = require('vuetify');
Vue.use(Vuetify, { theme: {
    primary: '#2196f3',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }})

const app = new Vue({
    el: '#app',
    router,
});
