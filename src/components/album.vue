<template>
  <div class="album">

    <div class="menu">
      <h1>Scrolling</h1>
    </div>

    <div class="content">
      
      

    </div>

  </div>
</template>

<script>

export default {
  name: 'album',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },


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



/* Main site body */

.menu {
  width: 30%;
  float: left;
  position: fixed;
}

.content {
  width: 70%;
  float: right;
}
</style>