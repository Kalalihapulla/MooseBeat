<template>
  <div class="artist">

    <h1>Artist</h1>

     <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:3BNDjSD67jJE4fhxX1b2OV&size=detail&theme=light"
      width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
      <iframe src="https://open.spotify.com/embed?uri=spotify:track:0jXK4Xy4LAEKFgRiTr3M7w"
       width="300" height="380" frameborder="0" allowtransparency="true"></iframe>


  </div>
</template>
<script>


export default {
  name: 'artist',
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
</style>