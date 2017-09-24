<template>

  <div class="profile">

    <b-btn v-b-modal="'regform'">Register</b-btn>
    <register></register>
    <p></p>
     <b-btn v-b-modal="'logform'">Login</b-btn>
    <login></login>
    <p></p>
    
  </div>
</template>
<script>
import register from './register.vue'
import login from './login.vue'

export default {
  name: 'profile',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    register,
    login
  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>