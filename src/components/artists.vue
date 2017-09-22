<template>
  <div class="artists">

   
    <h1>Greetings</h1>

      <b-row id="searchResults">
      <b-col></b-col>
      <b-col cols="8">
        <ol>
          <li v-for="data in resultValue" v-bind:key="data">
            {{ data.name }}
          </li>
        </ol>
      </b-col>
      <b-col></b-col>
    </b-row>

  </div>
</template>
<script>
import axios from 'axios';


export default {
  name: 'artists',


data: {
   
  },

  data() {
    return {
      resultValue: '',
    }
  },
  created: function () {
   
     axios.get("/api/artists/" + this.$route.params.id)
        .then((response) => {

          this.resultValue = response.data;

        })
        .catch(function(error) {
          alert(error);
        });
  },

 methods: {


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