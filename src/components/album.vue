<template>
<div class="album">
 <b-row>
      <b-col cols="1"></b-col>

      <b-col cols="3">
        <button type="button" v-if="this.username != null" class="btn btn-info" data-toggle="collapse" data-target="#newReview">Write a review</button>
        <br>
        <div id="newReview" class="collapse">
          <form action="/api/reviews/create" method="post">
            <div class="form-group">
              <label for="title">Title</label>
              <textarea name="title" class="form-control" id="title" rows="1"></textarea>
            </div>
            <div class="form-group">
              <label for="score">Score</label>
              <select class="form-control" name="score" id="score">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="text">Review</label>
              <textarea class="form-control" name="text" id="text" rows="3"></textarea>
            </div>
            <div class="form-group">
              <input type="text" name="artistId" readonly class="form-control-plaintext" id="artistId" v-bind:value="this.id">
            </div>
            <button type="submit" class="btn btn-warning btn-lg">Save</button>
          </form>
        </div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        </p>

      </b-col>

      <b-col cols="7">

        {{$route.params.name}}, {{$route.params.id}}"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
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

        </b-row>

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
</style>