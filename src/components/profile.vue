<template>
  <div class="profile">
    <br>
    <p>=w= {{this.$route.params.name}}</p>

    <br>
    <div id="review">
      <ul>
        <li v-for="data in reviewResult" v-bind:key="data">
          <div class="row">
            <div class="col-sm-12">
              <hr/>
              <div class="review-block">
                <div class="row">
                  <div class="col-sm-3">
                    <img src="/static/img/forsene.jpg" class="img-rounded">
                    <div class="review-block-name">
                      <router-link :to="{ name: 'profile', params: {name:  data.username}}"> {{data.username}} </router-link>
                    </div>
                    <div class="review-block-date">{{data.created_at}}</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="review-block-rate">
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div class="review-block-title">{{data.title}}</div>
                    <div class="review-block-description">{{data.text}}</div>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="albumList">
      <ul>

        <li class="inline" v-for="data in albumResult" v-bind:key="data">

          <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.mbid   }}"> {{ data.title }} </router-link>
          <!--  fix routing!!! -->

          <!--  ADD BACK BUTTON -->
          <div class="albumPic">
            <img class="albumPicture" :src="data.cover" alt="Album cover not found" />
          </div>

          <!--          <ul>

                      <li class="inline" v-if="data.release_date == undefined"> Date: Not found </li>
                      <li class="inline" v-else> Date: {{ data.release_date }} </li>

                      <li class="inline">
                        <b-button :href="'/api/user/albums/add/'+data.artist_name + '/' +data.title + '/' +data.album_musicbrainz_id" v-b-tooltip.hover.auto title="Add this album to your profile" type="submit" variant="primary">Add</b-button>
                      </li>
                      <li class="inline">
                        <b-dropdown id="" text="Songs">

                          <b-dropdown-item-button disabled>I'm a button, but disabled!</b-dropdown-item-button>

                        </b-dropdown>
                      </li>
                    </ul> -->

        </li>
      </ul>
    </div>
     
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'profile',
  data() {
    return {
      reviewResult: '',
      albumResult: ''
    }
  },
  components: {
  },
  created: function() {
    axios.get("/api/reviews/get/user/" + this.$route.params.name)
      .then((response) => {
        this.reviewResult = response.data;

      })
      .catch(function(error) {
        alert(error);
      });
    axios.get("/api/user/albums/get/" + this.$route.params.name)
      .then((response) => {
        this.albumResult = response.data;

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

.review-block {
  background-color: white;
  border: 1px solid #EFEFEF;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
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

.albumTab {
  border-radius: 4px;
  border: 3px solid gray;
  height: 100%;
  width: 20em;
  text-align: center;
  margin-top: 1em;
  padding: 1em;
  background: white;
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

.infoPic {
  border-radius: 4px;
  border: 5px solid #1d2120;
  height: 5em;
  width: 5em;
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