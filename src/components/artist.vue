<template>
  <div class="artist">

    <div class="artistBody">

      <div class="artistInfo">
        <div id="artistTitle">
          <h1>{{$route.params.name}}</h1>
          <br>
        </div>

        <div id="artistDetails">

          <div id="artistStuff">

            <ul>
              <li> Year formed: </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>
              <li> .... </li>

              <p>More stuff...</p>
            </ul>
          </div>

          <div id="infoList">

            <div class="infoPic" v-for="data in infoResult" v-bind:key="data">
              <a :href='data.url' target="_blank">
                <img class="albumPicture" :src='data.picture' alt='img' />
              </a>

            </div>

          </div>

        </div>

        <div id="spotifyCont">
          <iframe id="spotifyPlayer" src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A41bTjcSaiEe4G40RVVHbux&theme=white" frameborder="0" allowtransparency="true"></iframe>
        </div>

      </div>

      <div class="artistContent">

        <div id="artistDesc">

          <H1>This band is a band</H1>
          <iframe :src="'https://open.spotify.com/follow/1/?uri=spotify:artist:'+$route.params.spotify+'&size=detail&theme=light'" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>

        </div>

        <div id="albumList">
          <ul>

            <li class="inline" v-for="data in albumResult" v-bind:key="data">
              <div class="albumTab">
                <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.album_musicbrainz_id   }}"> {{ data.title }} </router-link>
                <!--  fix routing!!! -->

                <!--  ADD BACK BUTTON -->
                <div class="albumPic">
                  <img class="albumPicture" :src="'https://coverartarchive.org/release-group/' + data.album_musicbrainz_id + '/front.jpg'" alt="Album cover not found" />
                </div>

                <ul>

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
                </ul>

              </div>
            </li>
          </ul>
        </div>

        <b-carousel style="text-shadow: 1px 1px 2px #333;" controls indicators img-width="90%" img-height="20em" background="#ababab" :interval="4000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

          <!-- Text slides with image -->

          <b-carousel-slide caption="ForsenBoys" img-blank img-alt="Blank image">

            <img id="recImg" src="https://ih0.redbubble.net/image.226441965.6955/flat,800x800,075,t.jpg" alt="img">

          </b-carousel-slide>

        </b-carousel>

        <div id="artistReviews">

          <div id="addReview">

            <button id="reviewButton" type="button" v-if="this.username != null" class="btn btn-info" data-toggle="collapse" data-target="#newReview">Write a review</button>
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
                  <input type="hidden" name="artistId" readonly class="form-control-plaintext" id="artistId" v-bind:value="this.id">
                </div>
                <button type="submit" class="btn btn-warning btn-lg">Save</button>
              </form>
            </div>
          </div>

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
        </div>

        <div id="artistRecommendations">

        </div>

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
      reviewResult: '',
      infoResult: '',
      average: 0,
      id: this.$route.params.id,
      username: null,

    }
  },
  created: function() {
    axios.get("/api/user/get/")
      .then((response) => {
        this.username = response.data;
      })
      .catch(function(error) {
      });
    axios.get("/api/albums/" + this.$route.params.name)
      .then((response) => {
        this.albumResult = response.data.data;
      })
      .catch(function(error) {
        alert(error);
      });
    axios.get("/api/artists/info/" + this.$route.params.id)
      .then((response) => {
        this.infoResult = response.data;

      })
      .catch(function(error) {
        alert(error);
      });
    axios.get("/api/reviews/get/" + this.$route.params.id)
      .then((response) => {
        this.reviewResult = response.data;
        let total = 0.0;
        let count = 0.0;
        for (let value of this.reviewResult) {
          total += value.score;
          count += 1;
        }
        this.average = Math.round((total / count) * 10) / 10;
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

.inline {
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

.artistInfo {
  margin: 1% 3% 3% 3%;
  width: 29%;
  height: 90%;
  float: left;
  position: fixed;
  background: whitesmoke;
  border-radius: 1em;
}

.artistContent {
  width: 62%;
  margin: 1% 3% 3% 0%;
  float: right;
  background: whitesmoke;
  border-radius: 1em;
  padding-top: 1%;
}

#spotifyPlayer {
  width: 100%;
  height: 100%;
}

#spotifyCont {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 35%;
  width: 85%;
  margin: auto;
}

#artistDetails {
  height: 50%;
  width: 100%;
}

.artistBody {
  background: #42a1f4 !important;
}

#reviewButton {
  width: 90%;
  margin-top: 2em;
}

#newReview {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 2em;
}

#infoList {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-content: flex-end;
  align-content: flex-end;
  margin: auto;
  width: 85%;
  height: 35%;
}

.infoPic {
  border-radius: 4px;
  border: 2px solid #1d2120;
  height: 3em;
  width: 3em;
  margin: 1em;
}



#recImg {
  float: right;
  border-radius: 4px;
  border: 5px solid #1d2120;
  height: 7em;
  width: 7em;
}
</style>