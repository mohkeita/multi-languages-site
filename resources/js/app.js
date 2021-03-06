/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');
import Lang from 'lang.js';
import messages from './messages';
import route from 'ziggy';
import {Ziggy} from './ziggy';


const lang = new Lang({
    messages: messages
});

window.Vue = require('vue');

Vue.mixin({
    methods: {
        __(...args) {
            return lang.get(...args);
        },
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
    }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/HelloComponent.vue -> <example-component></example-component>
 */

//const files = require.context('./', true, /\.vue$/i)
//files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('cookie-banner-consentment', require('./components/CookieBannerConsentment.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
