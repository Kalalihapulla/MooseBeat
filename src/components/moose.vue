<template>
  <div class="moose">

    <h1>Moose</h1>

    <router-link v-bind:to="'/meat'">Meat</router-link>

  </div>
</template>
<script>
export default {
  name: 'moose',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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