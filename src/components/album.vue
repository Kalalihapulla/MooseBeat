<template>
  <div class="album">

    <ul>
      <li v-for="data in trackData" v-bind:key="data">
        {{data.title}}
      </li>
    </ul>

    <!-- <a :href='data.url' target="_blank">
                  <img class="albumPicture" :src='data.picture' alt='img' />
                </a> -->

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'album',
  data() {
    return {
      albumData: '',
      trackData: ''
    }
  },
  created: function() {
    axios.get("/api/albums/get/" + this.$route.params.artist + "/" + this.$route.params.title)
      .then((response) => {
        this.trackData = response.data;
        this.albumData = response.data;
      alert(JSON.stringify(this.trackData));
      })
      .catch(function(error) {
        alert(error);
      });
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