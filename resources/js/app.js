
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/projects',  component: require('./components/ProjectsComponent.vue').default },
    { path: '/dashboard',  component: require('./components/DashboardComponent.vue').default },
    { path: '/',  component: require('./components/DashboardComponent.vue').default },
    { path: '/team',  component: require('./components/TeamComponent.vue').default },
    { path: '*', name:'404', component: require('./components/404Component.vue') },
  ]


const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.component('main-component', require('./components/MainComponent.vue').default);

import 'vuetify/dist/vuetify.min.css'

let Vuetify = require('vuetify');
Vue.use(Vuetify, {
    iconfont: 'mdi', /// імпорт MD іконок з файлу bootstrap.js
    theme: {
        primary: '#7500bd',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
  })

const app = new Vue({
    el: '#app',
    router,
});
