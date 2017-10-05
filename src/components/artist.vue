<template>
  <div class="artist">

    <div class="artistBody">

      <div class="artistInfo">
        <div id="artistTitle">
          <h1>{{$route.params.name}}</h1>
          <br>
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
            <li> .... </li>
            <li> .... </li>

            <p>More stuff...</p>
          </ul>
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
          <iframe id="artistFollow" :src="'https://open.spotify.com/follow/1/?uri=spotify:artist:'+$route.params.spotify+'&size=detail&theme=light'" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>

          <div id="rating-block">
            <h4>Average user rating</h4>
            <h2 class="bold padding-bottom-7">{{this.average}}
              <small>/ 5</small>
            </h2>
            <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
          </div>

        </div>

        <div id="albumList">
          <ul>

            <li class="inline" v-for="data in albumResult" v-bind:key="data">
              <div class="albumTab">
                <router-link :to="{ name: 'album', params: {title:  data.title,   id: data.album_musicbrainz_id, artist: $route.params.name  }}"> {{ data.title }} </router-link>

                <div class="albumPic">
                  <img class="albumPicture" :src="'https://coverartarchive.org/release-group/' + data.album_musicbrainz_id + '/front.jpg'" alt="Album cover not found" />
                </div>

                <ul>

                  <li class="inline" v-if="data.release_date == undefined"> Date: Not found </li>
                  <li class="inline" v-else> Date: {{ data.release_date }} </li>

                  <li class="inline">
                    <b-button id="addButton" target="_blank" :href="'/api/user/albums/add/'+data.artist_name + '/' +data.title + '/' +data.album_musicbrainz_id" v-b-tooltip.hover.auto title="Add this album to your profile" type="submit" variant="primary">Add</b-button>
                  </li>
                  <li class="inline">
                    <b-dropdown id="" text="Songs">

                      <b-dropdown-item-button disabled>Coming soon</b-dropdown-item-button>

                    </b-dropdown>
                  </li>
                </ul>

              </div>
            </li>
          </ul>
        </div>
        <div id="recommendations">

          <b-carousel style="text-shadow: 1px 1px 2px #333;" controls indicators img-width="100%" img-height="25em" background="whitesmoke" :interval="4000" v-model="slide">

            <b-carousel-slide id="recSlide" v-for="data in recResult" v-bind:key="data">
              <h1 id="recText"> {{ data.name}} </h1>
              <iframe id="recFollow" :src="'https://open.spotify.com/follow/1/?uri=spotify:artist:'+data.id+'&size=detail&theme=light'" frameborder="0" allowtransparency="false"></iframe>
              <b-dropdown id="recGenres" dropup text="Genres" variant="primary">
                <b-dropdown-header> {{ data.genres[0]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[1]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[2]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[3]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[4]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[5]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[6]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[7]}} </b-dropdown-header>
                <b-dropdown-header> {{ data.genres[8]}} </b-dropdown-header>

              </b-dropdown>

              <img id="recImage" slot="img" :src="data.images[0].url" alt="N/A">
            </b-carousel-slide>

          </b-carousel>

        </div>

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
        <div id="artistStuff">

          <ul class="list-group row">
            <li v-for="data in spotifyResult" v-bind:key="data" class="col-sm-12">
              <div class="col-sm-2">
                {{data.name}}
              </div>
              <div class="col-sm-2">
                <img class="topImage" :src="data.album.images[2].url" alt="N/A">

              </div>

              <div class="col-sm-12">
                Popularity {{data.popularity}}
              </div>
              <div class="col-sm-12">

                <audio controls>
                  <source :src="data.preview_url" type="audio/mpeg">
                </audio>
              </div>
              <iframe :src="'https://open.spotify.com/embed?uri='+data.uri" frameborder="0" allowtransparency="true"></iframe>

            </li>

          </ul>
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
      spotifyResult: '',
      recResult: '',
      average: 0,
      id: this.$route.params.id,
      username: null,

    }
  },
  created: function() {


    axios.get("/api/spotify/get/related/" + this.$route.params.spotify)
      .then((response) => {
        this.recResult = response.data.artists;

      })
      .catch(function(error) {

      });
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
    axios.get("/api/spotify/get/toptracks/" + this.$route.params.spotify)
      .then((response) => {
        this.spotifyResult = response.data.tracks;

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
h1 {
  color: black;
}

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
  color: #871ca5;
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

audio {

  margin: 0 auto;
  width: 30%/* value of your choice which suits your alignment */
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
  word-wrap: break-word;
}

.review-block-description {
  font-size: 13px;
  word-wrap: break-word;
}

.artistInfo {
  margin: 1% 3% 3% 3%;
  width: 29%;
  height: 90%;
  float: left;
  position: fixed;
  background: whitesmoke;
  border-radius: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.artistContent {
  width: 62%;
  margin: 1% 3% 3% 0%;
  float: right;
  background: whitesmoke;
  border-radius: 1em;
  padding-top: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  height: 38%;
  width: 85%;
  padding-bottom: 1%;
  padding-top: 1%;
  margin: auto;
}

#artistDetails {
  height: 45%;
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



#recImage {
  width: 50%;
  height: 100%;
}


#recText {
  font-weight: bold;
  font-size: 3em;
  color: white;
}

#recSlide {
  width: 90%;
  height: 25em;
  background: #a3a8af;
  margin: auto;
  border-radius: 4px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#albumlist {
  margin-bottom: 2em;
}

#recGenres {
  /* margin-right: -15em; */
  text-shadow: none !important;
  font-size: 2em;
  position: absolute;
  bottom: 0.8em;
  right: 0;
  opacity: 0.8;
  color: #871ca5 !important;
  background: #871ca5;
  border-color: #871ca5;
}

#recFollow {
  position: absolute;
  bottom: 1.5em;
  left: 0;
  height: 5.5em;
  width: 8.6em;
  padding: 4px;
  background: whitesmoke;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
}

#recommendations {
  margin-top: 2em;
}

#artistDesc {
  width: 88%;
  height: 14em;
  background: white;
  margin: auto;
  margin-top: 1em !important;
  border-radius: 4px;
  padding-top: 0.5em;
}

#rating-block {
  border-radius: 3px;
  width: 15em;
  height: 10em;
  float: left;
}

#artistFollow {
  float: right;
}

#artistTitle h1 {
  color: #871ca5;
  text-shadow: -0.5px -0.5px 0 #000,
  0.5px -0.5px 0 #000,
  -0.5px 0.5px 0 #000,
  0.5px 0.5px 0 #000;
  font-weight: bold;
  margin-top: 0.6em;
  font-size: 3em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

#addButton {
  color: white;
  background: #871ca5;
  border-color: #871ca5;
}
</style>