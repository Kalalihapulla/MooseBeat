<template>
  <div class="artist">
    <b-row>
      <b-col cols="1"></b-col>

      <b-col cols="3">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        </p>

      </b-col>

      <b-col cols="7">

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        <b-row>
          <p> </p>

          <div class="albums" style="overflow-y: scroll; height: 60em">
            <ul>

              <li v-for="data in albumResult" v-bind:key="data">
                <div class="albumTab">
                  <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.album_musicbrainz_id   }}"> {{ data.title }} </router-link>
               <!--  fix routing!!! -->
               <!--  ADD BACK BUTTON -->
                  <div class="albumPic">
                    <img class="albumPicture" :src="'https://coverartarchive.org/release-group/' + data.album_musicbrainz_id + '/front.jpg'" alt="Album cover not found"/>
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

        </b-row>

      </b-col>

      <b-col cols="1"></b-col>

    </b-row>

  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'artist',
  data() {
    return {
      albumResult: '',
      picResult: ''
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
</style>