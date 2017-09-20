<template>
  <div class="profile">

    <h1>Register</h1>
    <b-btn v-b-modal="'regform'">Register</b-btn>
    <register></register>
   


  </div>
</template>
<script>
import register from './register.vue'

export default {
  name: 'profile',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    register
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