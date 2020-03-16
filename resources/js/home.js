/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')
import Vuetify from 'vuetify';
import Router from 'vue-router';

import Home from './components/Home.vue'

Vue.use(Vuetify);
Vue.use(Router);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 */
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key =>
    Vue.component(
        key
            .split('/')
            .pop()
            .split('.')[0],
        files(key).default
    )
)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

window.$Vuetify = new Vuetify({
    theme: {
        dark: false
    }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    el: '#home',
    vuetify: window.$Vuetify,
    render: h=>h(Home),
    router
})
