<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <br>
          <H1>Search for an artist</H1>
          <form @submit.stop.prevent="artistSearch">
            <b-form-input type="text" placeholder="For example Metallica..." v-model="searchValue"></b-form-input>
            <p></p>
            <b-button type="submit" variant="primary">Search!</b-button>
          </form>
        </div>
      </b-col>
      <b-col></b-col>

    </b-row>
    <p></p>
    <b-row id="searchResults">
      <b-col></b-col>
      <b-col cols="8">
        <ol>
          <li v-for="data in resultValue" v-bind:key="data">
            <router-link :to="{ name: 'artist', params: { name:  data.name,   id: data.musicbrainz_id, spotify: data.spotify_id  }}"> {{ data.name }} </router-link>

          </li>
        </ol>
      </b-col>
      <b-col></b-col>
    </b-row>
    <iframe src="https://open.spotify.com/embed/track/4W6UCSL6BSF651pm6qwOoV" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

  </b-container>
</template>

<script>
import axios from 'axios';
export default {

  name: 'search',

  data: {
    searchValue: 'searchValue',
    resultValue: "",
  },




  data() {
    return {
      resultValue: "",
      searchValue: ""
    }
  },

  methods: {

    artistSearch() {

      axios.get("/api/artists/" + this.searchValue)
        .then((response) => {

          this.resultValue = response.data.data;


        })
        .catch(function(error) {
          alert(error);
        });


    }
  }
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

#searchResults {
  font-size: 1.5em;
}
</style>