import Vue from 'vue'
import App from './App.vue'

//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)

//import the hello component
import moose from './components/moose.vue'
//import the about component
import meat from './components/meat.vue'
//define your routes
const routes = [
  
  { path: '/', component: moose },
  
  { path: '/meat', component: meat }
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


