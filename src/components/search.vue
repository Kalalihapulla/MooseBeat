<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <H1>Search for an artist</H1>
          <form @submit.stop.prevent="handleSearch">
            <b-form-input type="text" placeholder="For example Metallica..." v-model="searchValue"></b-form-input>
            <p></p>
            <b-button v-on:click="handleSearch">Search!</b-button>
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
            {{ data.name }}
          </li>
        </ol>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {

  name: 'search',


  data: {
    searchValue: 'searchValue',
    userKey: '468c1cfb7b96f816544e86fa0698b0cd',
    api1: "http://api.onemusicapi.com/20151208/artist?user_key=468c1cfb7b96f816544e86fa0698b0cd&called=Led%20Zeppelin",
    api2: "http://api.openaura.com/v1/search/artists?q=" + this.searchValue + "&api_key=1d9ea39e70e3476140c180593a2ae5bd44b65f12",


  },

  data() {
    return {
      resultValue: '',
    }
  },

  methods: {

    handleSearch() {

  
      axios.get("http://api.openaura.com/v1/search/artists?q=" + this.searchValue + "&api_key=1d9ea39e70e3476140c180593a2ae5bd44b65f12")
        .then((response) => {

          this.resultValue = response.data;

        })
        .catch(function(error) {
          alert(error);
        });

    },

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