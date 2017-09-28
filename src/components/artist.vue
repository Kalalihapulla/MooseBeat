<template>
  <div class="artist">
    <b-row>
      <b-col cols="1"></b-col>

      <b-col cols="3">
        <button type="button" v-if="this.username != null" class="btn btn-info" data-toggle="collapse" data-target="#demo">Write a review</button>
        <br>
        <div id="demo" class="collapse">
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

      </b-col>
      <div class="reviews">
        <b-col cols="1"></b-col>
        <div class="row">
          <div class="col-sm-3">
            <div class="rating-block">
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
          <div class="col-sm-3">
            <h4>Rating breakdown</h4>
            <div class="pull-left">
              <div class="pull-left" style="width:35px; line-height:1;">
                <div style="height:9px; margin:5px 0;">5
                  <span class="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div class="pull-left" style="width:180px;">
                <div class="progress" style="height:9px; margin:8px 0;">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style="width: 1000%">
                    <span class="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div class="pull-right" style="margin-left:10px;">1</div>
            </div>
            <div class="pull-left">
              <div class="pull-left" style="width:35px; line-height:1;">
                <div style="height:9px; margin:5px 0;">4
                  <span class="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div class="pull-left" style="width:180px;">
                <div class="progress" style="height:9px; margin:8px 0;">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style="width: 80%">
                    <span class="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div class="pull-right" style="margin-left:10px;">1</div>
            </div>
            <div class="pull-left">
              <div class="pull-left" style="width:35px; line-height:1;">
                <div style="height:9px; margin:5px 0;">3
                  <span class="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div class="pull-left" style="width:180px;">
                <div class="progress" style="height:9px; margin:8px 0;">
                  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style="width: 60%">
                    <span class="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div class="pull-right" style="margin-left:10px;">0</div>
            </div>
            <div class="pull-left">
              <div class="pull-left" style="width:35px; line-height:1;">
                <div style="height:9px; margin:5px 0;">2
                  <span class="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div class="pull-left" style="width:180px;">
                <div class="progress" style="height:9px; margin:8px 0;">
                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style="width: 40%">
                    <span class="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div class="pull-right" style="margin-left:10px;">0</div>
            </div>
            <div class="pull-left">
              <div class="pull-left" style="width:35px; line-height:1;">
                <div style="height:9px; margin:5px 0;">1
                  <span class="glyphicon glyphicon-star"></span>
                </div>
              </div>
              <div class="pull-left" style="width:180px;">
                <div class="progress" style="height:9px; margin:8px 0;">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style="width: 20%">
                    <span class="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div class="pull-right" style="margin-left:10px;">0</div>
            </div>
          </div>
        </div>
        <ul>
          <li v-for="data in reviewResult" v-bind:key="data">
            <div class="row">
              <div class="col-sm-7">
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
      picResult: '',
      reviewResult: '',
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
</style>