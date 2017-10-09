<template>
  <div class="profile">
    <br>

    <div id="profileContent">

      <b-row id="profileNav">

        <b-col cols="6">
          <div id="profileNavLeft">

            <img id="profilePic" src="/static/img/forsene.jpg" alt="Pic">
            <h2 class="inline">Logged in as {{this.$route.params.name}}</h2>
          </div>
        </b-col>

        <b-col cols="6">

          <div id="profileNavRight">

            <iframe class="someItem" src="https://embed.spotify.com/follow/1/?uri=spotify:user:testuser&size=detail&theme=light" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
            <iframe class="someItem" allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fmetallica&color=orange_white&size=64" style="width: 64px; height: 64px;"></iframe>
          </div>
        </b-col>

      </b-row>

      <b-row>
        <b-col cols="1">

        </b-col>
        <b-col cols="5">

          <div class="infoBlock" id="userMusic">

            <b-btn class="collapseButton" v-b-toggle.collapseA variant="primary">Your music</b-btn>
            <b-collapse id="collapseA" class="mt-2">
              <b-card>
                <div id="userVideos">
                  <h2> Your Media</h2>
                  <iframe id="userVideo" src="https://www.youtube.com/embed/mj-v6zCnEaw" frameborder="0" allowfullscreen></iframe>
                </div>

                <div id="userSongs">
                  <iframe class="userSong" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246027770&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                  <iframe class="userSong" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/56705121&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                </div>

              </b-card>
            </b-collapse>

          </div>

        </b-col>

        <b-col cols="5">

          <div class="infoBlock" id="userAdded">
            <b-btn class="collapseButton" v-b-toggle.collapseB variant="primary">Mobile</b-btn>
            <b-collapse id="collapseB" class="mt-2">
              <b-card>
                <table class="table table-responsive table-striped table-hover">

                  <thead>
                    <tr>
                      <th>Song title</th>
                      <th>Artist</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="data in mobileAdded" v-bind:key="data">
                      <td>{{data.title}}</td>
                      <td>{{data.artist}}</td>

                    </tr>

                  </tbody>
                </table>

              </b-card>
            </b-collapse>

          </div>

        </b-col>

        <b-col cols="1">

        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1">

        </b-col>
        <b-col cols="5">

          <div class="infoBlock" id="review">
            <h2>Your reviews</h2>
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

        </b-col>

        <b-col cols="5">

          <div class="infoBlock" id="albumList">
            <h2>Your albums</h2>

            <ul>

              <li class="inline" v-for="data in albumResult" v-bind:key="data">

                <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.mbid   }}"> {{ data.title }} </router-link>

                <div class="albumPic">
                  <img class="albumPicture" :src="data.cover" alt="Album cover not found" />
                </div>

              </li>
            </ul>
          </div>

        </b-col>

        <b-col cols="1">

        </b-col>
      </b-row>
    </div>

    <br>

    <!--  <audio controls>

                                    <source src="https://p.scdn.co/mp3-preview/fca4ad6793f9eefad8208a8e559dac88793081f8?cid=8897482848704f2a8f8d7c79726a70d4" type="audio/mpeg">

                                  </audio> -->
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'profile',
  data() {
    return {
      reviewResult: '',
      albumResult: '',
      mobileAdded: '',
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

    axios.get("/api/user/get/listened/" + this.$route.params.name)
      .then((response) => {

        this.mobileAdded = response.data;

      })
      .catch(function(error) {
        alert(error);
      });
  },


}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}

h2 {
  font-weight: normal;
  color: black;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #871ca5;
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
  word-wrap: break-word;
}

.review-block-description {
  font-size: 13px;
  word-wrap: break-word;
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

  margin: 1em;
}

.albumPicture {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.infoBlock {
  background: whitesmoke;
  border-radius: 1em;
  margin-top: 1.5em;
  padding: 1em;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



#profileContent {
  margin-top: 1em;
}

.inline {
  display: inline-block;
  margin: 0 10px;
  
}

#profileNav {
  background: whitesmoke;
  border-radius: 1em;
  padding: 1em;
  width: 82%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: auto;
  margin-bottom: 1em;
}

#profilePic {
  margin-left: 1em;
  height: 6em;
  width: 6em;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}

.collapseButton {
  width: 80%;
  color: white;
  background: #871ca5;
  border-color: #871ca5;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  border-radius: 0.7em;
}

th {
  text-align: center;
  font-size: 1.2em;
}

#userVideo {
  width: 90%;
  height: 20em;
  margin: auto;
  margin-top: 0.5em;
}

.userSong {
  margin-top: 1em;
  width: 45%;
  position: inline-block;
}

.someItem {
  height: 5em;
  float: right;
  margin-right: 3em;
  margin-top: 0.5em;
}
</style>