<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <H1>Search for an artist</H1>
          <form @submit.stop.prevent="artistSearch">
            <b-form-input type="text" placeholder="For example Metallica..." v-model="searchValue"></b-form-input>
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

          this.resultValue = response.data;
          alert(this.resultValue);

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