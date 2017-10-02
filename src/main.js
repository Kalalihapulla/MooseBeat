import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';



//import the vue router
import VueRouter from 'vue-router'

//tell vue to use the router
Vue.use(BootstrapVue);
Vue.use(VueRouter);

//import the hello component
import profile from './components/profile.vue'
//import the about component
import search from './components/search.vue'
//define your routes
import artist from './components/artist.vue'

import album from './components/album.vue'

import login from './components/login.vue'

import statistics from './components/statistics.vue'


const routes = [

  { path: '/', component: search },

  { path: '/login', component: login },

  { path: '/statistics', component: statistics },

  { name: 'profile', path: '/profile/:name', component: profile },

  { name: 'artist', path: '/artist/:name/:id/:spotify', component: artist },

  { name: 'album', path: '/album/:title/:id/:artist', component: album },

]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')//mount the router on the app


