<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <H1>Search for an artist</H1>
          <form @submit.stop.prevent="handleSearch">
            <b-form-input type="text" placeholder="For example Metallica..." v-model="searchValue"></b-form-input>
            <H2>
            <router-link :to="{ name: 'artists', params: { id:  searchValue }}"> Search! </router-link>
            </H2>
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

export default {

  name: 'search',

  data: {
    searchValue: 'searchValue',
  },

 


  data() {
    return {
    
      searchValue: ""
    }
  },

  methods: {

   

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