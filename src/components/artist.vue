<template>
  <div class="artist">
    <div class="artistBody">
    <div class="artistInfo">
      <div id="artistTitle">
        <h1>{{$route.params.name}}</h1>
      </div>
      <div id="artistDetails">

        <ul>
          <li> Year formed: </li>
          <li> .... </li>
          <li> .... </li>
          <li> .... </li>
          <li> .... </li>
          <li> .... </li>
          <li> .... </li>
          <p>More stuff...</p>
        </ul>

      </div>

      <div id="spotifyPlayer">
        <p>
          Spotify Here
        </p>

      </div>

    </div>

    <div class="artistContent">

      <ul>

        <li v-for="data in albumResult" v-bind:key="data">
          <div class="albumTab">
            <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.album_musicbrainz_id   }}"> {{ data.title }} </router-link>
            <!--  fix routing!!! -->

            <!--  ADD BACK BUTTON -->
            <div class="albumPic">
              <img class="albumPicture" :src="'https://coverartarchive.org/release-group/' + data.album_musicbrainz_id + '/front.jpg'" alt="Album cover not found" />
            </div>

            <ul>

              <li v-if="data.release_date == notFound"> Date: Not found </li>
              <li v-else> Date: {{ data.release_date }} </li>

              <li>
                <b-button v-b-tooltip.hover.auto title="Add this album to your profile" type="submit" variant="primary">Add</b-button>
              </li>
              <li>
                <b-dropdown id="" text="Songs">

                  <b-dropdown-item-button disabled>I'm a button, but disabled!</b-dropdown-item-button>

                </b-dropdown>
              </li>
            </ul>

          </div>
        </li>
      </ul>

    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'artist',
  data() {
    return {
      albumResult: '',
      picResult: '',
      reviewResult: ''
    }
  },

  created: function() {

    axios.get("/api/albums/" + this.$route.params.name)
      .then((response) => {

        this.albumResult = response.data.data;

      })
      .catch(function(error) {
        alert(error);
      });

    axios.get("/api/reviews/get/" + this.$route.params.id)
      .then((response) => {

        this.reviewResult = response.data;

      })
      .catch(function(error) {
        alert(error);
      });
  },
  methods: {

    coverNotFound() {

      document.getElementByClass('albumPicture').src = 'http://sher-jatt.com/mp3/mcov/57366.jpg';
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

.albumTab {
  border-radius: 4px;
  border: 3px solid gray;
  height: 100%;
  width: 20em;
  text-align: center;
  margin-top: 1em;
  padding: 1em;
}

.albumPic {
  border-radius: 4px;
  border: 5px solid #1d2120;
  height: 15em;
  width: 15em;
  display: block;
  margin: auto;

  margin: 1em;
}

.albumPicture {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.btn-grey {
  background-color: #D8D8D8;
  color: #FFF;
}

.rating-block {
  background-color: #FAFAFA;
  border: 1px solid #EFEFEF;
  padding: 15px 15px 20px 15px;
  border-radius: 3px;
}

.bold {
  font-weight: 700;
}

.padding-bottom-7 {
  padding-bottom: 7px;
}

.review-block {
  background-color: #FAFAFA;
  border: 1px solid #EFEFEF;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
}

.review-block-name {
  font-size: 12px;
  margin: 10px 0;
}

.review-block-date {
  font-size: 12px;
}

.review-block-rate {
  font-size: 13px;
  margin-bottom: 15px;
}

.review-block-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}

.review-block-description {
  font-size: 13px;
}

.artistInfo {
  margin: 1% 3% 3% 3%;
  width: 34%;
  height: 85%;
  float: left;
  position: fixed;
  background: whitesmoke;
  border-radius: 1em;
}

.artistContent {
  width: 57%;
  margin: 1% 3% 3% 0%;
  float: right;
  background: whitesmoke;
  border-radius: 1em;
  padding-top: 1%;
}

#spotifyPlayer {
  width: 80%;
  height: 50%;
}

#artistDetails {
  height: 50%;
  width: 80%;
}

.artistBody {
 background: #42a1f4 !important;
}
</style>