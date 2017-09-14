<template>
  <div id="meat">

    <h1>Meat</h1>

    <router-link v-bind:to="'/'">Moose</router-link>
  <div>User {{ $route.params.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'meat'
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>